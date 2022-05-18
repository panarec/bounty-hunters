import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

import './_layout.scss';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
