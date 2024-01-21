import Footer from './compoents/footer';
import NavBar from './compoents/navbar';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
