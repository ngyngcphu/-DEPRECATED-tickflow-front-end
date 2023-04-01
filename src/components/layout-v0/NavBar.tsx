import { DarkThemeToggle, Navbar } from "flowbite-react";
import { Bars3Icon, UserIcon } from "@heroicons/react/24/outline";
import img from "../../assets/navbar.png";

export function NavBar() {
  return (
    <Navbar fluid>
      <div className='w-full p-3 lg:px-5 lg:pl-3 flex items-center justify-between'>
        <Navbar.Brand href='/overview'>
          <Bars3Icon className='mr-3 h-6 sm:h-8' />
          <img className='h-9 sm:h-12' src={img} />
        </Navbar.Brand>
        <div className='flex items-center gap-3'>
          <UserIcon className='h-6 sm:h-8' />
          <DarkThemeToggle />
        </div>
      </div>
    </Navbar>
  );
}
