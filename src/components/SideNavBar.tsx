import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { DarkThemeToggle, Navbar } from 'flowbite-react';
import { Bars3CenterLeftIcon, UserIcon } from '@heroicons/react/24/outline';
import { Search, SidebarMobile } from '@components';
import { RoutesGroup1, RoutesGroup2, RoutePages } from '@constants';
import { useAppDispatch, RootState, setCollapse } from '@states';
import img from '../assets/LOGO.svg';

export function SideNavBar() {
  const mainRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  const { collapse } = useSelector((state: RootState) => state.sidebar);
  const dispatch = useAppDispatch();

  return (
    <div className='flex h-screen w-full flex-col overflow-hidden'>
      <Navbar fluid className='border-b border-gray-200 dark:border-gray-700 dark:bg-gray-800'>
        <div className='flex items-center'>
          <Bars3CenterLeftIcon
            className='mr-3 h-8 w-11 cursor-pointer text-gray-600 dark:text-gray-400'
            onClick={() => dispatch(setCollapse(!collapse))}
          />
          <img className='h-9 sm:h-12' src={img} />
        </div>
        <div className='flex items-center'>
          <Search />
        </div>
        <div className='flex items-center gap-2'>
          <UserIcon className='h-6 sm:h-8' />
          <DarkThemeToggle />
        </div>
      </Navbar>
      <SidebarMobile />
      <div className='flex h-full overflow-hidden bg-white dark:bg-gray-900'>
        <Sidebar
          collapsed={true}
          className='transition-width border-r border-gray-200 duration-75 dark:border-gray-700'
        >
          <div className='flex h-5/6 flex-col justify-between'>
            <Menu>
              {RoutesGroup1.map(({ href, icon, title }, key) => (
                <MenuItem
                  key={key}
                  className={
                    pathname.includes(href)
                      ? 'bg-green-100 dark:bg-green-700'
                      : 'hover:bg-green-100'
                  }
                  icon={icon}
                  onClick={() => mainRef.current?.scrollTo({ top: 0 })}
                  component={<Link to={href}></Link>}
                >
                  {title}
                </MenuItem>
              ))}
            </Menu>
            <Menu>
              {RoutesGroup2.map(({ href, icon, title }, key) => (
                <MenuItem
                  key={key}
                  className={
                    pathname.includes(href)
                      ? 'bg-green-100 dark:bg-green-700'
                      : 'hover:bg-green-100'
                  }
                  icon={icon}
                  onClick={() => mainRef.current?.scrollTo({ top: 0 })}
                  component={<Link to={href}></Link>}
                >
                  {title}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </Sidebar>
        <main className='flex-1 overflow-auto' ref={mainRef}>
          <RoutePages />
        </main>
      </div>
    </div>
  );
}
