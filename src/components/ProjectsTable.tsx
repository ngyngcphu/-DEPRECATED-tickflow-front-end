import { useState, useEffect } from "react";
import { useNavigate, NavigateFunction, useSearchParams } from "react-router-dom";
import { Button, Checkbox, Table } from "flowbite-react";
import { TableCellsIcon, PlusIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/solid";
import { NewProjectModal } from "../modals/NewProjectModal";
import { AllProjectsInterface } from "../interfaces/AllProjectInterface";
import { getAllProjects } from "../services/project";

export function ProjectsTable() {
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate: NavigateFunction = useNavigate();

  const tabs: Array<string> = ["All Projects", "Proposal", "In progress", "Closing", "Completed", "Canceled"];
  const [type, setType] = useState<string | null>(searchParams.get("view"));

  const titles: Array<string> = ["Project's name", "Department", "Status", "Total Member/Collab", "Leader's name"];

  const [allProjectsData, setAllProjectsData] = useState<AllProjectsInterface[]>([]);

  useEffect(() => {
    getAllProjects().then(({ data }) => {
      setAllProjectsData(data);
    });
  }, []);

  const filterProjects = (allProjectsData: AllProjectsInterface) => {
    if (type === null || type === tabs[0]) {
      return true;
    } else {
      return allProjectsData.status === type;
    }
  };

  return (
    <div>
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
            <NewProjectModal />
          </div>
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
          {allProjectsData.filter(filterProjects).map((data, index) => (
            <Table.Row key={index} className='bg-white dark:border-gray-700 dark:bg-gray-800'>
              <Table.Cell className='!p-4'>
                <Checkbox />
              </Table.Cell>
              <Table.Cell
                className='font-medium text-blue-600 hover:underline cursor-pointer dark:text-blue-700 border-r dark:border-gray-700'
                onClick={() => navigate(`${data.id}`, { state: { type } })}
              >
                {data.name}
              </Table.Cell>
              <Table.Cell className='border-r dark:border-gray-700 text-center'>{data.department}</Table.Cell>
              <Table.Cell className='border-r dark:border-gray-700 text-center'>{data.status}</Table.Cell>
              <Table.Cell className='border-r dark:border-gray-700 text-center'>{data.totalMemberCollab}</Table.Cell>
              <Table.Cell className='whitespace-nowrap border-r dark:border-gray-700'>{data.leaderName}</Table.Cell>
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
  );
}
