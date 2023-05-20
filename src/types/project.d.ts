type ProjectRoleProps = {
  name: string;
  role: string;
  department: string;
};

type ProjectLogProps = {
  log: string;
  date: string;
  note: string;
};

type Project = {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  department: string;
  status: string;
  totalMember: number;
  leaderName: string;
  projectRole: ProjectRoleProps[];
  projectLog: ProjectLogProps[];
};
