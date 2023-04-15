import { ChangeEvent, useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { Breadcrumb, Button, Checkbox, Dropdown, Label, Table, TextInput } from "flowbite-react";
import { BriefcaseIcon, PencilIcon, TrashIcon, UserIcon } from "@heroicons/react/24/solid";
import projectImage from "../../../assets/projectImage.svg";
import { SendNotification } from "../allprojects/SendNotification";
import { ProjectProps } from "./mockdata/ProjectInterface";
import { getProject } from "../../../services/project";
import { AddMember } from "./AddMember";

export function Project() {
  const { projectId } = useParams<string>();
  const { state } = useLocation();
  const { type } = state;
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

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setProjectData({
      ...projectData,
      [id]: value
    });
  };

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
          <Link to={type ? `/projects?view=${type}` : "/projects"} className='dark:text-white font-archivo'>
            Projects
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item className='dark:text-white font-archivo'>{projectData.name}</Breadcrumb.Item>
      </Breadcrumb>
      <div className='grid grid-cols-4'>
        <div>
          <div className='overflow-y-scroll h-[450px]'>
            <div className='grid justify-items-center'>
              <img src={projectImage} alt='projectImage' />
            </div>
            <div>
              <div className='flex items-center justify-center gap-2'>
                <span className='font-archivo text-[35px] text-[#19A69C]'>{projectData.name}</span>
                <PencilIcon className='h-6' />
              </div>
              <div>
                <Label htmlFor='startDate'>
                  Start date:<span className='text-[#F12323]'>*</span>
                </Label>
                <TextInput id='startDate' name='startDate' type='date' value={projectData.startDate} onChange={handleChange} />
              </div>
              <div>
                <Label htmlFor='endDate'>
                  End date:<span className='text-[#F12323]'>*</span>
                </Label>
                <TextInput id='endDate' name='endDate' type='date' value={projectData.endDate} onChange={handleChange} />
              </div>
              <div>
                <Label htmlFor='department'>
                  Department:<span className='text-[#F12323]'>*</span>
                </Label>
                <TextInput id='department' name='department' value={projectData.department} onChange={handleChange} />
              </div>
              <div>
                <Label htmlFor='status'>
                  Status:<span className='text-[#F12323]'>*</span>
                </Label>
                <TextInput id='status' name='status' value={projectData.status} onChange={handleChange} />
              </div>
              <div>
                <Label htmlFor='member'>
                  Total Member/Collab:<span className='text-[#F12323]'>*</span>
                </Label>
                <TextInput id='member' name='member' value={projectData.totalMember} onChange={handleChange} />
              </div>
            </div>
          </div>
          <Button className='mt-5 mx-auto' color='failure'>
            Delete Project
          </Button>
        </div>
        <div className='col-span-3 overflow-y-scroll h-[500px] mx-5'>
          <div className='flex w-full items-center sm:justify-end mb-2'>
            <SendNotification />
          </div>
          <div className='flex justify-between items-center mb-2'>
            <p className='font-archivo text-[30px] text-[#444444]'>Project Role</p>
            <p className='underline decoration-sky-500 text-slate-400 dark:text-sky-400 font-semibold'>
              Current member: {projectData.totalMember}
            </p>
          </div>
          <div className='grid grid-cols-3 gap-5 mb-5 items-center justify-center self-center justify-items-center'>
            <div>
              <AddMember />
            </div>

            {projectData.projectRole.map((data, index) => (
              <div key={index} className='grid grid-cols-4 gap-12'>
                <div className='w-12'>
                  <UserIcon className='border-4 border-green-400 rounded-full cursor-pointer fill-[#999999] hover:fill-gray-700' />
                </div>
                <div className='grid col-span-3 items-center'>
                  <div className='font-archivo text-[#666666]'>{data.name}</div>
                  <div className='flex justify-between items-center'>
                    <div className='text-[#53B1EE] font-medium'>
                      <Dropdown label={data.role} inline={true}>
                        <Dropdown.Item>Member</Dropdown.Item>
                        <Dropdown.Item>Leader</Dropdown.Item>
                        <Dropdown.Item>Council</Dropdown.Item>
                      </Dropdown>
                    </div>
                    <div className='flex items-center bg-[#F12323] opacity-50 rounded-md'>
                      <div>
                        <TrashIcon fill='white' className='h-4' />
                      </div>
                      <div className='text-white'>Delete</div>
                    </div>
                  </div>
                  <div className='flex'>
                    <div className='bg-green-100 rounded-md'>{data.department}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='flex'>
            <p className='font-archivo text-[30px] text-[#444444] mb-2'>Project Log</p>
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
