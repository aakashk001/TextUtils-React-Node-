import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Alerts from './components/Alert';
import Home from './components/Home';

function App() {
    //Hooks life cycle
    const [enableMode , setEnableMode] = useState('light');
    const [alert,setAlert] = useState(null);

    //Function 
    let showAlert = (message,type)=>{
      setAlert({
       msg:message,
       type:type
      }),
      setTimeout(()=>{
      setAlert(null);
      },2000) 
    }
    let heading = 'Enter Your Text Here To Analyze'
  //Hooke handler
    const toggleSwtich = ()=>{
    if(enableMode === 'dark'){
      removeBodyClass();
      setEnableMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled','success')
     }
    else{
      removeBodyClass();
      setEnableMode('dark');
      document.body.style.backgroundColor = '#60646d'
      showAlert('Dark mode has been enabled','success')
    }
    }

    //Function for the Drop down Mode Selector 
    const successBtn = (cls) =>{
      removeBodyClass();
      document.body.classList.add('bg-'+cls);

    }

    //remove all classList 
    const removeBodyClass = () =>{
      document.body.classList.remove('bg-danger');
      document.body.classList.remove('bg-light');
      document.body.classList.remove('bg-success');
      document.body.classList.remove('bg-primary');
    }
  return (
    <>
      <Navbar mode = {enableMode} switchmode = {toggleSwtich} panelBtn = {successBtn}/>
      {/* <Alerts alerts = {alert}/>     
      <Home heading = {heading} mode = {enableMode}  showAlerts ={showAlert} /> */}
       <Alerts alerts = {alert}/>
       <Home heading = {heading} mode = {enableMode}  showAlerts ={showAlert} />
    </>
  );
}

export default App;
