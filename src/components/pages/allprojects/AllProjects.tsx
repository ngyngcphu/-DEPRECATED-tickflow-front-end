import { Breadcrumb } from "flowbite-react";
import { Link } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/24/solid";
import { SendNotification } from "./SendNotification";
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
      <ProjectsTable />
    </div>
  );
}
