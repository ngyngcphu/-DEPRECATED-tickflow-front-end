import { useState } from 'react';
import { Button, Label, Modal, TextInput } from 'flowbite-react';

export function ScheduleSend() {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div>
      <p
        className='cursor-pointer text-[#444444] underline underline-offset-8 hover:text-[#999999]'
        onClick={() => setShow(true)}
      >
        Schedule send
      </p>
      <Modal show={show} size='sm' onClose={() => setShow(false)}>
        <Modal.Header className='border-b border-gray-200 !p-6 dark:border-gray-700'>
          <strong className='font-archivo text-2xl text-[#19A69C]'>Chọn lịch hẹn gửi</strong>
        </Modal.Header>
        <Modal.Body>
          <Label htmlFor='schedule'>
            Lịch hẹn<span className='text-[#F12323]'>*</span>
          </Label>
          <div className='flex flex-row gap-2'>
            <TextInput className='basis-1/4' id='timeSchedule' name='timeSchedule' type='time' />
            <TextInput className='basis-3/4' id='dateSchedule' name='dateSchedule' type='date' />
          </div>
        </Modal.Body>
        <Modal.Footer className='justify-end'>
          <Button
            className='bg-gray-400 hover:bg-[#444444] dark:bg-gray-600 dark:hover:bg-[#444444]'
            onClick={() => setShow(false)}
          >
            Cancel
          </Button>
          <Button
            className='!bg-[#06BCB3] hover:bg-[#19A69C] dark:bg-green-700 dark:hover:bg-green-900'
            onClick={() => setShow(false)}
          >
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
