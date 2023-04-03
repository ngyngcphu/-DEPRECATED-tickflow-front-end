import { Table, Checkbox } from "flowbite-react";

export function ProjectsTable() {
  return (
    <Table hoverable={true}>
      <Table.Head className='bg-gradient-to-b from-[rgba(5,165,157,0.2)] to-[rgba(255,255,255,0.02)] text-[rgba(5,165,157,1)]'>
        <Table.HeadCell className='!p-4 sr-only'>
          <Checkbox />
        </Table.HeadCell>
        <Table.HeadCell>Project's name</Table.HeadCell>
        <Table.HeadCell>Department</Table.HeadCell>
        <Table.HeadCell>Category</Table.HeadCell>
        <Table.HeadCell>Status</Table.HeadCell>
        <Table.HeadCell>
          <span className='sr-only'>Edit</span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className='divide-y'>
        <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
          <Table.Cell className='!p-4'>
            <Checkbox />
          </Table.Cell>
          <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>Apple MacBook Pro 17"</Table.Cell>
          <Table.Cell>Sliver</Table.Cell>
          <Table.Cell>Laptop</Table.Cell>
          <Table.Cell>$2999</Table.Cell>
          <Table.Cell>
            <a href='/tables' className='font-medium text-blue-600 hover:underline dark:text-blue-500'>
              Edit
            </a>
          </Table.Cell>
        </Table.Row>
        <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
          <Table.Cell className='!p-4'>
            <Checkbox />
          </Table.Cell>
          <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>Microsoft Surface Pro</Table.Cell>
          <Table.Cell>White</Table.Cell>
          <Table.Cell>Laptop PC</Table.Cell>
          <Table.Cell>$1999</Table.Cell>
          <Table.Cell>
            <a href='/tables' className='font-medium text-blue-600 hover:underline dark:text-blue-500'>
              Edit
            </a>
          </Table.Cell>
        </Table.Row>
        <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
          <Table.Cell className='!p-4'>
            <Checkbox />
          </Table.Cell>
          <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>Magic Mouse 2</Table.Cell>
          <Table.Cell>Black</Table.Cell>
          <Table.Cell>Accessories</Table.Cell>
          <Table.Cell>$99</Table.Cell>
          <Table.Cell>
            <a href='/tables' className='font-medium text-blue-600 hover:underline dark:text-blue-500'>
              Edit
            </a>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
