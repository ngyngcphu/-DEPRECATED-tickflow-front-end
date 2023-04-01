import { useState, useEffect } from "react";
import { Sidebar } from "flowbite-react";
import { BriefcaseIcon, CogIcon, DocumentTextIcon, HomeIcon, UserCircleIcon } from "@heroicons/react/24/solid";

export function SideBar() {
  const [currentPage, setCurrentPage] = useState<string>("/overview");

  useEffect(() => {
    const newPage = window.location.pathname;
    setCurrentPage(newPage);
  }, [currentPage]);

  return (
    <Sidebar aria-label='Sidebar with multi-level dropdown example'>
      <div className='flex h-full flex-col justify-between py-2'>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href='#' icon={HomeIcon} className={"/overview" === currentPage ? "bg-green-100 dark:bg-green-700" : ""}>
              Overview
            </Sidebar.Item>
            <Sidebar.Item href='#' icon={BriefcaseIcon} className={"/" === currentPage ? "bg-green-100 dark:bg-green-700" : ""}>
              Projects
            </Sidebar.Item>
            <Sidebar.Item href='#' icon={UserCircleIcon} className={"/" === currentPage ? "bg-green-100 dark:bg-green-700" : ""}>
              Members
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item href='#' icon={CogIcon} className={"/" === currentPage ? "bg-green-100 dark:bg-green-700" : ""}>
              Settings
            </Sidebar.Item>
            <Sidebar.Item href='#' icon={DocumentTextIcon} className={"/" === currentPage ? "bg-green-100 dark:bg-green-700" : ""}>
              Templates
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </div>
    </Sidebar>
  );
}
