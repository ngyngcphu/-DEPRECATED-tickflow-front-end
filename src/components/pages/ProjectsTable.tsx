import { Table, Checkbox } from "flowbite-react";

export function ProjectsTable() {
  return (
    <Table hoverable={true}>
      <Table.Head className='font-archivo !text-[rgba(5,165,157,1)] bg-gradient-to-b from-[rgba(5,165,157,0.2)] to-[rgba(255,255,255,0.02)]'>
        <Table.HeadCell className='!p-4 border-r  dark:border-gray-700 sr-only'>
          <Checkbox />
        </Table.HeadCell>
        <Table.HeadCell className='border-r dark:border-gray-700'>Project's name</Table.HeadCell>
        <Table.HeadCell className='border-r dark:border-gray-700'>Department</Table.HeadCell>
        <Table.HeadCell className='border-r dark:border-gray-700'>Status</Table.HeadCell>
        <Table.HeadCell className='border-r dark:border-gray-700'>Total Member/Collab</Table.HeadCell>
        <Table.HeadCell className='border-r dark:border-gray-700'>Leader's name</Table.HeadCell>
        <Table.HeadCell>Edit</Table.HeadCell>
      </Table.Head>
      <Table.Body className='divide-y'>
        <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
          <Table.Cell className='!p-4'>
            <Checkbox />
          </Table.Cell>
          <Table.Cell className='font-medium text-gray-900 dark:text-white border-r dark:border-gray-700'>Application Protocol</Table.Cell>
          <Table.Cell className='border-r dark:border-gray-700'>Dự án</Table.Cell>
          <Table.Cell className='border-r dark:border-gray-700'>Proposal</Table.Cell>
          <Table.Cell className='border-r dark:border-gray-700'>1/0</Table.Cell>
          <Table.Cell className='whitespace-nowrap border-r dark:border-gray-700'>Nguyễn Hồng Quân</Table.Cell>
          <Table.Cell className='border-r dark:border-gray-700'>
            <a href='/tables' className='font-medium text-blue-600 hover:underline dark:text-blue-700'>
              Edit
            </a>
          </Table.Cell>
        </Table.Row>
        <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
          <Table.Cell className='!p-4'>
            <Checkbox />
          </Table.Cell>
          <Table.Cell className='font-medium text-gray-900 dark:text-white border-r dark:border-gray-700'>
            Mạch điều khiển động cơ
          </Table.Cell>
          <Table.Cell className='border-r dark:border-gray-700'>Dự án</Table.Cell>
          <Table.Cell className='border-r dark:border-gray-700'>Closing</Table.Cell>
          <Table.Cell className='border-r dark:border-gray-700'>1/2</Table.Cell>
          <Table.Cell className='whitespace-nowrap border-r dark:border-gray-700'>Nguyễn Thanh Hiền</Table.Cell>
          <Table.Cell className='border-r dark:border-gray-700'>
            <a href='/tables' className='font-medium text-blue-600 hover:underline dark:text-blue-700'>
              Edit
            </a>
          </Table.Cell>
        </Table.Row>
        <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
          <Table.Cell className='!p-4'>
            <Checkbox />
          </Table.Cell>
          <Table.Cell className='font-medium text-gray-900 dark:text-white border-r dark:border-gray-700'>Signal Modulation</Table.Cell>
          <Table.Cell className='border-r dark:border-gray-700'>Dự án</Table.Cell>
          <Table.Cell className='border-r dark:border-gray-700'>In progress</Table.Cell>
          <Table.Cell className='border-r dark:border-gray-700'>1/0</Table.Cell>
          <Table.Cell className='whitespace-nowrap border-r dark:border-gray-700'>Nguyễn Văn Lợi</Table.Cell>
          <Table.Cell className='border-r dark:border-gray-700'>
            <a href='/tables' className='font-medium text-blue-600 hover:underline dark:text-blue-700'>
              Edit
            </a>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
