import logo from './logo.svg';
import './App.css';
import FirstFuncomp from './components/01day/FirstFuncomp';
import img1 from './assets/pic 2.jpg'
import PropsDemoinFun from './components/01day/PropsDemoinFun';
import EventDemoinFun from './components/02day/EventDemoinFun';
import Statedemoinfun from './components/02day/Statedemoinfun';
import CounterApp from './components/02day/CounterApp';
import PropsDemo from './components/03day/PropsDemo';
import { useState } from 'react';
import RegisterForm from './components/03day/RegisterForm';
import Form1 from './components/03day/Form1';
import Form2 from './components/03day/Form2';
import ConditionalRendering from './components/04day/ConditionalRendering';
import Listrendering from './components/05day/Listrendering';
import ProductRendering from './components/05day/ProductRendering';
import Productlist from './components/05day/Productlist';

function App() {
  let a = "Radhey Radhey"
  let [isLoggedIn, setIsLoggedIn] = useState(true)
  return (
    <div className='container'>
      {/* <label htmlFor=''>Enter</label> */}
      {/* <h1>Radhey Radhey</h1> */}
      {/* <FirstFuncomp /> */}
      {/* <img src={img1} style={{ border: '15px solid gray', borderRadius: '50px' }}></img> */}
      {/* <img src={require('./assets/pic 2.jpg')}></img> */}
      {/* <PropsDemoinFun username="Ram" address="Pune"/> */}
      <br></br>
      {/* <EventDemoinFun/> */}
      {/* <Statedemoinfun uname="Ram"/> */}
      {/* <CounterApp/> */}
      {/* <PropsDemo logging={isLoggedIn}>
        <h1>KRISHNA</h1>
        <CounterApp/>
        <span>Span tag</span>
      </PropsDemo>
      <br/>
      <PropsDemo vara="Radhey Radhey"/> */}
      {/* <RegisterForm/> */}
      {/* <Form1/> */}
      {/* <Form2/> */}
      {/* <button type="button" class="btn btn-primary" onClick={()=>setIsLoggedIn(!isLoggedIn)}>{isLoggedIn ? "Logout" : "Login"}</button>

      <ConditionalRendering isLoggedIn={isLoggedIn} username="Surbhi" /> */}
      {/* <Listrendering/> */}
      {/* <ProductRendering/> */}
      <Productlist/>
    </div>
  );
}

export default App;
