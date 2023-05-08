import { useState } from "react";
import { Button, Modal } from "flowbite-react";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";

export function DeleteProject(props: { name: string }) {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div>
      <Button className='mt-5 mx-auto' color='failure' onClick={() => setShow(true)}>
        Delete Project
      </Button>
      <Modal show={show} size='md' popup={true} onClose={() => setShow(false)}>
        <Modal.Header />
        <Modal.Body>
          <div className='text-center'>
            <ExclamationCircleIcon className='mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200' />
            <h3 className='mb-5 text-lg font-normal text-gray-500 dark:text-gray-400'>
              Bạn có chắc chắn muốn xóa dự án <span className='font-archivo'>{props.name}</span>?
            </h3>
            <div className='flex justify-center gap-4'>
              <Button color='failure' onClick={() => setShow(false)}>
                Delete Project
              </Button>
              <Button color='gray' onClick={() => setShow(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
