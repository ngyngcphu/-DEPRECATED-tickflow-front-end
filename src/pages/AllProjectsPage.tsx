import { useState, useEffect } from "react";
import { useNavigate, NavigateFunction, useSearchParams } from "react-router-dom";
import { Breadcrumb, Button, Checkbox, Spinner, Table } from "flowbite-react";
import { TableCellsIcon, PlusIcon } from "@heroicons/react/24/outline";
import { BriefcaseIcon, TrashIcon } from "@heroicons/react/24/solid";
import { NewProjectModal } from "../modals/NewProjectModal";
import { AllProjectsInterface } from "../interfaces/AllProjectInterface";
import { SendNotification } from "../components/SendNotification";
import { getAllProjects } from "../services/project";

export function AllProjectsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate: NavigateFunction = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const tabs: Array<string> = ["All Projects", "Proposal", "In progress", "Closing", "Completed", "Canceled"];
  const [type, setType] = useState<string | null>(searchParams.get("view"));

  const titles: Array<string> = ["Project's name", "Department", "Status", "Leader's name", "Total Member", "Start date", "End date"];

  const [allProjectsData, setAllProjectsData] = useState<AllProjectsInterface[]>([]);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const { data } = await getAllProjects();
      setAllProjectsData(data);
      setLoading(false);
    };

    getData();
  }, []);

  const filterProjects = (allProjectsData: AllProjectsInterface) => {
    if (type === null || type === tabs[0]) {
      return true;
    } else {
      return allProjectsData.status === type;
    }
  };

  return (
    <>
      <Breadcrumb aria-label='Solid background breadcrumb example' className='bg-gray-50 py-3 px-5 dark:bg-gray-700'>
        <Breadcrumb.Item icon={BriefcaseIcon} className='dark:text-white font-archivo'>
          Projects
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className='flex items-center mb-2'>
        <div className='grid grid-cols-4 items-center'>
          <div className='flex gap-2 col-span-3 overflow-x-scroll'>
            {tabs.map((tab, index) => (
              <Button
                key={index}
                className='dark:text-white'
                color='gray'
                style={type === tab || (type === null && index === 0) ? { backgroundColor: "#19A69C" } : {}}
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
          <div className='flex items-center ml-auto space-x-2'>
            <TrashIcon className='ml-auto w-6' />
            <SendNotification />
            <NewProjectModal />
          </div>
        </div>
      </div>
      {loading ? (
        <div className='flex justify-center'>
          <Spinner color='success' size='xl' />
        </div>
      ) : (
        <Table hoverable={true}>
          <Table.Head className='bg-gray-50'>
            {titles.map((title) => (
              <Table.HeadCell
                key={title}
                className='border-r border-b border-solid border-gray-200 dark:border-gray-700 font-inter font-semibold text-sm text-gray-600 dark:text-gray-50'
              >
                {title}
              </Table.HeadCell>
            ))}
          </Table.Head>
          <Table.Body className='divide-y'>
            {allProjectsData.filter(filterProjects).map((data, index) => (
              <Table.Row key={index} className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                <Table.Cell className='font-medium text-blue-600 hover:underline cursor-pointer dark:text-blue-700 border-r dark:border-gray-700 space-x-2'>
                  <Checkbox />
                  <span onClick={() => navigate(`${data.id}`, { state: { type } })}>{data.name}</span>
                </Table.Cell>
                <Table.Cell className='border-r dark:border-gray-700'>
                  <span className='bg-green-500 p-4 rounded-full'>{data.department}</span>
                </Table.Cell>
                <Table.Cell className='border-r dark:border-gray-700'>{data.status}</Table.Cell>
                <Table.Cell className='border-r dark:border-gray-700'>{data.leaderName}</Table.Cell>
                <Table.Cell className='border-r dark:border-gray-700 text-right'>{data.totalMember}</Table.Cell>
                <Table.Cell className='border-r dark:border-gray-700'>{data.startDate}</Table.Cell>
                <Table.Cell className='whitespace-nowrap border-r dark:border-gray-700'>{data.endDate}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      )}
    </>
  );
}
