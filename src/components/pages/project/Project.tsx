import { Link, useLocation } from "react-router-dom";
import { Breadcrumb, Button, Checkbox, Label, Table, TextInput } from "flowbite-react";
import { BriefcaseIcon, TvIcon, TrashIcon } from "@heroicons/react/24/solid";
import { SendNotification } from "../allprojects/SendNotification";
import { NewProject } from "../allprojects/modals/NewProject";
import { ProjectLogData } from "./mockdata/ProjectLogData";

export function Project() {
  const { state } = useLocation();
  const { name } = state;
  const titles: Array<string> = ["Project Log", "Date", "Note"];

  return (
    <div>
      <Breadcrumb aria-label='Solid background breadcrumb example' className='bg-gray-50 py-3 px-5 dark:bg-gray-700'>
        <Breadcrumb.Item icon={BriefcaseIcon}>
          <Link to='/projects' className='dark:text-white'>
            Projects
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item className='dark:text-white'>{name}</Breadcrumb.Item>
      </Breadcrumb>
      <div className='grid grid-cols-4'>
        <div className='overflow-y-scroll h-[500px]'>
          <TvIcon />
          <div>
            <div className='text-center'>TickFlow</div>
            <div>
              <Label htmlFor='startDate'>
                Start date:<span className='text-[#F12323]'>*</span>
              </Label>
              <TextInput id='startDate' name='startDate' type='date' />
            </div>
            <div>
              <Label htmlFor='endDate'>
                End date:<span className='text-[#F12323]'>*</span>
              </Label>
              <TextInput id='endDate' name='endDate' type='date' />
            </div>
            <div>
              <Label htmlFor='department'>
                Department:<span className='text-[#F12323]'>*</span>
              </Label>
              <TextInput id='department' name='department' />
            </div>
            <div>
              <Label htmlFor='status'>
                Status:<span className='text-[#F12323]'>*</span>
              </Label>
              <TextInput id='status' name='status' />
            </div>
            <div>
              <Label htmlFor='member'>
                Total Member/Collab:<span className='text-[#F12323]'>*</span>
              </Label>
              <TextInput id='member' name='member' />
            </div>
          </div>
        </div>
        <div className='col-span-3 overflow-y-scroll h-[500px]'>
          <div className='flex w-full items-center sm:justify-end mb-2'>
            <SendNotification />
          </div>
          <div className='flex justify-between mb-2'>
            <p>Project Role</p>
            <p>Current member</p>
          </div>
          <div className='grid grid-cols-3 gap-5 mb-5'>
            <Button>A</Button>
            <Button>A</Button>
            <Button>A</Button>
            <Button>A</Button>
            <Button>A</Button>
            <Button>A</Button>
            <Button>A</Button>
            <Button>A</Button>
            <Button>A</Button>
          </div>
          <div className='flex'>
            <p>Project Log</p>
            <div className='flex items-center ml-auto space-x-2'>
              <TrashIcon className='ml-auto w-6' />
              <NewProject />
            </div>
          </div>
          <Table hoverable={true}>
            <Table.Head className='font-archivo !text-[rgba(5,165,157,1)] bg-gradient-to-b from-[rgba(5,165,157,0.2)] to-[rgba(255,255,255,0.02)]'>
              <Table.HeadCell className='!p-4 border-r dark:border-gray-700 sr-only'>
                <Checkbox />
              </Table.HeadCell>
              {titles.map((title) => (
                <Table.HeadCell key={title} className='border-r dark:border-gray-700'>
                  {title}
                </Table.HeadCell>
              ))}
              <Table.HeadCell>Edit</Table.HeadCell>
            </Table.Head>
            <Table.Body className='divide-y'>
              {ProjectLogData.map((data, key) => (
                <Table.Row key={key} className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                  <Table.Cell className='!p-4'>
                    <Checkbox />
                  </Table.Cell>
                  <Table.Cell className='font-medium text-blue-600 hover:underline cursor-pointer dark:text-blue-700'>
                    {data.projectLog}
                  </Table.Cell>
                  <Table.Cell className='border-r dark:border-gray-700'>{data.date}</Table.Cell>
                  <Table.Cell className='border-r dark:border-gray-700'>{data.note}</Table.Cell>
                  <Table.Cell className='border-r dark:border-gray-700'>
                    <a href='/tables' className='font-medium text-blue-600 hover:underline dark:text-blue-700'>
                      Edit
                    </a>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
}
