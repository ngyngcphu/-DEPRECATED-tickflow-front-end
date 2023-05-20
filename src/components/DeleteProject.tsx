import { useState } from "react";
import { Button, Modal } from "flowbite-react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";

export function DeleteProject(props: { name: string }) {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div>
      <Button className='mt-5 mx-auto bg-red-300 bg-opacity-20 hover:bg-red-300 hover:bg-opacity-30' onClick={() => setShow(true)}>
        <TrashIcon className='mr-3 w-4 text-red-500' />
        <span className='text-red-500 text-sm font-semibold'>Xóa dự án</span>
      </Button>
      <Modal show={show} size='md' popup={true} onClose={() => setShow(false)}>
        <Modal.Header />
        <Modal.Body>
          <div className='text-center'>
            <ExclamationCircleIcon className='mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200' />
            <h3 className='mb-5 text-lg font-normal text-gray-500 dark:text-gray-400'>Bạn có chắc chắn muốn xóa dự án {props.name}?</h3>
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
