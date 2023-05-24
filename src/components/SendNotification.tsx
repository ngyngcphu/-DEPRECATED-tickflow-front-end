import { Dropdown } from 'flowbite-react';
import { Notification } from '@components';
import { ChevronDownIcon, EnvelopeOpenIcon } from '@heroicons/react/24/solid';

export function SendNotification() {
  return (
    <Dropdown
      arrowIcon={false}
      label={
        <>
          <EnvelopeOpenIcon className='mr-3 w-4 text-blue-500' />
          <span className='text-sm font-semibold text-blue-500'>Gửi thông báo</span>
          <ChevronDownIcon className='ml-3 w-5 text-blue-500' />
        </>
      }
      style={{ backgroundColor: '#EBF5FF' }}
    >
      {Notification.map((noti, index) => (
        <Dropdown.Item key={index}>{noti}</Dropdown.Item>
      ))}
    </Dropdown>
  );
}
