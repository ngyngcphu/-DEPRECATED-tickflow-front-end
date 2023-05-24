import { forwardRef, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sidebar } from 'flowbite-react';
import { Bars3CenterLeftIcon } from '@heroicons/react/24/outline';
import { RoutesGroup1, RoutesGroup2 } from '@constants';
import img from '../assets/LOGO.svg';

export const OffCanvasSideBar = forwardRef<HTMLDivElement>((props, ref) => {
  const { pathname } = useLocation();
  const mainRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      id='drawer-navigation'
      className='fixed top-0 left-0 z-40 h-screen w-64 -translate-x-full overflow-y-auto bg-white p-4 transition-transform dark:bg-gray-800'
      tabIndex={-1}
      aria-labelledby='drawer-navigation-label'
    >
      <div id='drawer-navigation-label' className='flex items-center'>
        <Bars3CenterLeftIcon
          className='mr-3 h-6 w-8 cursor-pointer text-gray-600 dark:text-gray-400 sm:h-8'
          data-drawer-hide='drawer-navigation'
          aria-controls='drawer-navigation'
        />
        <img className='h-9 sm:h-12' src={img} />
      </div>
      <div className='overflow-y-auto py-4'>
        <Sidebar
          collapsed={false}
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
      </div>
    </div>
  );
});
