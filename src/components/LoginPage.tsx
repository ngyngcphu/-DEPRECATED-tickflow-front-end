import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { Button, Label, Modal, TextInput } from "flowbite-react";
import { ExclamationCircleIcon, EyeIcon, EyeSlashIcon, UserIcon, LockClosedIcon } from "@heroicons/react/24/solid";
import img from "../assets/login.png";

interface InitialFormValues {
  username: string;
  password: string;
}

interface FormError {
  username: string;
  password: string;
}

interface ValidColor {
  username: string;
  password: string;
}

export function LoginPage() {
  const [showModal, setShowModal] = useState(false);
  const [showPassword, setShowPassword] = useState("password");
  const [validColor, setValidColor] = useState<ValidColor>({
    username: "grey",
    password: "grey"
  });
  const [formValues, setFormValues] = useState<InitialFormValues>({
    username: "",
    password: ""
  });
  const [formError, setFormError] = useState<FormError>({
    username: "",
    password: ""
  });

  const onClick = () => {
    setShowModal(true);
  };

  const onClose = () => {
    setShowModal(false);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const handleShowPassword = () => {
    if (showPassword === "password") {
      setShowPassword("text");
    } else {
      setShowPassword("password");
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError(validate(formValues));
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

  useEffect(() => {
    if (formError.username.length > 0) {
      setValidColor((prevState) => ({
        ...prevState,
        username: "failure"
      }));
    } else {
      setValidColor((prevState) => ({
        ...prevState,
        username: "grey"
      }));
    }

    if (formError.password.length > 0) {
      setValidColor((prevState) => ({
        ...prevState,
        password: "failure"
      }));
    } else {
      setValidColor((prevState) => ({
        ...prevState,
        password: "grey"
      }));
    }
  }, [formError]);

  const handleFocusUsername = () => {
    if (validColor.username === "failure") {
      setValidColor((prevState) => ({
        ...prevState,
        username: "grey"
      }));
    }
  };

  const handleFocusPassword = () => {
    if (validColor.password === "failure") {
      setValidColor((prevState) => ({
        ...prevState,
        password: "grey"
      }));
    }
  };

  console.log("Hello");

  return (
    <div className='bg-[#F8F8F8] h-screen'>
      <div className='container mx-auto h-screen bg-[#DDF3F2]'>
        <div className='lg:grid grid-cols-2'>
          <div className='h-screen hidden lg:flex items-center lg:grid justify-items-center'>
            <img className='w-2/3' src={img} />
          </div>
          <div className='h-screen bg-[#FFFFFF] rounded-l-3xl py-4'>
            <h1 className='text-center text-[#19A69C] text-[70px] font-archivo mb-5'>Log in</h1>
            <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
              <Label className='ml-32 text-[20px] font-archivo' htmlFor='username' style={{ color: "#444444" }}>
                Username <span className='text-[#F12323]'>*</span>
              </Label>
              <TextInput
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
              <p className='ml-32 mb-5 font-archivo text-[#F12323] text-[16px]'>{formError.username}</p>
              <Label className='ml-32 block text-[20px] font-archivo' htmlFor='password' style={{ color: "#444444" }}>
                Password <span className='text-[#F12323]'>*</span>
              </Label>
              <div className='relative'>
                <TextInput
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
                <span className='absolute inset-y-0 flex items-center right-32' onClick={handleShowPassword}>
                  {showPassword === "text" ? <EyeIcon className='h-6 ml' /> : <EyeSlashIcon className='h-6' />}
                </span>
              </div>
              <p className='ml-32 font-archivo text-[#F12323] text-[16px]'>{formError.password}</p>
              <Button className='mx-32 mt-5 font-archivo' type='submit' size='md' style={{ backgroundColor: "#05A59D" }}>
                Log in
              </Button>
            </form>
            <hr className='mx-28 h-px mt-8 bg-gray-200 border-0 dark:bg-gray-700' />
            <a href='#' className='grid justify-items-center text-[#05A59D] hover:underline mb-5'>
              Forgot password?
            </a>
            <div className='grid'>
              <Button className='mx-32' type='submit' size='md' style={{ backgroundColor: "#F69C35", fontWeight: "800" }} onClick={onClick}>
                Create new account
              </Button>
            </div>
            <Modal show={showModal} size='md' popup={true} onClose={onClose}>
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
          </div>
        </div>
      </div>
    </div>
  );
}
