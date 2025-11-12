import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ChatbotButton from '../shared/ChatbotButton';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <ChatbotButton />
    </div>
  );
};

export default Layout;
