import Footer from './compoents/footer';
import NavBar from './compoents/navbar';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div className="flex flex-col items-center">
      <NavBar />
      <main className="w-full max-w-screen-lg py-3">
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}
