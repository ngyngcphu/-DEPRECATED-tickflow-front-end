import { Button, Modal, TextInput } from "flowbite-react";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import img from "../assets/login.png";

export function LoginPage() {
  return (
    <div className='bg-[#F8F8F8] h-screen p-8'>
      <div className='container mx-auto h-[80vh] bg-[#DDF3F2] shadow-2xl'>
        <div className='lg:grid grid-cols-3'>
          <div className='h-[80vh] flex items-center grid justify-items-center'>
            <img src={img} />
          </div>
          <div className='bg-[#FFFFFF] rounded-l-3xl col-span-2'>
            <h1 className='text-center text-[#19A69C] text-[70px] font-bold'>Log in</h1>
            <form className='flex flex-col gap-4'>
              <div className='px-[200px] mt-5'>
                <TextInput color='grey' id='name' type='text' placeholder='Username' required={true} />
              </div>
              <div className='px-[200px] mt-5'>
                <TextInput color='grey' id='password' type='password' placeholder='Password' required={true} />
              </div>
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
                <Button type='submit' color='warning' size='md' /*onClick={onClick}*/>
                  Create new account
                </Button>
              </div>
              <Modal
                show={false}
                size='md'
                popup={true}
                /*onClose={onClose}*/
              >
                <Modal.Header />
                <Modal.Body>
                  <div className='text-center'>
                    <ExclamationCircleIcon className='mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200' />
                    <h3 className='mb-5 text-lg font-normal text-gray-500 dark:text-gray-400'>
                      Are you sure you want to delete this product?
                    </h3>
                    <div className='flex justify-center gap-4'>
                      <Button
                        color='failure'
                        /*onClick={onClick}*/
                      >
                        Yes, I'm sure
                      </Button>
                      <Button
                        color='gray'
                        /*onClick={onClick}*/
                      >
                        No, cancel
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
