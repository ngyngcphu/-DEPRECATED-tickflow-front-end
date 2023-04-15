import { Label, Button, Modal, Select, TextInput } from "flowbite-react";
import { PlusIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export function AddMember() {
  const members: Array<string> = ["Nguyễn Thanh Hiền", "Nguyễn Hồng Quân", "Hoàng Lương", "Nguyễn Ngọc Phú"];
  const roles: Array<string> = ["Leader", "Mentor", "Member", "Council"];

  const [show, setShow] = useState<boolean>(false);

  return (
    <div className='grid grid-cols-4 gap-12'>
      <div className='w-12 cursor-pointer'>
        <PlusIcon className='bg-[#999999] hover:bg-gray-700 border-4 rounded-full fill-white' onClick={() => setShow(true)} />
      </div>
      <div className='grid col-span-3 items-center'>Add new member</div>
      <Modal show={show} size='sm' onClose={() => setShow(false)}>
        <Modal.Header className='border-b border-gray-200 !p-6 dark:border-gray-700'>
          <strong className='text-[#19A69C] font-archivo text-2xl'>Add new member</strong>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Label htmlFor='memberName'>
              Member's name<span className='text-[#F12323]'>*</span>
            </Label>
            <Select id='memberName' required={true} defaultValue='---Chọn---(bắt buộc)'>
              <option disabled>---Chọn---(bắt buộc)</option>
              {members.map((member, index) => (
                <option key={index}>{member}</option>
              ))}
            </Select>
          </div>
          <div>
            <Label htmlFor='role'>
              Role<span className='text-[#F12323]'>*</span>
            </Label>
            <Select id='role' required={true} defaultValue='---Chọn---(bắt buộc)'>
              <option disabled>---Chọn---(bắt buộc)</option>
              {roles.map((role, index) => (
                <option key={index}>{role}</option>
              ))}
            </Select>
          </div>
          <div>
            <Label htmlFor='joinDate'>
              Joined date<span className='text-[#F12323]'>*</span>
            </Label>
            <TextInput id='joinDate' name='joinDate' type='date' />
          </div>
        </Modal.Body>
        <Modal.Footer className='justify-end'>
          <Button className='bg-gray-400 hover:bg-[#444444] dark:bg-gray-600 dark:hover:bg-[#444444]' onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button className='!bg-[#06BCB3] hover:bg-[#19A69C] dark:bg-green-700 dark:hover:bg-green-900' onClick={() => setShow(false)}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
