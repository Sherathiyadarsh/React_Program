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
import Formvalidition from './components/06day/Formvalidition';
// import CssinReact from './components/06day/CssinReact';
import ReactBootstrapdemo from './components/07day/ReactBootstrapdemo';
import { Mybutton, TextBox } from './components/07day/Stylecomponents';
import ReactHooksFormValidition from './components/07day/ReactHooksFormValidition';
import Counter from './components/08day/Counter';
import Classcompdemo from './components/10day/Classcompdemo';
import Classcompdemo1 from './components/10day/Classcompdemo1';
import PasswordGenerator from './components/09day/PasswordGenerator';
import RefDemo from './components/09day/RefDemo';
import Productform from './components/Assing-1/Productform';
import Lifecyclemethods from './components/11day/Lifecyclemethods';
import PureCompClassDemo from './components/11day/PureCompClassDemo';



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
      {/* <Productlist/> */}
      {/* <Formvalidition/> */}
      {/* <CssinReact/> */}
      {/* <ReactBootstrapdemo/> */}
      {/* <Mybutton>Click Me</Mybutton><br/><br/>
      <TextBox type='datetime-local'></TextBox> */}
      {/* <ReactHooksFormValidition/> */}
      {/* <Counter/> */}
      {/* <Classcompdemo username="Darsh Sherathiya" address="Ahmedabad">
        <Counter></Counter>
      </Classcompdemo><hr/>
      <Classcompdemo1/> */}
      {/* <PasswordGenerator/><hr/>
      <RefDemo/> */}
      {/* <Productform/> */}
      <button type="button" class="btn btn-primary me-4" onClick={() => setIsLoggedIn(!isLoggedIn)}>{isLoggedIn ? "Hide" : "Show"}</button>{isLoggedIn && <Lifecyclemethods username="Darsh" />}
      {/* <PureCompClassDemo /> */}
    </div>
  );
}

export default App;
