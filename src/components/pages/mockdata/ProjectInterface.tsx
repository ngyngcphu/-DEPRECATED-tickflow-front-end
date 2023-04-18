interface ProjectRoleProps {
  name: string;
  role: string;
  department: string;
}

interface ProjectLogProps {
  log: string;
  date: string;
  note: string;
}

export interface ProjectProps {
  name: string;
  startDate: string;
  endDate: string;
  department: string;
  status: string;
  totalMember: number;
  projectRole: ProjectRoleProps[];
  projectLog: ProjectLogProps[];
}
