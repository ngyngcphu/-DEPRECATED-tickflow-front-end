import React, { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { Button, Label, Modal, TextInput } from "flowbite-react";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import img from "../assets/login.png";

interface InitialFormValues {
  username: string;
  password: string;
}

interface FormError {
  username: string;
  password: string;
}

export function LoginPage() {
  const [show, setShow] = useState(false);
  const [formValues, setformValues] = useState<InitialFormValues>({
    username: "",
    password: ""
  });
  const [formError, setformError] = useState<FormError>({
    username: "",
    password: ""
  });

  const onClick = () => {
    setShow(true);
  };

  const onClose = () => {
    setShow(false);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setformValues({ ...formValues, [id]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setformError(validate(formValues));
  };

  const validate = (values: InitialFormValues) => {
    const errors: FormError = {
      username: "",
      password: ""
    };
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length <= 8) {
      errors.password = "Password must be more than 8 characters";
    }
    return errors;
  };

  return (
    <div className='bg-[#F8F8F8] h-screen p-8'>
      <div className='container mx-auto h-[80vh] bg-[#DDF3F2] shadow-2xl'>
        <div className='lg:grid grid-cols-3'>
          <div className='h-[80vh] flex items-center grid justify-items-center'>
            <img src={img} />
          </div>
          <div className='bg-[#FFFFFF] rounded-l-3xl col-span-2'>
            <h1 className='text-center text-[#19A69C] text-[70px] font-bold'>Log in</h1>
            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
              <div className='px-[200px] block'>
                <Label color='black' htmlFor='email1' value='Enter your username' />
              </div>
              <div className='px-[200px] mb-5'>
                <TextInput
                  color='grey'
                  id='username'
                  value={formValues.username}
                  type='text'
                  placeholder='username'
                  onChange={handleChange}
                  required={true}
                />
              </div>
              <p>{formError.username}</p>
              <div className='px-[200px] block'>
                <Label color='black' htmlFor='password1' value='Enter your password' />
              </div>
              <div className='px-[200px]'>
                <TextInput
                  color='grey'
                  id='password'
                  value={formValues.password}
                  type='password'
                  placeholder='password'
                  onChange={handleChange}
                  required={true}
                />
              </div>
              <p>{formError.username}</p>
              <div className='grid justify-items-center mt-5'>
                <Button type='submit' color='green' size='md'>
                  Log in
                </Button>
              </div>
            </form>
            <hr className='w-48 mx-auto h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 mb-0' />
            <a href='#' className='grid justify-items-center text-[#05A59D] hover:underline'>
              Forgot password?
            </a>
            <React.Fragment>
              <div className='grid justify-items-center mt-5'>
                <Button type='submit' color='warning' size='md' onClick={onClick}>
                  Create new account
                </Button>
              </div>
              <Modal show={show} size='md' popup={true} onClose={onClose}>
                <Modal.Body>
                  <div className='text-center'>
                    <ExclamationCircleIcon className='mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200' />
                    <h3 className='mb-5 text-lg font-normal text-gray-500 dark:text-gray-400'>
                      Hiện tại chưa có chức năng này. Bạn vui lòng liên hệ Admin để nhận thông tin truy cập.
                    </h3>
                    <div className='flex justify-center gap-4'>
                      <Button color='failure' onClick={onClose}>
                        Cancel
                      </Button>
                    </div>
                  </div>
                </Modal.Body>
              </Modal>
            </React.Fragment>
          </div>
        </div>
      </div>
    </div>
  );
}
