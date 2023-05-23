import { ChangeEvent, useState, useEffect } from 'react';
//import { useNavigate, NavigateFunction } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Label, Modal, TextInput } from 'flowbite-react';
import { ExclamationCircleIcon, UserIcon, LockClosedIcon } from '@heroicons/react/24/solid';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { authService } from '@services';
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

  //const navigate: NavigateFunction = useNavigate();

  const [showModalCreateAccount, setShowModalCreateAccount] = useState<boolean>(false);
  const [showModalLoginSuccess, setShowModalLoginSuccess] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<string>('password');
  const [validColor, setValidColor] = useState<Auth>({
    username: 'gray',
    password: 'gray'
  });
  const [formValues, setFormValues] = useState<Auth>({
    username: '',
    password: ''
  });

  const onSubmit = (data: Auth) => {
    console.log(data);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const handleShowPassword = () => {
    if (showPassword === 'password') {
      setShowPassword('text');
    } else {
      setShowPassword('password');
    }
  };

  useEffect(() => {
    if (!errors.username?.message && !errors.password?.message) {
      authService.login(formValues.username, formValues.password).then((response) => {
        console.log(response);
        // if (response.data.isAuthenticated === true) {
        //   navigate("/overview");
        // } else {
        //   setShowModalLoginSuccess(true);
        // }
      });
    }
  }, [errors]);

  useEffect(() => {
    if (errors.username?.message) {
      setValidColor((prevState) => ({
        ...prevState,
        username: 'failure'
      }));
    } else {
      setValidColor((prevState) => ({
        ...prevState,
        username: 'gray'
      }));
    }

    if (errors.password?.message) {
      setValidColor((prevState) => ({
        ...prevState,
        password: 'failure'
      }));
    } else {
      setValidColor((prevState) => ({
        ...prevState,
        password: 'gray'
      }));
    }
  }, [errors]);

  const handleFocusUsername = () => {
    if (validColor.username === 'failure') {
      setValidColor((prevState) => ({
        ...prevState,
        username: 'gray'
      }));
    }
  };

  const handleFocusPassword = () => {
    if (validColor.password === 'failure') {
      setValidColor((prevState) => ({
        ...prevState,
        password: 'gray'
      }));
    }
  };

  return (
    <div className='h-screen'>
      <div className='container mx-auto h-screen bg-[#DDF3F2]'>
        <div className='grid-cols-2 lg:grid'>
          <div className='hidden h-screen items-center justify-items-center lg:flex lg:grid'>
            <img className='w-2/3' src={img} />
          </div>
          <div className='h-screen rounded-l-3xl bg-white py-4'>
            <h1 className='mb-5 text-center font-archivo text-[70px] text-[#19A69C]'>Log in</h1>
            <form className='flex flex-col gap-2' onSubmit={handleSubmit(onSubmit)}>
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
                color={validColor.username}
                id='username'
                value={formValues.username}
                type='text'
                placeholder='Username'
                icon={UserIcon}
                onChange={handleChange}
                onFocus={handleFocusUsername}
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
                  color={validColor.password}
                  id='password'
                  value={formValues.password}
                  type={showPassword}
                  placeholder='Password'
                  icon={LockClosedIcon}
                  onChange={handleChange}
                  onFocus={handleFocusPassword}
                />
                <span
                  className='absolute inset-y-0 right-32 flex items-center'
                  onClick={handleShowPassword}
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
            <a href='#' className='mb-5 grid justify-items-center text-[#05A59D] hover:underline'>
              Forgot password?
            </a>
            <div className='grid'>
              <Button
                className='mx-32'
                type='submit'
                size='md'
                style={{ backgroundColor: '#F69C35', fontWeight: '800' }}
                onClick={() => setShowModalCreateAccount(true)}
              >
                Create new account
              </Button>
            </div>
            <Modal
              show={showModalCreateAccount}
              size='md'
              popup={true}
              onClose={() => setShowModalCreateAccount(false)}
            >
              <Modal.Body>
                <div className='text-center'>
                  <ExclamationCircleIcon className='mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200' />
                  <h3 className='mb-5 text-lg font-normal text-gray-500 dark:text-gray-400'>
                    Hiện tại chưa có chức năng này. Bạn vui lòng liên hệ Admin để nhận thông tin
                    truy cập.
                  </h3>
                  <div className='flex justify-center gap-4'>
                    <Button color='failure' onClick={() => setShowModalCreateAccount(false)}>
                      Cancel
                    </Button>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
            <Modal
              show={showModalLoginSuccess}
              size='md'
              popup={true}
              onClose={() => setShowModalLoginSuccess(false)}
            >
              <Modal.Body>
                <div className='text-center'>
                  <ExclamationCircleIcon className='mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200' />
                  <h3 className='mb-5 text-lg font-normal text-gray-500 dark:text-gray-400'>
                    Sai tài khoản hoặc mật khẩu. Vui lòng kiểm tra lại thông tin đăng nhập.
                  </h3>
                  <div className='flex justify-center gap-4'>
                    <Button color='failure' onClick={() => setShowModalLoginSuccess(false)}>
                      Cancel
                    </Button>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}
