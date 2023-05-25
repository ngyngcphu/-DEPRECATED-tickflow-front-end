import { Routes, Route } from 'react-router-dom';
import {
  BriefcaseIcon,
  CogIcon,
  DocumentTextIcon,
  HomeIcon,
  UserCircleIcon
} from '@heroicons/react/24/solid';
import { AllProjectsPage, DetailProjectPage } from '@pages';

export const RoutesGroup1: RouteProps[] = [
  {
    title: 'Overview',
    icon: <HomeIcon className='w-6 text-gray-500' />,
    href: '#',
    component: <></>
  },
  {
    title: 'Projects',
    icon: <BriefcaseIcon className='w-6 text-gray-500' />,
    href: '/projects',
    component: <AllProjectsPage />
  },
  {
    title: 'Members',
    icon: <UserCircleIcon className='w-6 text-gray-500' />,
    href: '#',
    component: <></>
  }
];

export const RoutesGroup2: RouteProps[] = [
  {
    title: 'Settings',
    icon: <CogIcon className='w-6 text-gray-500' />,
    href: '#',
    component: <></>
  },
  {
    title: 'Templates',
    icon: <DocumentTextIcon className='w-6 text-gray-500' />,
    href: '#',
    component: <></>
  }
];

export const RoutesChild: RouteChild[] = [
  {
    title: 'ProjectId',
    href: '/projects/:projectId',
    component: <DetailProjectPage />
  }
];

export function RoutePages() {
  return (
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
  );
}
