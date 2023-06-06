export const selectColorDepartment = (department: string) => {
  if (department === 'Dự án') {
    return 'bg-blue-300 bg-opacity-20 text-blue-500';
  } else if (department === 'Nghiên cứu') {
    return 'bg-purple-300 bg-opacity-20 text-purple-500';
  } else {
    return 'bg-teal-300 bg-opacity-20 text-teal-500';
  }
};

export const selectColorStatus = (status: string) => {
  if (status === 'Proposal') {
    return 'bg-yellow-300 bg-opacity-20 text-yellow-500';
  } else if (status === 'On-going') {
    return 'bg-teal-300 bg-opacity-20 text-teal-500';
  } else if (status === 'Closing') {
    return 'bg-blue-300 bg-opacity-20 text-blue-500';
  } else if (status === 'Completed') {
    return 'bg-purple-300 bg-opacity-20 text-purple-500';
  } else if (status === 'Canceled') {
    return 'bg-gray-300 bg-opacity-20 text-gray-500';
  } else if (status === 'Halt') {
    return 'bg-red-300 bg-opacity-20 text-red-500';
  }
};
