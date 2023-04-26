import { ChangeEvent, Dispatch, useState } from "react";
import { Button, Label, Modal, Select, TextInput } from "flowbite-react";
import { BriefcaseIcon } from "@heroicons/react/24/solid";
import { AddProjectInterface } from "../interfaces/AddProjectInterface";
//import { createProject } from "../services/project";

import { AutoSuggestForm } from "./AutoSuggestForm";

export function NewProject() {
  const department: Array<string> = ["Dự án", "Nghiên cứu", "Đội nhóm"];
  const status: Array<string> = ["Proposal", "In-progress", "Closing", "Halt", "Canceled", "Completed"];
  const member: Array<string> = ["Nguyễn Thanh Hiền", "Nguyễn Hồng Quân", "Hoàng Lương", "Nguyễn Ngọc Phú"];

  const [show, setShow] = useState<boolean>(false);
  const [projectData, setProjectData] = useState<AddProjectInterface>({
    name: "",
    startDate: "",
    endDate: "",
    department: "",
    status: "",
    leaderName: "",
    memberName: [],
    mentorName: ""
  });

  console.log(projectData);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = event.target;
    setProjectData({ ...projectData, [id]: value });
  };

  // const createNewProject = () => {
  //   createProject(projectData).then(({ data }) => {
  //     const { id, name, startDate, endDate, department, status, totalMemberCollab, leaderName, projectRole, projectLog } = data;
  //     setProjectData({
  //       id: id,
  //       name: name,
  //       startDate: startDate,
  //       endDate: endDate,
  //       department: department,
  //       status: status,
  //       totalMemberCollab: totalMemberCollab,
  //       leaderName: leaderName,
  //       projectRole: projectRole,
  //       projectLog: projectLog,
  //     })
  //   })
  // }

  return (
    <div>
      <Button style={{ backgroundColor: "#19A69C" }} onClick={() => setShow(true)}>
        <BriefcaseIcon className='mr-3 w-4' />
        New Project
      </Button>
      <Modal show={show} onClose={() => setShow(false)}>
        <Modal.Header className='border-b border-gray-200 !p-6 dark:border-gray-700'>
          <strong className='text-[#19A69C] font-archivo text-2xl'>Create Project</strong>
        </Modal.Header>
        <Modal.Body>
          <div className='grid grid-cols-1 sm:grid-cols-2'>
            <div className='sm:col-span-2'>
              <ProjectName setProjectData={setProjectData} />
            </div>
            <div>
              <Label htmlFor='department'>
                Department<span className='text-[#F12323]'>*</span>
              </Label>
              <Select id='department' required={true} value={"---Chọn---(bắt buộc)" || projectData.department} onChange={handleChange}>
                <option disabled>---Chọn---(bắt buộc)</option>
                {department.map((department) => (
                  <option key={department}>{department}</option>
                ))}
              </Select>
            </div>
            <div>
              <Label htmlFor='status'>
                Status<span className='text-[#F12323]'>*</span>
              </Label>
              <Select id='status' required={true} value={"---Chọn---(bắt buộc)" || projectData.status} onChange={handleChange}>
                <option disabled>---Chọn---(bắt buộc)</option>
                {status.map((status) => (
                  <option key={status}>{status}</option>
                ))}
              </Select>
            </div>
            <div>
              <Label htmlFor='startDate'>
                Start date<span className='text-[#F12323]'>*</span>
              </Label>
              <TextInput id='startDate' name='startDate' type='date' value={projectData.startDate} onChange={handleChange} />
            </div>
            <div>
              <Label htmlFor='endDate'>
                End date<span className='text-[#F12323]'>*</span>
              </Label>
              <TextInput id='endDate' name='endDate' type='date' value={projectData.endDate} onChange={handleChange} />
            </div>
            <div className='sm:col-span-2'>
              <Label htmlFor='leaderName'>
                Project's Leader<span className='text-[#F12323]'>*</span>
              </Label>
              <AutoSuggestForm id='leaderName' setProjectData={setProjectData} />
            </div>
            <div className='sm:col-span-2'>
              <Label htmlFor='projectMember'>
                Project's Member<span className='text-[#F12323]'>*</span>
              </Label>
              <Select id='projectMember' required={true} defaultValue='---Chọn---(bắt buộc)'>
                <option disabled>---Chọn---(bắt buộc)</option>
                {member.map((member) => (
                  <option key={member}>{member}</option>
                ))}
              </Select>
            </div>
            <div className='sm:col-span-2'>
              <Label htmlFor='mentorName'>Mentors</Label>
              <AutoSuggestForm id='mentorName' setProjectData={setProjectData} />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className='justify-end'>
          <Button className='bg-gray-400 hover:bg-[#444444] dark:bg-gray-600 dark:hover:bg-[#444444]' onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button className='!bg-[#06BCB3] hover:bg-[#19A69C] dark:bg-green-700 dark:hover:bg-green-900' onClick={() => setShow(false)}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

interface ProjectNameProps {
  setProjectData: Dispatch<React.SetStateAction<AddProjectInterface>>;
}

function ProjectName(props: ProjectNameProps) {
  const [projectName, setProjectName] = useState<string>("");

  return (
    <div className='sm:col-span-2'>
      <Label htmlFor='name'>
        Project's name<span className='text-[#F12323]'>*</span>
      </Label>
      <TextInput
        id='name'
        name='name'
        value={projectName}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setProjectName(event.target.value)}
        onBlur={() => props.setProjectData((prev) => ({ ...prev, name: projectName }))}
      />
    </div>
  );
}
