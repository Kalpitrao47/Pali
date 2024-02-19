import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  
    return (
      //  blur-sm
      <div className="bg-[#f1f5f9]  min-h-screen  pt-5  flex flex-col justify-between">
        <div className="-mt-5">
          <Header />
        </div>
        <div className="mt-20 mb-20">
          <Outlet />
        </div>
        {/* <div className="absolute w-full"> */}
        <Footer />
        {/* </div> */}
      </div>
    );
  };

export default App;
