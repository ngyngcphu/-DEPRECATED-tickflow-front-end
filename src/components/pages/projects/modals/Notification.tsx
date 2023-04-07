import { ReactNode, useState } from "react";
import { Button, Label, Modal, Select, TextInput } from "flowbite-react";
import { DocumentArrowUpIcon, ExclamationCircleIcon } from "@heroicons/react/24/solid";

const templates: Array<string> = [
  "Thư mời hội đồng",
  "Chốt lịch duyệt proposal",
  "Thư mời buổi báo cáo",
  "Thư mời chia sẻ kiến thức",
  "Thông báo đổi lịch",
  "Thông báo đổi địa điểm",
  "Bổ sung tài liệu",
  "Create new templates"
];

function Proposal() {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div>
      <span onClick={() => setShow(true)}>{templates[0]}</span>
      <Modal show={show} size='6xl' popup={true} onClose={() => setShow(false)}>
        <Modal.Body className='!p-0'>
          <div className='grid grid-cols-5'>
            <div className='grid col-span-2 items-start gap-5'>
              <div className='bg-[#CCCCCC]'>
                <div className='p-4'>
                  <Label htmlFor='templateName'>
                    Tên bản mẫu thông báo<span className='text-[#F12323]'>*</span>
                  </Label>
                  <Select id='templateName' required={true} defaultValue={templates[0]}>
                    {templates.map((template, index) => (
                      <option key={index}>{template}</option>
                    ))}
                  </Select>
                </div>
              </div>
              <div className='grid overflow-y-scroll h-96 p-4 gap-5'>
                <div>
                  <Label htmlFor='title'>
                    Tiêu đề nội dung<span className='text-[#F12323]'>*</span>
                  </Label>
                  <TextInput id='title' name='title' />
                </div>
                <div>
                  <Label htmlFor='sender'>
                    Người gửi<span className='text-[#F12323]'>*</span>
                  </Label>
                  <TextInput id='sender' name='sender' />
                </div>
                <div>
                  <Label htmlFor='receiver'>
                    Người nhận<span className='text-[#F12323]'>*</span>
                  </Label>
                  <TextInput id='receiver' name='receiver' />
                </div>
                <div>
                  <Label htmlFor='via'>
                    Gửi qua<span className='text-[#F12323]'>*</span>
                  </Label>
                  <TextInput id='via' name='via' />
                </div>
                <div>
                  <Label htmlFor='schedule'>
                    Lịch hẹn<span className='text-[#F12323]'>*</span>
                  </Label>
                  <div className='flex flex-row space-x-2'>
                    <TextInput className='basis-1/4' id='timeSchedule' name='timeSchedule' type='time' />
                    <TextInput className='basis-3/4' id='dateSchedule' name='dateSchedule' type='date' />
                  </div>
                </div>
                <div>
                  <Label htmlFor='link'>Đường link</Label>
                  <TextInput id='link' name='link' />
                </div>
                <div>
                  <Label htmlFor='attach'>Tài liệu đính kèm</Label>
                  <div className='flex w-full items-center justify-center'>
                    <label className='flex h-32 w-full cursor-pointer flex-col rounded border-2 border-dashed border-gray-300 hover:bg-gray-200 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-400'>
                      <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                        <DocumentArrowUpIcon className='w-12 text-gray-300' />
                        <p className='py-1 text-sm text-gray-600 dark:text-gray-500'>Thả tệp tài liệu tại đây</p>
                      </div>
                      <input type='file' className='hidden' />
                    </label>
                  </div>
                </div>
              </div>
              <Button color='failure' onClick={() => setShow(false)}>
                Cancel
              </Button>
            </div>
            <div className='col-span-3 grid items-center justify-items-center'>Meow Meow</div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

function Council() {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div>
      <span onClick={() => setShow(true)}>{templates[1]}</span>
      <Modal show={show} size='3xl' popup={true} onClose={() => setShow(false)}>
        <Modal.Body>
          <div className='text-center'>
            <ExclamationCircleIcon className='mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200' />
            <h3 className='mb-5 text-lg font-normal text-gray-500 dark:text-gray-400'>Ahihi</h3>
            <div className='flex justify-center gap-4'>
              <Button color='failure' onClick={() => setShow(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export const Notification: Array<ReactNode> = [<Proposal />, <Council />];
