import { Suspense, useState, useRef } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { DarkThemeToggle, Navbar, Sidebar, Spinner } from "flowbite-react";
import { Bars3CenterLeftIcon, UserIcon } from "@heroicons/react/24/outline";
import { BsGithub } from "react-icons/bs";
import { RoutesChild, RoutesGroup1, RoutesGroup2 } from "./DeclareRoutes";
import { Search } from "./Search";
import img from "../../assets/navbar.png";

export function Layout() {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const mainRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  return (
    <div className='flex h-screen w-full flex-col overflow-hidden'>
      <Navbar fluid className='border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700'>
        <div className='flex items-center'>
          <Bars3CenterLeftIcon
            className='mr-3 h-6 sm:h-8 w-8 cursor-pointer text-gray-600 dark:text-gray-400'
            onClick={() => setCollapsed(!collapsed)}
          />
          <img className='h-9 sm:h-12' src={img} />
        </div>
        <div className='flex items-center'>
          <Search />
        </div>
        <div className='flex items-center gap-2'>
          <a
            className='cursor-pointer rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700'
            href='https://github.com/TickLabVN'
            title='Github Repository'
            target='_blank'
            rel='noreferrer'
          >
            <BsGithub className='h-5 w-5' />
          </a>
          <UserIcon className='h-6 sm:h-8' />
          <DarkThemeToggle />
        </div>
      </Navbar>
      <div className='flex h-full overflow-hidden bg-white dark:bg-gray-900'>
        <Sidebar collapsed={collapsed} className='duration-75 border-r border-gray-200 transition-width dark:border-gray-700'>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              {RoutesGroup1.map(({ href, icon, title }, key) => (
                <Sidebar.Item
                  className={pathname.includes(href) ? "bg-green-100 dark:bg-green-700" : "hover:bg-green-100"}
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
                  className={href === pathname ? "bg-green-100 dark:bg-green-700" : "hover:bg-green-100"}
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
          <Suspense
            fallback={
              <div className='flex h-full items-center justify-center'>
                <Spinner />
              </div>
            }
          >
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
          </Suspense>
        </main>
      </div>
    </div>
  );
}
