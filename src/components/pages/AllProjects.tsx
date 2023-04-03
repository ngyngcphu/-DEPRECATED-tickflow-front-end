import type { FC } from "react";
import { useState } from "react";
import { Breadcrumb, Button, Label, Modal, Select, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { BriefcaseIcon, HomeIcon, TrashIcon } from "@heroicons/react/24/solid";
import { SendNotification } from "./SendNotification";
import { TableView } from "./TableView";
import { ProjectsTable } from "./ProjectsTable";

export function AllProjects() {
  return (
    <div>
      <Breadcrumb aria-label='Solid background breadcrumb example' className='bg-gray-50 py-3 px-5 dark:bg-gray-700'>
        <Breadcrumb.Item icon={HomeIcon}>
          <Link to='/overview' className='dark:text-white'>
            Projects
          </Link>
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className='flex w-full items-center sm:justify-end mb-2'>
        <SendNotification />
      </div>
      <div className='flex items-center mb-2'>
        <TableView />
        <div className='flex items-center ml-auto space-x-2'>
          <TrashIcon className='ml-auto w-6' />
          <NewProject />
        </div>
      </div>
      <div>
        <ProjectsTable />
      </div>
    </div>
  );
}

const NewProject: FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const department: Array<string> = ["Dự án", "Nghiên cứu", "Đội nhóm"];
  const status: Array<string> = ["Proposal", "In-progress", "Closing", "Halt", "Canceled", "Completed"];
  const member: Array<string> = ["Nguyễn Thanh Hiền", "Nguyễn Hồng Quân", "Hoàng Lương", "Nguyễn Ngọc Phú"];
  const mentor: Array<string> = ["Nguyễn Phúc Vinh", "Cù Đỗ Thanh Nhân", "Vũ Nguyễn Minh Huy", "Ngô Minh Hồng Thái"];

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
              <Label htmlFor='projectName'>
                Project's name<span className='text-[#F12323]'>*</span>
              </Label>
              <TextInput id='projectName' name='projectName' />
            </div>
            <div>
              <Label htmlFor='department'>
                Department<span className='text-[#F12323]'>*</span>
              </Label>
              <Select id='department' required={true}>
                <option selected disabled>
                  ---Chọn---(bắt buộc)
                </option>
                {department.map((department) => (
                  <option key={department}>{department}</option>
                ))}
              </Select>
            </div>
            <div>
              <Label htmlFor='status'>
                Status<span className='text-[#F12323]'>*</span>
              </Label>
              <Select id='status' required={true}>
                <option selected disabled>
                  ---Chọn---(bắt buộc)
                </option>
                {status.map((status) => (
                  <option key={status}>{status}</option>
                ))}
              </Select>
            </div>
            <div>
              <Label htmlFor='startDate'>
                Start date<span className='text-[#F12323]'>*</span>
              </Label>
              <TextInput id='startDate' name='startDate' type='date' />
            </div>
            <div>
              <Label htmlFor='endDate'>
                End date<span className='text-[#F12323]'>*</span>
              </Label>
              <TextInput id='endDate' name='endDate' type='date' />
            </div>
            <div className='sm:col-span-2'>
              <Label htmlFor='projectLeader'>
                Project's Leader<span className='text-[#F12323]'>*</span>
              </Label>
              <Select id='projectLeader' required={true}>
                <option selected disabled>
                  ---Chọn---(bắt buộc)
                </option>
                {member.map((member) => (
                  <option key={member}>{member}</option>
                ))}
              </Select>
            </div>
            <div className='sm:col-span-2'>
              <Label htmlFor='projectMember'>
                Project's Member<span className='text-[#F12323]'>*</span>
              </Label>
              <Select id='projectMember' required={true}>
                <option selected disabled>
                  ---Chọn---(bắt buộc)
                </option>
                {member.map((member) => (
                  <option key={member}>{member}</option>
                ))}
              </Select>
            </div>
            <div className='sm:col-span-2'>
              <Label htmlFor='mentors'>Mentors</Label>
              <Select id='mentors'>
                <option selected disabled>
                  (Optional)
                </option>
                {mentor.map((mentor) => (
                  <option key={mentor}>{mentor}</option>
                ))}
              </Select>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className='justify-end'>
          <Button className='bg-gray-400 hover:bg-[#444444] dark:bg-gray-600 dark:hover:bg-[#444444]' onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button className='bg-[#06BCB3] hover:bg-[#19A69C] dark:bg-green-700 dark:hover:bg-green-900' onClick={() => setShow(false)}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
