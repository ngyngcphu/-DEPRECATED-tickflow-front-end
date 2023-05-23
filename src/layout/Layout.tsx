import { useEffect, useRef } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Drawer } from 'flowbite';
import { DarkThemeToggle, Navbar, Sidebar } from 'flowbite-react';
import { Bars3CenterLeftIcon, UserIcon } from '@heroicons/react/24/outline';
import { Search } from '@components';
import { RoutesChild, RoutesGroup1, RoutesGroup2 } from '@constants';
import { OffCanvasSideBar } from '@layout';
import img from '../assets/LOGO.svg';

export function Layout() {
  const mainRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  const options = {
    placement: 'right',
    backdrop: true,
    bodyScrolling: false,
    edge: false,
    edgeOffset: '',
    backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30'
  };

  useEffect(() => {
    new Drawer(drawerRef.current, options);
  }, []);

  return (
    <div className='flex h-screen w-full flex-col overflow-hidden'>
      <Navbar fluid className='border-b border-gray-200 dark:border-gray-700 dark:bg-gray-800'>
        <div className='flex items-center'>
          <Bars3CenterLeftIcon
            className='mr-3 h-6 w-8 cursor-pointer text-gray-600 dark:text-gray-400 sm:h-8'
            data-drawer-target='drawer-navigation'
            data-drawer-show='drawer-navigation'
            aria-controls='drawer-navigation'
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
      <OffCanvasSideBar ref={drawerRef} />
      <div className='flex h-full overflow-hidden bg-white dark:bg-gray-900'>
        <Sidebar
          collapsed={true}
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
