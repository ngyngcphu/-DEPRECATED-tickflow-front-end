import { SideBar } from "./SideBar";
import { NavBar } from "./NavBar";

export function SideNavBar() {
  return (
    <div>
      <NavBar />
      <div className='flex items-start lg:px-5 lg:pl-3'>
        <SideBar />
      </div>
    </div>
  );
}
