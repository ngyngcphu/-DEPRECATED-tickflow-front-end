import { useSelector } from 'react-redux';
import { useAppDispatch, RootState, setCollapse } from '@states';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';

export function SidebarMobile() {
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
        <Menu>
          <MenuItem> Documentation</MenuItem>
          <MenuItem> Calendar</MenuItem>
          <MenuItem> E-commerce</MenuItem>
          <MenuItem> Examples</MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
}
