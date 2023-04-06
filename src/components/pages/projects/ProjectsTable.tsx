import { Table, Checkbox } from "flowbite-react";
import { ProjectsData, Proposal, InProgress } from "../../../mockdata/ProjectsData";
import { useContext, useEffect, useState } from "react";
import { TabContext } from "./TableView";

export function ProjectsTable() {
  const type = useContext(TabContext);
  console.log(type);

  const [data, setData] = useState(ProjectsData);

  useEffect(() => {
    if (type === "All Projects") {
      setData(ProjectsData);
    } else if (type === "Proposal") {
      setData(Proposal);
    } else if (type === "Inprogress") {
      setData(InProgress);
    }
  }, [type]);

  const titles: Array<string> = ["Project's name", "Department", "Status", "Total Member/Collab", "Leader's name"];

  return (
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
        {data.map((data, key) => (
          <Table.Row key={key} className='bg-white dark:border-gray-700 dark:bg-gray-800'>
            <Table.Cell className='!p-4'>
              <Checkbox />
            </Table.Cell>
            <Table.Cell className='font-medium text-gray-900 dark:text-white border-r dark:border-gray-700'>{data.projectName}</Table.Cell>
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
  );
}
