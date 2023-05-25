import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Bars3CenterLeftIcon } from '@heroicons/react/24/outline';
import { RoutesGroup1, RoutesGroup2 } from '@constants';
import { useAppDispatch, RootState, setCollapse } from '@states';
import img from '/src/assets/LOGO.svg';

export function SidebarMobile() {
  const { pathname } = useLocation();
  const mainRef = useRef<HTMLDivElement>(null);

  const { collapse } = useSelector((state: RootState) => state.sidebar);
  const dispatch = useAppDispatch();

  return (
    <>
      <Sidebar
        onBackdropClick={() => dispatch(setCollapse(!collapse))}
        toggled={collapse}
        breakPoint='all'
        backgroundColor='#FFFFFF'
      >
        <div className='top-0 left-0 z-40 overflow-y-auto bg-white px-2 py-4 transition-transform dark:bg-gray-800'>
          <div className='flex items-center'>
            <Bars3CenterLeftIcon
              className='mx-2 h-8 w-11 cursor-pointer text-gray-600 dark:text-gray-400'
              onClick={() => dispatch(setCollapse(!collapse))}
            />
            <img className='h-9 sm:h-11' src={img} />
          </div>
        </div>
        <div className='flex h-5/6 flex-col justify-between'>
          <Menu>
            {RoutesGroup1.map(({ href, icon, title }, key) => (
              <MenuItem
                key={key}
                className={
                  pathname.includes(href) ? 'bg-green-100 dark:bg-green-700' : 'hover:bg-green-100'
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
                  pathname.includes(href) ? 'bg-green-100 dark:bg-green-700' : 'hover:bg-green-100'
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
    </>
  );
}
