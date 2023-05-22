import { ChangeEvent, useEffect, useState, useRef } from 'react';
import { Button, Label, Modal, Select, TextInput } from 'flowbite-react';
import { BriefcaseIcon } from '@heroicons/react/24/solid';
//import { createProject } from "../services/project";
import { AutoSuggestNewProjectForm } from '@components';
import { MembersName } from '@constants';

export function AddProject() {
  const rootRef = useRef<HTMLDivElement>(null);

  const department: Array<string> = ['Dự án', 'Nghiên cứu', 'Đội nhóm'];
  const status: Array<string> = [
    'Proposal',
    'In-progress',
    'Closing',
    'Halt',
    'Canceled',
    'Completed'
  ];

  const [show, setShow] = useState<boolean>(false);
  const [temp, setTemp] = useState<Array<string>>(MembersName);

  const [projectData, setProjectData] = useState<AddProject>({
    name: '',
    startDate: '',
    endDate: '',
    department: '',
    status: '',
    leaderName: [],
    memberName: [],
    mentorName: []
  });

  useEffect(() => {
    setTemp(MembersName);
  }, [show]);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = event.target;
    setProjectData({ ...projectData, [id]: value });
  };

  const handleClear = () => {
    console.log(projectData);
    setProjectData({
      name: '',
      startDate: '',
      endDate: '',
      department: '',
      status: '',
      leaderName: [],
      memberName: [],
      mentorName: []
    });
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
    <>
      <Button style={{ backgroundColor: '#19A69C' }} onClick={() => setShow(true)}>
        <BriefcaseIcon className='mr-3 w-4' />
        Tạo dự án
      </Button>
      <div ref={rootRef}>
        <Modal show={show} onClose={() => setShow(false)} root={rootRef.current ?? undefined}>
          <Modal.Header className='border-b border-gray-200 !p-6 dark:border-gray-700'>
            <strong className='font-archivo text-2xl text-[#19A69C]'>Create Project</strong>
          </Modal.Header>
          <Modal.Body className='h-[450px] overflow-y-auto'>
            <div className='grid grid-cols-1 sm:grid-cols-2'>
              <div className='sm:col-span-2'>
                <Label htmlFor='name'>
                  Project's name<span className='text-[#F12323]'>*</span>
                </Label>
                <TextInput id='name' name='name' value={projectData.name} onChange={handleChange} />
              </div>
              <div>
                <Label htmlFor='department'>
                  Department<span className='text-[#F12323]'>*</span>
                </Label>
                <Select
                  id='department'
                  required={true}
                  value={projectData.department || '---Chọn---(bắt buộc)'}
                  onChange={handleChange}
                >
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
                <Select
                  id='status'
                  required={true}
                  value={projectData.status || '---Chọn---(bắt buộc)'}
                  onChange={handleChange}
                >
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
                <TextInput
                  id='startDate'
                  name='startDate'
                  type='date'
                  value={projectData.startDate}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor='endDate'>
                  End date<span className='text-[#F12323]'>*</span>
                </Label>
                <TextInput
                  id='endDate'
                  name='endDate'
                  type='date'
                  value={projectData.endDate}
                  onChange={handleChange}
                />
              </div>
              <div className='sm:col-span-2'>
                <Label htmlFor='leaderName'>
                  Project's Leader<span className='text-[#F12323]'>*</span>
                </Label>
                <AutoSuggestNewProjectForm
                  id='leaderName'
                  setProjectData={setProjectData}
                  temp={temp}
                  setTemp={setTemp}
                />
                {projectData.leaderName.map((leader, index) => (
                  <p key={index}>
                    <span
                      className='cursor-pointer text-[20px] text-[#F12323]'
                      onClick={() => {
                        setProjectData((prev) => ({
                          ...prev,
                          leaderName: projectData.leaderName.filter((_, i) => i !== index)
                        }));
                        setTemp([...temp, leader]);
                      }}
                    >
                      &times;
                    </span>{' '}
                    {leader}
                  </p>
                ))}
              </div>
              <div className='sm:col-span-2'>
                <Label htmlFor='memberName'>
                  Project's Member<span className='text-[#F12323]'>*</span>
                </Label>
                <AutoSuggestNewProjectForm
                  id='memberName'
                  setProjectData={setProjectData}
                  temp={temp}
                  setTemp={setTemp}
                />
                {projectData.memberName.map((member, index) => (
                  <p key={index}>
                    <span
                      className='cursor-pointer text-[20px] text-[#F12323]'
                      onClick={() => {
                        setProjectData((prev) => ({
                          ...prev,
                          memberName: projectData.memberName.filter((_, i) => i !== index)
                        }));
                        setTemp([...temp, member]);
                      }}
                    >
                      &times;
                    </span>{' '}
                    {member}
                  </p>
                ))}
              </div>
              <div className='sm:col-span-2'>
                <Label htmlFor='mentorName'>Mentors</Label>
                <AutoSuggestNewProjectForm
                  id='mentorName'
                  setProjectData={setProjectData}
                  temp={temp}
                  setTemp={setTemp}
                />
                {projectData.mentorName.map((mentor, index) => (
                  <p key={index}>
                    <span
                      className='cursor-pointer text-[20px] text-[#F12323]'
                      onClick={() => {
                        setProjectData((prev) => ({
                          ...prev,
                          mentorName: projectData.mentorName.filter((_, i) => i !== index)
                        }));
                        setTemp([...temp, mentor]);
                      }}
                    >
                      &times;
                    </span>{' '}
                    {mentor}
                  </p>
                ))}
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className='justify-end'>
            <Button
              className='bg-gray-400 hover:bg-[#444444] dark:bg-gray-600 dark:hover:bg-[#444444]'
              onClick={() => {
                handleClear();
                setShow(false);
                setTemp(MembersName);
              }}
            >
              Cancel
            </Button>
            <Button
              className='!bg-[#06BCB3] hover:bg-[#19A69C] dark:bg-green-700 dark:hover:bg-green-900'
              onClick={() => {
                handleClear();
                setShow(false);
                setTemp(MembersName);
              }}
            >
              Create
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}
