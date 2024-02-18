import { Header } from '../Header';
import { Footer } from '../Footer';
import { LayoutProps } from './Layout.types';

export const Layout = (props: LayoutProps) => {
  const { children, headerAction } = props;
  return (
    <>
      <Header action={headerAction} />
      {children}
      <Footer />
    </>
  );
};
