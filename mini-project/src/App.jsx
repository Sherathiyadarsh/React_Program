import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Pagenotfound from './feature/Pagenotfound';
import Userlogin from './feature/Userlogin';
import { Outlet } from 'react-router-dom';
import Header from './feature/Header';

function App() {
  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="colored" />
      {/* <h1>Hello React</h1> */}
      {/* <Pagenotfound/> */}
      {/* <Userlogin /> */}
      <Header />
      <Outlet />
    </>
  )
}

export default App
