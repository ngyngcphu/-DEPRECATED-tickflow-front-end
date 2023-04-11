import { ChangeEvent, useState } from "react";
import { Button, Checkbox, Label, Select, TextInput } from "flowbite-react";
import { EmailProposalProps, EmailProposal } from "../templates/EmailNoti";
import { TemplatesName } from "../templates/TemplatesName";

export function ProposalParams() {
  const member: Array<string> = ["Nguyễn Thanh Hiền", "Nguyễn Hồng Quân", "Hoàng Lương", "Nguyễn Ngọc Phú"];
  const mentor: Array<string> = ["Nguyễn Phúc Vinh", "Cù Đỗ Thanh Nhân", "Vũ Nguyễn Minh Huy", "Ngô Minh Hồng Thái"];

  const [params, setParams] = useState<EmailProposalProps>({
    subject: "",
    sender: "",
    receiver: "",
    timeSchedule: "",
    dateSchedule: "",
    link: ""
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = event.target;
    setParams({ ...params, [id]: value });
  };

  return (
    <div className='grid grid-cols-5'>
      <div className='grid col-span-2 items-start gap-2'>
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
        <div className='grid grid-cols-2 overflow-y-scroll h-96 p-4 gap-5'>
          <div className='col-span-2'>
            <Label htmlFor='title'>
              Tiêu đề nội dung<span className='text-[#F12323]'>*</span>
            </Label>
            <TextInput id='subject' name='subject' value={params.subject} onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor='sender'>
              Người gửi<span className='text-[#F12323]'>*</span>
            </Label>
            <Select id='sender' name='sender' value={params.sender} onChange={handleChange} required={true}>
              <option>---Chọn---(bắt buộc)</option>
              {member.map((member, index) => (
                <option key={index}>{member}</option>
              ))}
            </Select>
          </div>
          <div>
            <Label htmlFor='receiver'>
              Người nhận<span className='text-[#F12323]'>*</span>
            </Label>
            {/* <TextInput id='receiver' name='receiver' value={params.receiver} onChange={handleChange} /> */}
            <Select id='receiver' name='receiver' value={params.receiver} onChange={handleChange} required={true}>
              <option>---Chọn---(bắt buộc)</option>
              {mentor.map((mentor, index) => (
                <option key={index}>{mentor}</option>
              ))}
            </Select>
          </div>
          <div>
            <Label htmlFor='CC'>CC</Label>
            <Select id='CC'>
              <option>(Optional)</option>
              {member.map((member, index) => (
                <option key={index}>{member}</option>
              ))}
            </Select>
          </div>
          <div>
            <Label htmlFor='BCC'>BCC</Label>
            <Select id='BCC'>
              <option>(Optional)</option>
              {member.map((member, index) => (
                <option key={index}>{member}</option>
              ))}
            </Select>
          </div>
          <div>
            <Label htmlFor='via'>
              Send via<span className='text-[#F12323]'>*</span>
            </Label>
            <Select id='via' required={true}>
              <option>Email</option>
              <option>Slack</option>
            </Select>
          </div>
          <div>
            <Label htmlFor='schedule'>
              Lịch hẹn<span className='text-[#F12323]'>*</span>
            </Label>
            <div className='flex flex-row'>
              <TextInput
                className='basis-1/4'
                id='timeSchedule'
                name='timeSchedule'
                type='time'
                value={params.timeSchedule}
                onChange={handleChange}
              />
              <TextInput
                className='basis-3/4'
                id='dateSchedule'
                name='dateSchedule'
                type='date'
                value={params.dateSchedule}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <Label htmlFor='link'>Link tài liệu</Label>
            <TextInput id='link' name='link' value={params.link} onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor='format'>
              Hình thức<span className='text-[#F12323]'>*</span>
            </Label>
            <Select id='format' required={true}>
              <option>Offline</option>
              <option>Online</option>
            </Select>
          </div>
          <div id='checkbox' className='col-span-2'>
            <div className='flex items-center gap-2'>
              <Label htmlFor='accept'>Send to all member</Label>
              <Checkbox id='accept' className='bg-gray-200 border-gray-500 dark:bg-gray-100' />
            </div>
          </div>
          <div className='col-span-2'>
            <hr className='h-px bg-gray-700 border-0 dark:bg-gray-200'></hr>
          </div>
        </div>
      </div>
      <div className='col-span-3'>
        <div>
          <div className='flex justify-between p-4'>
            <Button className='w-60 bg-[#E6E6E6] text-black hover:bg-[#999999]'>Gmail</Button>
            <Button className='w-60 bg-[#E6E6E6] text-black hover:bg-[#999999]'>Slack</Button>
          </div>
        </div>
        <div className='px-5'>
          <EmailProposal
            subject={params.subject}
            sender={params.sender}
            receiver={params.receiver}
            timeSchedule={params.timeSchedule}
            dateSchedule={params.dateSchedule}
            link={params.link}
          />
        </div>
      </div>
    </div>
  );
}
