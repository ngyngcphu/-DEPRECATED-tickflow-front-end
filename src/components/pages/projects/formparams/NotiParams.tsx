import { ChangeEvent, useState } from "react";
import { Button, Label, Select, TextInput } from "flowbite-react";
import { DocumentArrowUpIcon } from "@heroicons/react/24/solid";
import { EmailProposalProps, EmailProposal } from "../templates/EmailNoti";
import { TemplatesName } from "../templates/TemplatesName";

export function ProposalParams() {
  const [params, setParams] = useState<EmailProposalProps>({
    subject: "",
    receiver: ""
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setParams({ ...params, [id]: value });
  };

  return (
    <div className='grid grid-cols-5'>
      <div className='grid col-span-2 items-start gap-5'>
        <div className='bg-[#CCCCCC]'>
          <div className='p-4'>
            <Label htmlFor='templateName'>
              Tên bản mẫu thông báo<span className='text-[#F12323]'>*</span>
            </Label>
            <Select id='templateName' required={true} defaultValue={TemplatesName[0]}>
              {TemplatesName.map((template, index) => (
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
            <TextInput id='subject' name='subject' value={params.subject} onChange={handleChange} />
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
            <TextInput id='receiver' name='receiver' value={params.receiver} onChange={handleChange} />
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
      </div>
      <div className=' col-span-3'>
        <div className=''>
          <div className='flex justify-between p-4'>
            <Button className='w-60 bg-[#E6E6E6] text-black hover:bg-[#999999]'>Gmail</Button>
            <Button className='w-60 bg-[#E6E6E6] text-black hover:bg-[#999999]'>Slack</Button>
          </div>
        </div>
        <div className='px-5'>
          <EmailProposal subject={params.subject} receiver={params.receiver} />
        </div>
      </div>
    </div>
  );
}
