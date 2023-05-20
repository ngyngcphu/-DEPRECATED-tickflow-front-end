import { useState, useEffect, useMemo } from "react";
import { useNavigate, NavigateFunction, useSearchParams } from "react-router-dom";
import { Badge, Breadcrumb, Button, Checkbox, Spinner, Table } from "flowbite-react";
import { TableCellsIcon, PlusIcon } from "@heroicons/react/24/outline";
import { BriefcaseIcon, TrashIcon } from "@heroicons/react/24/solid";
import { AddProject, SendNotification } from "@components";
import { getProjectField, getAllProjects } from "@services";

export function AllProjectsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate: NavigateFunction = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const tabs: Array<string> = ["All Projects", "Proposal", "On-going", "Closing", "Completed", "Canceled", "Halt"];
  const [type, setType] = useState<string | null>(searchParams.get("view"));

  const [projectField, setProjectField] = useState<Array<string>>([]);
  const [allProjectsData, setAllProjectsData] = useState<AllProjects[]>([]);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const projectField = await getProjectField();
      const projectData = await getAllProjects();
      const field = projectField.data;
      const data = projectData.data;
      setProjectField(field);
      setAllProjectsData(data);
      setLoading(false);
    };

    getData();
  }, []);

  const filterProjects = useMemo(() => {
    let result: AllProjects[];
    if (type === null || type === tabs[0]) {
      result = allProjectsData;
    } else {
      result = allProjectsData.filter((project) => project.status === type);
    }

    return result;
  }, [type, allProjectsData]);

  // stupid code =))
  const selectColorDepartment = (department: string) => {
    if (department === "Dự án") {
      return "bg-blue-50 text-blue-500";
    } else if (department === "Nghiên cứu") {
      return "bg-purple-50 text-purple-500";
    } else {
      return "bg-teal-50 text-teal-500";
    }
  };

  // stupid code =))
  const selectColorStatus = (status: string) => {
    if (status === "Proposal") {
      return "bg-yellow-50 text-yellow-500";
    } else if (status === "On-going") {
      return "bg-teal-50 text-teal-500";
    } else if (status === "Closing") {
      return "bg-blue-50 text-blue-500";
    } else if (status === "Completed") {
      return "bg-purple-50 text-purple-500";
    } else if (status === "Canceled") {
      return "bg-gray-50 text-gray-500";
    } else if (status === "Halt") {
      return "bg-red-50 text-red-500";
    }
  };

  return (
    <>
      <Breadcrumb aria-label='Solid background breadcrumb example' className='bg-gray-50 py-3 px-5 dark:bg-gray-700'>
        <Breadcrumb.Item icon={BriefcaseIcon} className='dark:text-white'>
          <span className='font-bold'>Projects</span>
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className='flex items-center mb-2'>
        <div className='grid grid-cols-5 items-center'>
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
          <div className='flex col-span-2 gap-2 items-center ml-auto'>
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
                className='border-r border-b border-solid border-gray-200 dark:border-gray-600 font-semibold text-sm text-gray-600 dark:text-gray-50'
              >
                {field}
              </Table.HeadCell>
            ))}
          </Table.Head>
          <Table.Body className='divide-y font-semibold text-sm'>
            {filterProjects.map((data, index) => (
              <Table.Row key={index} className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                <Table.Cell className='font-medium text-blue-600 hover:underline cursor-pointer dark:text-blue-700 border-r dark:border-gray-700 space-x-2'>
                  <Checkbox />
                  <span onClick={() => navigate(`${data.id}`, { state: { type } })}>{data.name}</span>
                </Table.Cell>
                <Table.Cell className='border-r dark:border-gray-700 flex whitespace-nowrap p-4'>
                  <Badge className={selectColorDepartment(data.department)} style={{ borderRadius: "20px" }}>
                    {data.department}
                  </Badge>
                </Table.Cell>
                <Table.Cell className='border-r dark:border-gray-700'>
                  <Badge className={selectColorStatus(data.status)} style={{ borderRadius: "20px" }}>
                    {data.status}
                  </Badge>
                </Table.Cell>
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
