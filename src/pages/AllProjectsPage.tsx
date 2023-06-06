import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, NavigateFunction, useSearchParams } from 'react-router-dom';
import { Badge, Breadcrumb, Button, Checkbox, Spinner, Table } from 'flowbite-react';
import { TableCellsIcon } from '@heroicons/react/24/outline';
import { BriefcaseIcon, TrashIcon } from '@heroicons/react/24/solid';
import { AddProject, SendNotification } from '@components';
import {
  RootState,
  useAppDispatch,
  getProjectTag,
  getProjectField,
  getAllProjects,
  getProjectByTag
} from '@states';
import { selectColorDepartment, selectColorStatus } from '@utils';

export function AllProjectsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate: NavigateFunction = useNavigate();
  const [loadingTag, setLoadingTag] = useState<boolean>(false);
  const [loadingProject, setLoadingProject] = useState<boolean>(false);

  const [type, setType] = useState<string | null>(searchParams.get('view'));

  const { projectTag } = useSelector((state: RootState) => state.projectTag);
  const { projectField } = useSelector((state: RootState) => state.projectField);
  const { projectSummary } = useSelector((state: RootState) => state.projectSummary);

  const dispatch = useAppDispatch();

  const handleGetTagField = async () => {
    setLoadingTag(true);
    await dispatch(getProjectTag()).unwrap();
    await dispatch(getProjectField()).unwrap();
    setLoadingTag(false);
  };

  const handleGetProjects = async () => {
    setLoadingProject(true);
    if (type === null || type === 'All Projects') {
      await dispatch(getAllProjects()).unwrap();
    } else {
      await dispatch(getProjectByTag(type)).unwrap();
    }
    setLoadingProject(false);
  };

  useEffect(() => {
    handleGetTagField();
  }, []);

  useEffect(() => {
    handleGetProjects();
  }, [type]);

  return (
    <>
      <Breadcrumb
        aria-label='Solid background breadcrumb example'
        className='bg-gray-50 py-3 px-5 dark:bg-gray-700'
      >
        <Breadcrumb.Item icon={() => <BriefcaseIcon />} className='dark:text-white'>
          <span className='text-sm font-medium text-gray-700 dark:text-white'>Projects</span>
        </Breadcrumb.Item>
      </Breadcrumb>
      {loadingTag ? (
        <div className='flex justify-center'>
          <Spinner color='success' size='xl' />
        </div>
      ) : (
        <>
          <div className='mb-2 flex items-center'>
            <div className='grid grid-cols-5 items-center'>
              <div className='col-span-3 flex gap-2 overflow-x-scroll'>
                {projectTag.map((tab, index) => (
                  <Button
                    key={index}
                    className='dark:text-white'
                    color='gray'
                    style={
                      type === tab || (type === null && index === 0)
                        ? { backgroundColor: '#19A69C' }
                        : {}
                    }
                    onClick={() => {
                      setType(tab);
                      setSearchParams({ view: `${tab}` });
                    }}
                  >
                    <TableCellsIcon className='mr-3 w-4' />
                    <p className='truncate'>{tab}</p>
                  </Button>
                ))}
              </div>
              <div className='col-span-2 ml-auto flex items-center gap-2'>
                <TrashIcon className='ml-auto w-6 text-gray-400' />
                <SendNotification />
                <AddProject />
              </div>
            </div>
          </div>
          {loadingProject ? (
            <div className='flex justify-center'>
              <Spinner color='success' size='xl' />
            </div>
          ) : (
            <Table hoverable={true}>
              <Table.Head className='bg-gray-50 '>
                {projectField.map((field, index) => (
                  <Table.HeadCell
                    key={index}
                    className='border-r border-b border-solid border-gray-200 text-sm font-semibold text-gray-600 dark:border-gray-600 dark:text-gray-50'
                  >
                    {field}
                  </Table.HeadCell>
                ))}
              </Table.Head>
              <Table.Body className='divide-y text-sm font-semibold'>
                {projectSummary.map((data, index) => (
                  <Table.Row key={index} className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                    <Table.Cell className='cursor-pointer space-x-2 border-r font-medium text-blue-600 hover:underline dark:border-gray-700 dark:text-blue-700'>
                      <Checkbox />
                      <span onClick={() => navigate(`${data.id}`, { state: { type } })}>
                        {data.name}
                      </span>
                    </Table.Cell>
                    <Table.Cell className='flex whitespace-nowrap border-r p-4 dark:border-gray-700'>
                      <Badge
                        className={selectColorDepartment(data.department)}
                        style={{ borderRadius: '20px' }}
                      >
                        {data.department}
                      </Badge>
                    </Table.Cell>
                    <Table.Cell className='border-r dark:border-gray-700'>
                      <Badge
                        className={selectColorStatus(data.status)}
                        style={{ borderRadius: '20px' }}
                      >
                        {data.status}
                      </Badge>
                    </Table.Cell>
                    <Table.Cell className='border-r dark:border-gray-700'>
                      {data.leaderName}
                    </Table.Cell>
                    <Table.Cell className='border-r text-right dark:border-gray-700'>
                      {data.totalMember}
                    </Table.Cell>
                    <Table.Cell className='border-r dark:border-gray-700'>
                      {data.startDate}
                    </Table.Cell>
                    <Table.Cell className='whitespace-nowrap border-r dark:border-gray-700'>
                      {data.endDate}
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          )}
        </>
      )}
    </>
  );
}
