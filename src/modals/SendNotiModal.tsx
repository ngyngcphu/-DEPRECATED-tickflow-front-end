import { ChangeEvent, useEffect, useState } from "react";
import { Button, Checkbox, Label, Select, TextInput } from "flowbite-react";
import { EmailProposal } from "../pages/templates/EmailNoti";
import { SlackProposal } from "../pages/templates/SlackNoti";
import { TemplatesName } from "../constants/templatesName";
import { AutoSuggestSendNotiForm } from "../components/AutoSuggestSendNotiForm";
import { SendNotification } from "../interfaces/sendNotification";
import gmailIcon from "../assets/gmailIcon.svg";
import slackIcon from "../assets/slackIcon.svg";

export function SendNotiModal(props: SendNotification) {
  const [notiData, setNotiData] = useState<SendNoti>({
    subject: "",
    sender: [],
    receiver: [],
    CC: [],
    BCC: [],
    timeSchedule: "",
    dateSchedule: "",
    link: ""
  });

  const [formattedDateSchedule, setFormattedDateSchedule] = useState<string>("");

  const tabs: MediaTab[] = [
    {
      tabName: "Gmail",
      icon: gmailIcon,
      component: (
        <EmailProposal
          subject={notiData.subject}
          sender={notiData.sender}
          receiver={notiData.receiver}
          CC={notiData.CC}
          BCC={notiData.BCC}
          timeSchedule={notiData.timeSchedule}
          dateSchedule={formattedDateSchedule}
          link={notiData.link}
        />
      ),
      disable: false
    },
    {
      tabName: "Slack",
      icon: slackIcon,
      component: (
        <SlackProposal
          subject={notiData.subject}
          sender={notiData.sender}
          receiver={notiData.receiver}
          CC={notiData.CC}
          BCC={notiData.BCC}
          timeSchedule={notiData.timeSchedule}
          dateSchedule={notiData.dateSchedule}
          link={notiData.link}
        />
      ),
      disable: false
    }
  ];
  const [type, setType] = useState<number>(0);

  useEffect(() => {
    console.log(notiData);
    setNotiData({
      subject: "",
      sender: [],
      receiver: [],
      CC: [],
      BCC: [],
      timeSchedule: "",
      dateSchedule: "",
      link: ""
    });
  }, [props.show]);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = event.target;
    setNotiData({ ...notiData, [id]: value });
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
            <TextInput id='subject' name='subject' value={notiData.subject} onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor='sender'>
              Người gửi<span className='text-[#F12323]'>*</span>
            </Label>
            <AutoSuggestSendNotiForm id='sender' setNotiData={setNotiData} temp={props.temp} setTemp={props.setTemp} />
          </div>
          <div>
            <Label htmlFor='receiver'>
              Người nhận<span className='text-[#F12323]'>*</span>
            </Label>
            <AutoSuggestSendNotiForm id='receiver' setNotiData={setNotiData} temp={props.temp} setTemp={props.setTemp} />
          </div>
          <div>
            <Label htmlFor='CC'>CC</Label>
            <AutoSuggestSendNotiForm id='CC' setNotiData={setNotiData} temp={props.temp} setTemp={props.setTemp} />
          </div>
          <div>
            <Label htmlFor='BCC'>BCC</Label>
            <AutoSuggestSendNotiForm id='BCC' setNotiData={setNotiData} temp={props.temp} setTemp={props.setTemp} />
          </div>
          <div>
            <Label htmlFor='via'>
              Send via<span className='text-[#F12323]'>*</span>
            </Label>
            <Select id='via' name='via' required={true}>
              {tabs.map((tab, index) => (
                <option key={index}>{tab.tabName}</option>
              ))}
              <option>Tất cả</option>
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
                value={notiData.timeSchedule}
                onChange={handleChange}
              />
              <TextInput
                className='basis-3/4'
                id='dateSchedule'
                name='dateSchedule'
                type='date'
                value={notiData.dateSchedule}
                onChange={handleChange}
                onBlur={() => {
                  setFormattedDateSchedule(new Intl.DateTimeFormat("vi", { dateStyle: "full" }).format(new Date(notiData.dateSchedule)));
                }}
              />
            </div>
          </div>
          <div>
            <Label htmlFor='link'>Link tài liệu</Label>
            <TextInput id='link' name='link' value={notiData.link} onChange={handleChange} />
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
          <div className='flex justify-between items-center justify-items-center p-4'>
            {tabs.map((tab, index) => (
              <Button
                key={index}
                disabled={tabs[index].disable}
                className='w-60 text-black hover:!bg-[#999999]'
                style={type === index ? { backgroundColor: "#999999" } : { backgroundColor: "#E6E6E6" }}
                onClick={() => setType(index)}
              >
                <div className='flex gap-2 items-center justify-items-center'>
                  <img src={tab.icon} alt='gmailIcon'></img>
                  <span className='text-black'>{tab.tabName}</span>
                </div>
              </Button>
            ))}
          </div>
        </div>
        <div className='px-5 overflow-y-scroll h-96'>{tabs[type].component}</div>
      </div>
    </div>
  );
}
