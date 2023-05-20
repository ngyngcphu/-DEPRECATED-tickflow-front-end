import { ChangeEvent, useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { Breadcrumb, Card, Label, TextInput, Timeline } from "flowbite-react";
import { BriefcaseIcon, PencilIcon } from "@heroicons/react/24/solid";
import { SendNotification } from "@components";
import { getProject } from "@services";
import { AddMember, DeleteProject } from "@components";
import projectImage from "../assets/projectImage.svg";

export function DetailProject() {
  const { projectId } = useParams<string>();
  const { state } = useLocation();
  const { type } = state;

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

  // stupid code =))
  const selectColor = (role: string) => {
    if (role === "Leader") {
      return "text-teal-600";
    } else if (role === "Member") {
      return "text-blue-700";
    } else if (role === "Mentor") {
      return "text-gray-600";
    } else if (role === "Council") {
      return "text-purple-600";
    }
  };

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
      <div className='grid grid-cols-5'>
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
        <div className='col-span-4 overflow-y-scroll h-[500px] mx-5'>
          <div className='flex justify-between items-center mb-2'>
            <p className='text-3xl font-bold text-gray-600'>Vai trò</p>
            <div className='flex gap-2 items-center justify-items-center'>
              <SendNotification />
              <AddMember />
            </div>
          </div>
          <div className='grid grid-cols-3 gap-5 mb-5 items-center justify-items-center'>
            {projectData.projectRole.map((data, index) => (
              <Card key={index} className='min-w-full min-h-full'>
                <div className='grid grid-cols-7 items-center'>
                  <img
                    className='h-16 w-16 rounded-full shadow-lg grid col-span-2'
                    src='https://flowbite.com/docs/images/people/profile-picture-3.jpg'
                    alt='Bonnie image'
                  />
                  <div className='grid col-span-5 gap-2'>
                    <h5 className={selectColor(data.role) + " " + "text-lg font-medium dark:text-white"}>{data.name}</h5>
                    <h5 className={selectColor(data.role) + " " + "text-sm font-medium dark:text-white"}>{data.role}</h5>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className='flex'>
            <p className='text-3xl font-bold text-gray-600 mb-2'>Project Log</p>
          </div>
          <Timeline className='mx-2'>
            {projectData.projectLog.map((data, index) => (
              <Timeline.Item key={index}>
                <Timeline.Point />
                <Timeline.Content>
                  <Timeline.Time>{Intl.DateTimeFormat("vi", { dateStyle: "full" }).format(new Date(data.date))}</Timeline.Time>
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
