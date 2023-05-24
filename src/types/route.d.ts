type RouteProps = {
  title: string;
  icon: FC<ComponentProps<'svg'>>;
  href: string;
  component: ReactNode;
};

type RouteChild = {
  title: string;
  href: string;
  component: ReactNode;
};
