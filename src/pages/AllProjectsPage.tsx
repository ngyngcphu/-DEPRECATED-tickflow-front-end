import { useState, useEffect, useMemo } from 'react';
//import { useSelector } from 'react-redux';
import { useNavigate, NavigateFunction, useSearchParams } from 'react-router-dom';
import { Badge, Breadcrumb, Button, Checkbox, Spinner, Table } from 'flowbite-react';
import { TableCellsIcon, PlusIcon } from '@heroicons/react/24/outline';
import { BriefcaseIcon, TrashIcon } from '@heroicons/react/24/solid';
import { AddProject, SendNotification } from '@components';
//import { RootState, useAppDispatch } from '@states';
//import { projectService } from "@services";

export function AllProjectsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate: NavigateFunction = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const tabs: Array<string> = [
    'All Projects',
    'Proposal',
    'On-going',
    'Closing',
    'Completed',
    'Canceled',
    'Halt'
  ];
  const [type, setType] = useState<string | null>(searchParams.get('view'));

  const [projectField, setProjectField] = useState<Array<string>>([]);
  const [allProjectsData, setAllProjectsData] = useState<ProjectSummary[]>([]);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      // const projectField = await projectService.getField;
      // const projectData = await projectService.getAll;
      setProjectField([]);
      setAllProjectsData([]);
      setLoading(false);
    };

    getData();
  }, []);

  const filterProjects = useMemo(() => {
    let result: ProjectSummary[];
    if (type === null || type === tabs[0]) {
      result = allProjectsData;
    } else {
      result = allProjectsData.filter((project) => project.status === type);
    }

    return result;
  }, [type, allProjectsData]);

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
    <>
      <Breadcrumb
        aria-label='Solid background breadcrumb example'
        className='bg-gray-50 py-3 px-5 dark:bg-gray-700'
      >
        <Breadcrumb.Item icon={() => <BriefcaseIcon />} className='dark:text-white'>
          <span className='text-sm font-medium text-gray-700 dark:text-white'>Projects</span>
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className='mb-2 flex items-center'>
        <div className='grid grid-cols-5 items-center'>
          <div className='col-span-3 flex gap-2 overflow-x-scroll'>
            {tabs.map((tab, index) => (
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
            <Button color='gray'>
              <PlusIcon className='mr-3 w-4' />
              <p className='truncate'>Add View</p>
            </Button>
          </div>
          <div className='col-span-2 ml-auto flex items-center gap-2'>
            <TrashIcon className='ml-auto w-6 text-gray-400' />
            <SendNotification />
            <AddProject />
          </div>
        </div>
      </div>
      {loading ? (
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
            {filterProjects.map((data, index) => (
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
                <Table.Cell className='border-r dark:border-gray-700'>{data.leaderName}</Table.Cell>
                <Table.Cell className='border-r text-right dark:border-gray-700'>
                  {data.totalMember}
                </Table.Cell>
                <Table.Cell className='border-r dark:border-gray-700'>{data.startDate}</Table.Cell>
                <Table.Cell className='whitespace-nowrap border-r dark:border-gray-700'>
                  {data.endDate}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      )}
    </>
  );
}
