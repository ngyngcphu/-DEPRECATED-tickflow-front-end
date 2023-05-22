import { /*ChangeEvent,*/ useEffect, useState } from 'react';
import { Link, /*useParams,*/ useLocation } from 'react-router-dom';
import { Badge, Breadcrumb, Card, Timeline } from 'flowbite-react';
import { BriefcaseIcon, CalendarIcon, PencilIcon } from '@heroicons/react/24/solid';
import { SendNotification } from '@components';
//import { getProject } from "@services";
import { AddMember, DeleteProject } from '@components';
import projectImage from '../assets/projectImage.svg';

export function DetailProject() {
  //const { projectId } = useParams<string>();
  const { state } = useLocation();
  const { type } = state;

  const [projectData, setProjectData] = useState<Project>({
    id: 0,
    name: '',
    startDate: '',
    endDate: '',
    department: '',
    status: '',
    totalMember: 0,
    leaderName: '',
    projectRole: [],
    projectLog: []
  });

  // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   const { id, value } = event.target;
  //   setProjectData({
  //     ...projectData,
  //     [id]: value
  //   });
  // };

  useEffect(() => {
    setProjectData({
      id: 0,
      name: '',
      startDate: '',
      endDate: '',
      department: '',
      status: '',
      totalMember: 0,
      leaderName: '',
      projectRole: [],
      projectLog: []
    });
    // if (projectId && projectId.length > 0) {
    //   getProject(projectId).then(({ data }) => {
    //     const { id, name, startDate, endDate, department, status, totalMember, leaderName, projectRole, projectLog } = data;
    //     setProjectData({
    //       id: id,
    //       name: name,
    //       startDate: startDate,
    //       endDate: endDate,
    //       department: department,
    //       status: status,
    //       totalMember: totalMember,
    //       leaderName: leaderName,
    //       projectRole: projectRole,
    //       projectLog: projectLog
    //     });
    //   });
    // }
  }, []);

  // stupid code =))
  const selectColorRole = (role: string) => {
    if (role === 'Leader') {
      return 'text-teal-600';
    } else if (role === 'Member') {
      return 'text-blue-700';
    } else if (role === 'Mentor') {
      return 'text-gray-600';
    } else if (role === 'Council') {
      return 'text-purple-600';
    }
  };

  // stupid code =))
  const selectColorDepartment = (department: string) => {
    if (department === 'Dự án') {
      return 'bg-blue-300 bg-opacity-20 text-blue-500';
    } else if (department === 'Nghiên cứu') {
      return 'bg-purple-300 bg-opacity-20 text-purple-500';
    } else {
      return 'bg-teal-300 bg-opacity-20 text-teal-500';
    }
  };

  // stupid code =))
  const selectColorStatus = (status: string) => {
    if (status === 'Proposal') {
      return 'bg-yellow-300 bg-opacity-20 text-yellow-500';
    } else if (status === 'On-going') {
      return 'bg-teal-300 bg-opacity-20 text-teal-500';
    } else if (status === 'Closing') {
      return 'bg-blue-300 bg-opacity-20 text-blue-500';
    } else if (status === 'Completed') {
      return 'bg-purple-300 bg-opacity-20 text-purple-500';
    } else if (status === 'Canceled') {
      return 'bg-gray-300 bg-opacity-20 text-gray-500';
    } else if (status === 'Halt') {
      return 'bg-red-300 bg-opacity-20 text-red-500';
    }
  };

  return (
    <div>
      <Breadcrumb
        aria-label='Solid background breadcrumb example'
        className='bg-gray-50 py-3 px-5 dark:bg-gray-700'
      >
        <Breadcrumb.Item icon={BriefcaseIcon}>
          <Link
            to={type ? `/projects?view=${type}` : '/projects'}
            className='text-sm font-medium text-gray-700 dark:text-white'
          >
            Projects
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <span className='text-sm font-bold text-gray-700 dark:text-white'>
            {projectData.name}
          </span>
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className='grid grid-cols-5'>
        <div>
          <div className='h-[450px] overflow-y-scroll'>
            <div className='grid justify-items-center'>
              <img src={projectImage} alt='projectImage' />
            </div>
            <div className='grid gap-4'>
              <div className='flex items-center justify-center gap-2'>
                <span className='text-3xl font-semibold text-teal-500'>{projectData.name}</span>
                <PencilIcon className='h-6' />
              </div>
              <div className='grid gap-4 text-sm font-semibold text-gray-600 dark:text-white'>
                <div className='flex items-center'>
                  <p className='min-w-0 flex-1 truncate'>Ban</p>
                  <Badge
                    className={selectColorDepartment(projectData.department)}
                    style={{ borderRadius: '20px' }}
                  >
                    {projectData.department}
                  </Badge>
                </div>
                <div className='flex items-center'>
                  <p className='min-w-0 flex-1 truncate'>Trạng thái</p>
                  <Badge
                    className={selectColorStatus(projectData.status)}
                    style={{ borderRadius: '20px' }}
                  >
                    {projectData.status}
                  </Badge>
                </div>
                <div className='flex items-center'>
                  <p className='min-w-0 flex-1 truncate'>Ngày bắt đầu</p>
                  <p className='text-sm font-medium text-gray-500 dark:text-white'>
                    {projectData.startDate}
                  </p>
                </div>
                <div className='flex items-center'>
                  <p className='min-w-0 flex-1 truncate'>Ngày kết thúc</p>
                  <p className='text-sm font-medium text-gray-500 dark:text-white'>
                    {projectData.endDate}
                  </p>
                </div>
                <div className='flex items-center'>
                  <p className='min-w-0 flex-1 truncate'>Số thành viên</p>
                  <p className='text-sm font-medium text-gray-500 dark:text-white'>
                    {projectData.totalMember}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <DeleteProject name={projectData.name} />
        </div>
        <div className='col-span-4 mx-5 h-[500px] overflow-y-scroll'>
          <div className='mb-2 flex items-center justify-between'>
            <p className='text-3xl font-bold text-gray-600'>Vai trò</p>
            <div className='flex items-center justify-items-center gap-2'>
              <SendNotification />
              <AddMember />
            </div>
          </div>
          <div className='mb-5 grid grid-cols-3 items-center justify-items-center gap-5'>
            {projectData.projectRole.map((data, index) => (
              <Card key={index} className='min-h-full min-w-full'>
                <div className='grid grid-cols-7 items-center'>
                  <img
                    className='col-span-2 grid h-16 w-16 rounded-full shadow-lg'
                    src='https://flowbite.com/docs/images/people/profile-picture-3.jpg'
                    alt='Bonnie image'
                  />
                  <div className='col-span-5 grid gap-2'>
                    <h5
                      className={
                        selectColorRole(data.role) + ' ' + 'text-lg font-medium dark:text-white'
                      }
                    >
                      {data.name}
                    </h5>
                    <h5
                      className={
                        selectColorRole(data.role) + ' ' + 'text-sm font-medium dark:text-white'
                      }
                    >
                      {data.role}
                    </h5>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className='flex'>
            <p className='mb-2 text-3xl font-bold text-gray-600'>Project Log</p>
          </div>
          <Timeline className='mx-4'>
            {projectData.projectLog.map((data, index) => (
              <Timeline.Item key={index}>
                <Timeline.Point icon={CalendarIcon} />
                <Timeline.Content>
                  <Timeline.Time>
                    {Intl.DateTimeFormat('vi', { dateStyle: 'full' }).format(new Date(data.date))}
                  </Timeline.Time>
                  <Timeline.Title>{data.log}</Timeline.Title>
                  <Timeline.Body>{data.note}</Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
            ))}
          </Timeline>
        </div>
      </div>
    </div>
  );
}
