import { useEffect, useState } from "react";
import { Button, Checkbox, Table } from "flowbite-react";
import { TableCellsIcon, PlusIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/solid";
import { NewProject } from "./modals/NewProject";
import { Projects, ProjectsData, Proposal, InProgress } from "./mockdata/ProjectsData";

export function ProjectsTable() {
  console.log("Hello");
  const tabs: Array<string> = ["All Projects", "Proposal", "In progress"];
  const [type, setType] = useState<string>(tabs[0]);

  const titles: Array<string> = ["Project's name", "Department", "Status", "Total Member/Collab", "Leader's name"];
  const [datas, setDatas] = useState<Projects[]>(ProjectsData);

  useEffect(() => {
    if (type === "All Projects") {
      setDatas(ProjectsData);
    } else if (type === "Proposal") {
      setDatas(Proposal);
    } else if (type === "In progress") {
      setDatas(InProgress);
    }
  }, [type]);

  return (
    <div>
      <div className='flex items-center mb-2'>
        <div className='flex flex-wrap gap-2'>
          {tabs.map((tab) => (
            <Button
              key={tab}
              className='dark:text-white'
              color='gray'
              style={type === tab ? { backgroundColor: "#19A69C" } : {}}
              onClick={() => setType(tab)}
            >
              <TableCellsIcon className='mr-3 w-4' />
              {tab}
            </Button>
          ))}
          <Button color='gray'>
            <PlusIcon className='mr-3 w-4' />
            Add View
          </Button>
        </div>
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
          {datas.map((data, key) => (
            <Table.Row key={key} className='bg-white dark:border-gray-700 dark:bg-gray-800'>
              <Table.Cell className='!p-4'>
                <Checkbox />
              </Table.Cell>
              <Table.Cell className='font-medium text-gray-900 dark:text-white border-r dark:border-gray-700'>
                {data.projectName}
              </Table.Cell>
              <Table.Cell className='border-r dark:border-gray-700'>{data.department}</Table.Cell>
              <Table.Cell className='border-r dark:border-gray-700'>{data.status}</Table.Cell>
              <Table.Cell className='border-r dark:border-gray-700'>{data.totalMemberCollab}</Table.Cell>
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
