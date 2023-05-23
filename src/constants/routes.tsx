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
    icon: HomeIcon,
    href: '#',
    component: <></>
  },
  {
    title: 'Projects',
    icon: BriefcaseIcon,
    href: '/projects',
    component: <AllProjectsPage />
  },
  {
    title: 'Members',
    icon: UserCircleIcon,
    href: '#',
    component: <></>
  }
];

export const RoutesGroup2: RouteProps[] = [
  {
    title: 'Settings',
    icon: CogIcon,
    href: '#',
    component: <></>
  },
  {
    title: 'Templates',
    icon: DocumentTextIcon,
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
