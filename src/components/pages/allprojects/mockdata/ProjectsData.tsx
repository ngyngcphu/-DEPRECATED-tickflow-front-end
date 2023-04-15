export interface Projects {
  id: number;
  projectName: string;
  department: string;
  status: string;
  totalMemberCollab: string;
  leaderName: string;
}

export const ProjectsData: Projects[] = [
  {
    id: 0,
    projectName: "STM32",
    department: "Dự án",
    status: "Proposal",
    totalMemberCollab: "1/1",
    leaderName: "Phạm Thị Hiền"
  },
  {
    id: 1,
    projectName: "Music Box",
    department: "Dự án",
    status: "Proposal",
    totalMemberCollab: "1/0",
    leaderName: "Hồng Thiện Nhân"
  },
  {
    id: 2,
    projectName: "Application Protocol",
    department: "Dự án",
    status: "Proposal",
    totalMemberCollab: "1/0",
    leaderName: "Nguyễn Hồng Quân"
  },
  {
    id: 3,
    projectName: "Monodepth",
    department: "Nghiên cứu",
    status: "In progress",
    totalMemberCollab: "2/-",
    leaderName: "Vũ Nguyễn Minh Huy"
  },
  {
    id: 4,
    projectName: "TickFlow",
    department: "Dự án",
    status: "In progress",
    totalMemberCollab: "4/0",
    leaderName: "Nguyễn Thanh Hiền"
  },
  {
    id: 5,
    projectName: "Kahoot",
    department: "Dự án",
    status: "In progress",
    totalMemberCollab: "2/0",
    leaderName: "Hoàng Lương"
  },
  {
    id: 6,
    projectName: "Signal Modulation",
    department: "Dự án",
    status: "In progress",
    totalMemberCollab: "1/0",
    leaderName: "Nguyễn Văn Lợi"
  },
  {
    id: 7,
    projectName: "Extension Board",
    department: "Dự án",
    status: "Closing",
    totalMemberCollab: "1/1",
    leaderName: "Phạm Thị Hiền"
  },
  {
    id: 8,
    projectName: "Mạch điều khiển động cơ",
    department: "Dự án",
    status: "Closing",
    totalMemberCollab: "1/2",
    leaderName: "Nguyễn Thanh Hiền"
  },
  {
    id: 9,
    projectName: "TickFund",
    department: "Dự án",
    status: "Completed",
    totalMemberCollab: "3/-",
    leaderName: "Nguyễn Phúc Vinh"
  },
  {
    id: 10,
    projectName: "TickKit",
    department: "Dự án",
    status: "Completed",
    totalMemberCollab: "3/-",
    leaderName: "Ngô Minh Hồng Thái"
  },
  {
    id: 11,
    projectName: "Khóa thẻ từ TickLab",
    department: "Dự án",
    status: "Canceled",
    totalMemberCollab: "2/0",
    leaderName: "Hồng Thiện Nhân"
  }
];
