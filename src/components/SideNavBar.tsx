import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { DarkThemeToggle, Navbar, Sidebar } from 'flowbite-react';
import { Bars3CenterLeftIcon, UserIcon } from '@heroicons/react/24/outline';
import { Search } from '@components';
import { RoutesChild, RoutesGroup1, RoutesGroup2 } from '@constants';
import { useAppDispatch, RootState, setCollapse } from '@store';
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
            className='mr-3 h-6 w-8 cursor-pointer text-gray-600 dark:text-gray-400 sm:h-8'
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
      <div className='flex h-full overflow-hidden bg-white dark:bg-gray-900'>
        <Sidebar
          collapsed={collapse}
          className='transition-width border-r border-gray-200 duration-75 dark:border-gray-700'
        >
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              {RoutesGroup1.map(({ href, icon, title }, key) => (
                <Sidebar.Item
                  className={
                    pathname.includes(href)
                      ? 'bg-green-100 dark:bg-green-700'
                      : 'hover:bg-green-100'
                  }
                  key={key}
                  icon={icon}
                  as={Link}
                  to={href}
                  onClick={() => mainRef.current?.scrollTo({ top: 0 })}
                >
                  {title}
                </Sidebar.Item>
              ))}
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
              {RoutesGroup2.map(({ href, icon, title }, key) => (
                <Sidebar.Item
                  className={
                    href === pathname ? 'bg-green-100 dark:bg-green-700' : 'hover:bg-green-100'
                  }
                  key={key}
                  icon={icon}
                  as={Link}
                  to={href}
                  onClick={() => mainRef.current?.scrollTo({ top: 0 })}
                >
                  {title}
                </Sidebar.Item>
              ))}
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
        <main className='flex-1 overflow-auto' ref={mainRef}>
          <Routes>
            {RoutesGroup1.map(({ href, component: Component }) => (
              <Route key={href} path={href} element={Component} />
            ))}
            {RoutesGroup2.map(({ href, component: Component }) => (
              <Route key={href} path={href} element={Component} />
            ))}
            {RoutesChild.map(({ href, component: Component }) => (
              <Route key={href} path={href} element={Component} />
            ))}
          </Routes>
        </main>
      </div>
    </div>
  );
}
