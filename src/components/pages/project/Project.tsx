import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Breadcrumb, Button, Checkbox, Dropdown, Label, Table, TextInput } from "flowbite-react";
import { BriefcaseIcon, TvIcon, TrashIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { SendNotification } from "../allprojects/SendNotification";
import { NewProject } from "../allprojects/modals/NewProject";
import { ProjectProps } from "./mockdata/ProjectInterface";
import { getProject } from "../../../services/getProject";

export function Project() {
  const { projectId } = useParams<string>();
  const titles: Array<string> = ["Project Log", "Date", "Note"];
  const [projectData, setProjectData] = useState<ProjectProps>({
    name: "",
    startDate: "",
    endDate: "",
    department: "",
    status: "",
    totalMember: 0,
    projectRole: [],
    projectLog: []
  });

  useEffect(() => {
    if (projectId && projectId.length > 0) {
      getProject(projectId).then(({ data }) => {
        const { name, startDate, endDate, department, status, totalMember, projectRole, projectLog } = data;
        setProjectData({
          name: name,
          startDate: startDate,
          endDate: endDate,
          department: department,
          status: status,
          totalMember: totalMember,
          projectRole: projectRole,
          projectLog: projectLog
        });
      });
    }
  }, []);

  return (
    <div>
      <Breadcrumb aria-label='Solid background breadcrumb example' className='bg-gray-50 py-3 px-5 dark:bg-gray-700'>
        <Breadcrumb.Item icon={BriefcaseIcon}>
          <Link to='/projects' className='dark:text-white'>
            Projects
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item className='dark:text-white'>{projectData.name}</Breadcrumb.Item>
      </Breadcrumb>
      <div className='grid grid-cols-4'>
        <div className='overflow-y-scroll h-[500px]'>
          <TvIcon />
          <div>
            <div className='text-center'>{projectData.name}</div>
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
          <div className='grid grid-cols-3 gap-5 mb-5 items-center justify-center'>
            <div className='grid grid-cols-4 gap-10'>
              <UserCircleIcon className='h-full' />
              <div className='col-span-3'>
                <div>Nguyễn Ngọc Phú</div>
                <div className='flex justify-between'>
                  <Dropdown label='Member' inline={true}>
                    <Dropdown.Item>Member</Dropdown.Item>
                    <Dropdown.Item>Leader</Dropdown.Item>
                    <Dropdown.Item>Council</Dropdown.Item>
                  </Dropdown>
                  <div className='mr-2'>
                    <TrashIcon className='h-full' />
                  </div>
                  <div>Delete</div>
                </div>
                <div>Dự án</div>
              </div>
            </div>
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
              {projectData.projectLog.map((data, key) => (
                <Table.Row key={key} className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                  <Table.Cell className='!p-4'>
                    <Checkbox />
                  </Table.Cell>
                  <Table.Cell className='font-medium text-blue-600 hover:underline cursor-pointer dark:text-blue-700'>
                    {data.log}
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
