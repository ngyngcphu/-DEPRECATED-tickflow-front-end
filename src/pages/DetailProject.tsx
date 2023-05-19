import { ChangeEvent, useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { Breadcrumb, Card, Checkbox, Dropdown, Label, Table, TextInput } from "flowbite-react";
import { BriefcaseIcon, PencilIcon } from "@heroicons/react/24/solid";
import { SendNotification } from "@components";
import { getProject } from "@services";
import { AddMember, DeleteProject } from "@components";
import projectImage from "../assets/projectImage.svg";

export function DetailProject() {
  const { projectId } = useParams<string>();
  const { state } = useLocation();
  const { type } = state;
  const titles: Array<string> = ["Project Log", "Date", "Note"];

  const [projectData, setProjectData] = useState<Project>({
    id: 0,
    name: "",
    startDate: "",
    endDate: "",
    department: "",
    status: "",
    totalMemberCollab: "",
    leaderName: "",
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
        const { id, name, startDate, endDate, department, status, totalMember, leaderName, projectRole, projectLog } = data;
        setProjectData({
          id: id,
          name: name,
          startDate: startDate,
          endDate: endDate,
          department: department,
          status: status,
          totalMemberCollab: totalMember,
          leaderName: leaderName,
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
          <Link to={type ? `/projects?view=${type}` : "/projects"} className='dark:text-white'>
            Projects
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item className='dark:text-white'>{projectData.name}</Breadcrumb.Item>
      </Breadcrumb>
      <div className='grid grid-cols-4'>
        <div>
          <div className='overflow-y-scroll h-[450px]'>
            <div className='grid justify-items-center'>
              <img src={projectImage} alt='projectImage' />
            </div>
            <div>
              <div className='flex items-center justify-center gap-2'>
                <span className='text-[35px] text-[#19A69C]'>{projectData.name}</span>
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
                <TextInput id='member' name='member' value={projectData.totalMemberCollab} onChange={handleChange} />
              </div>
            </div>
          </div>
          <DeleteProject name={projectData.name} />
        </div>
        <div className='col-span-3 overflow-y-scroll h-[500px] mx-5'>
          <div className='flex justify-between items-center mb-2'>
            <p className='text-3xl font-bold text-gray-600'>Vai trò</p>
            <div className='flex gap-2 items-center justify-items-center'>
              <SendNotification />
              <AddMember />
            </div>
          </div>
          <div className='grid grid-cols-3 gap-5 mb-5 items-center justify-items-center'>
            {projectData.projectRole.map((data, index) => (
              <div key={index} className='max-w-sm'>
                <Card>
                  <div className='flex justify-end px-4 pt-4'>
                    <Dropdown inline={true} label=''>
                      <Dropdown.Item>
                        <a
                          href='#'
                          className='block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
                        >
                          Edit
                        </a>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <a
                          href='#'
                          className='block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
                        >
                          Export Data
                        </a>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <a
                          href='#'
                          className='block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
                        >
                          Delete
                        </a>
                      </Dropdown.Item>
                    </Dropdown>
                  </div>
                  <div className='flex flex-col items-center pb-10'>
                    <img
                      className='mb-3 h-24 w-24 rounded-full shadow-lg'
                      src='https://flowbite.com/docs/images/people/profile-picture-3.jpg'
                      alt='Bonnie image'
                    />
                    <h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>Bonnie Green</h5>
                    <span className='text-sm text-gray-500 dark:text-gray-400'>Visual Designer</span>
                    <div className='mt-4 flex space-x-3 lg:mt-6'>
                      <a
                        href='#'
                        className='inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                      >
                        Add friend
                      </a>
                      <a
                        href='#'
                        className='inline-flex items-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700'
                      >
                        Message
                      </a>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
          <div className='flex'>
            <p className='text-[30px] text-[#444444] mb-2'>Project Log</p>
          </div>
          <Table hoverable={true}>
            <Table.Head className='!text-[rgba(5,165,157,1)] bg-gradient-to-b from-[rgba(5,165,157,0.2)] to-[rgba(255,255,255,0.02)]'>
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
