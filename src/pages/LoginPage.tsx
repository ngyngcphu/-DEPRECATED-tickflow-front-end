import { useState } from 'react';
import { useNavigate, Navigate, NavigateFunction } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Label, TextInput } from 'flowbite-react';
import { UserIcon, LockClosedIcon } from '@heroicons/react/24/solid';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_PENDING, NOT_AVAILABLE } from '@constants';
import { RootState, useAppDispatch, login } from '@states';
import { validationSchema } from '@utils';
import img from '../assets/login.svg';

export function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Auth>({
    resolver: yupResolver(validationSchema)
  });

  const navigate: NavigateFunction = useNavigate();

  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();

  const [showPassword, setShowPassword] = useState<string>('password');

  const handleLogin = async (formValues: Auth) => {
    const { username, password } = formValues;
    await toast.promise(dispatch(login({ username, password })).unwrap(), {
      pending: {
        render() {
          return LOGIN_PENDING;
        }
      },
      success: {
        render() {
          navigate('/overview');
          return LOGIN_SUCCESS;
        }
      },
      error: {
        render() {
          return LOGIN_FAILURE;
        }
      }
    });
  };

  if (isAuthenticated) {
    return <Navigate to='/overview' />;
  }

  return (
    <div className='h-screen'>
      <div className='container mx-auto h-screen bg-[#DDF3F2]'>
        <div className='grid-cols-2 lg:grid'>
          <div className='hidden h-screen items-center justify-items-center lg:flex lg:grid'>
            <img className='w-2/3' src={img} />
          </div>
          <div className='h-screen rounded-l-3xl bg-white py-4'>
            <h1 className='mb-5 text-center font-archivo text-[70px] text-[#19A69C]'>Log in</h1>
            <form className='flex flex-col gap-2' onSubmit={handleSubmit(handleLogin)}>
              <Label
                className='ml-32 font-archivo text-[20px]'
                htmlFor='username'
                style={{ color: '#444444' }}
              >
                Username <span className='text-[#F12323]'>*</span>
              </Label>
              <TextInput
                {...register('username')}
                className='mx-28'
                sizing='lg'
                color={errors.username ? 'failure' : 'gray'}
                id='username'
                type='text'
                placeholder='Username'
                icon={() => <UserIcon />}
              />
              <p className='ml-32 mb-5 font-archivo text-[16px] text-[#F12323]'>
                {errors.username?.message}
              </p>
              <Label
                className='ml-32 block font-archivo text-[20px]'
                htmlFor='password'
                style={{ color: '#444444' }}
              >
                Password <span className='text-[#F12323]'>*</span>
              </Label>
              <div className='relative'>
                <TextInput
                  {...register('password')}
                  className='mx-28'
                  sizing='lg'
                  color={errors.password ? 'failure' : 'gray'}
                  id='password'
                  type={showPassword}
                  placeholder='Password'
                  icon={() => <LockClosedIcon />}
                />
                <span
                  className='absolute inset-y-0 right-32 flex items-center'
                  onClick={() =>
                    showPassword === 'password'
                      ? setShowPassword('text')
                      : setShowPassword('password')
                  }
                >
                  {showPassword === 'text' ? (
                    <EyeIcon className='h-6' />
                  ) : (
                    <EyeSlashIcon className='h-6' />
                  )}
                </span>
              </div>
              <p className='ml-32 font-archivo text-[16px] text-[#F12323]'>
                {errors.password?.message}
              </p>
              <Button
                className='mx-32 mt-5 font-archivo'
                type='submit'
                size='md'
                style={{ backgroundColor: '#05A59D' }}
              >
                Log in
              </Button>
            </form>
            <hr className='mx-28 mt-8 h-px border-0 bg-gray-200 dark:bg-gray-700' />
            <a
              href='#'
              className='mb-5 grid justify-items-center text-[#05A59D] hover:underline'
              onClick={() => toast.error(NOT_AVAILABLE)}
            >
              Forgot password?
            </a>
            <div className='grid'>
              <Button
                className='mx-32'
                type='submit'
                size='md'
                style={{ backgroundColor: '#F69C35', fontWeight: '800' }}
                onClick={() => toast.error(NOT_AVAILABLE)}
              >
                Create new account
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
