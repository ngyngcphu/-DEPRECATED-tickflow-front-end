import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams, useLocation } from 'react-router-dom';
import { Badge, Breadcrumb, Card, Spinner, Timeline } from 'flowbite-react';
import { BriefcaseIcon, CalendarIcon, PencilIcon } from '@heroicons/react/24/solid';
import { SendNotification } from '@components';
import { AddMember, DeleteProject } from '@components';
import { RootState, useAppDispatch, getProjectById } from '@states';
import { selectColorDepartment, selectColorRole, selectColorStatus } from '@utils';
import projectImage from '../assets/projectImage.svg';

export function DetailProjectPage() {
  const { id } = useParams<string>();
  const { state } = useLocation();
  let type: string = '';
  if (state) {
    type = state.type;
  }

  const [loading, setLoading] = useState<boolean>(false);

  const { projectId } = useSelector((state: RootState) => state.projectDetail);
  const dispatch = useAppDispatch();

  const handleGetProjectById = async () => {
    setLoading(true);
    if (id && id.length > 0) {
      await dispatch(getProjectById(id)).unwrap();
    }
    setLoading(false);
  };

  useEffect(() => {
    handleGetProjectById();
  }, []);

  return (
    <>
      {loading ? (
        <div className='flex justify-center'>
          <Spinner color='success' size='xl' />
        </div>
      ) : (
        <>
          <Breadcrumb
            aria-label='Solid background breadcrumb example'
            className='bg-gray-50 py-3 px-5 dark:bg-gray-700'
          >
            <Breadcrumb.Item icon={() => <BriefcaseIcon />}>
              <Link
                to={type ? `/projects?view=${type}` : '/projects'}
                className='text-sm font-medium text-gray-700 dark:text-white'
              >
                Projects
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <span className='text-sm font-bold text-gray-700 dark:text-white'>
                {projectId.name}
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
                    <span className='text-3xl font-semibold text-teal-500'>{projectId.name}</span>
                    <PencilIcon className='h-6' />
                  </div>
                  <div className='grid gap-4 text-sm font-semibold text-gray-600 dark:text-white'>
                    <div className='flex items-center'>
                      <p className='min-w-0 flex-1 truncate'>Ban</p>
                      <Badge
                        className={selectColorDepartment(projectId.department)}
                        style={{ borderRadius: '20px' }}
                      >
                        {projectId.department}
                      </Badge>
                    </div>
                    <div className='flex items-center'>
                      <p className='min-w-0 flex-1 truncate'>Trạng thái</p>
                      <Badge
                        className={selectColorStatus(projectId.status)}
                        style={{ borderRadius: '20px' }}
                      >
                        {projectId.status}
                      </Badge>
                    </div>
                    <div className='flex items-center'>
                      <p className='min-w-0 flex-1 truncate'>Ngày bắt đầu</p>
                      <p className='text-sm font-medium text-gray-500 dark:text-white'>
                        {projectId.startDate}
                      </p>
                    </div>
                    <div className='flex items-center'>
                      <p className='min-w-0 flex-1 truncate'>Ngày kết thúc</p>
                      <p className='text-sm font-medium text-gray-500 dark:text-white'>
                        {projectId.endDate}
                      </p>
                    </div>
                    <div className='flex items-center'>
                      <p className='min-w-0 flex-1 truncate'>Số thành viên</p>
                      <p className='text-sm font-medium text-gray-500 dark:text-white'>
                        {projectId.totalMember}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <DeleteProject name={projectId.name} />
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
                {projectId.projectRole.map((data, index) => (
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
                {projectId.projectLog.map((data, index) => (
                  <Timeline.Item key={index}>
                    <Timeline.Point icon={() => <CalendarIcon />} />
                    <Timeline.Content>
                      <Timeline.Time>
                        {Intl.DateTimeFormat('vi', { dateStyle: 'full' }).format(
                          new Date(data.date)
                        )}
                      </Timeline.Time>
                      <Timeline.Title>{data.log}</Timeline.Title>
                      <Timeline.Body>{data.note}</Timeline.Body>
                    </Timeline.Content>
                  </Timeline.Item>
                ))}
              </Timeline>
            </div>
          </div>
        </>
      )}
    </>
  );
}
