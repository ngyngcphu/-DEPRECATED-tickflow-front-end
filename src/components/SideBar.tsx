import { Sidebar } from "flowbite-react";
import {
  ShoppingBagIcon,
  InboxIcon,
  UserIcon,
  ArrowSmallRightIcon,
  TableCellsIcon,
  ChartPieIcon,
  ViewColumnsIcon
} from "@heroicons/react/24/solid";
import img from "../assets/react.svg";

export function SideBar() {
  return (
    <div className='w-fit'>
      <Sidebar collapsed={true} aria-label='Sidebar with logo branding example'>
        <Sidebar.Logo href='#' img={img} imgAlt='Flowbite logo'>
          Flowbite
        </Sidebar.Logo>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href='#' icon={ChartPieIcon}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item href='#' icon={ViewColumnsIcon}>
              Kanban
            </Sidebar.Item>
            <Sidebar.Item href='#' icon={InboxIcon}>
              Inbox
            </Sidebar.Item>
            <Sidebar.Item href='#' icon={UserIcon}>
              Users
            </Sidebar.Item>
            <Sidebar.Item href='#' icon={ShoppingBagIcon}>
              Products
            </Sidebar.Item>
            <Sidebar.Item href='#' icon={ArrowSmallRightIcon}>
              Sign In
            </Sidebar.Item>
            <Sidebar.Item href='#' icon={TableCellsIcon}>
              Sign Up
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}
