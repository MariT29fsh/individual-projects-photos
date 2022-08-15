import './App.css';
import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LandingPage from './Pantallas/LandingPages/LandingPage';
import MyNotes from './Pantallas/MyNotes/MyNotes';
import LoginPage from './Pantallas/LoginPage/LoginPage';
import RegisterPage from './Pantallas/RegisterPage/RegisterPage';
import Createnotes from './Pantallas/CreateNotes/Createnote';
import Create from './Pantallas/CreateNotes/Create';
import Allnotes from './Pantallas/image/home';
import Home from './Pantallas/image/home';
import Image from './Pantallas/image/Upload';
import Card from './Pantallas/image/Uniquecard';
import { Route, Routes} from 'react-router-dom'

class App extends React.Component {
  render() {
  return(
    <div className='app'>
    <Header/>
    <Routes>
  
  <Route exact path='/' element={<LandingPage/>} />
  <Route  path='/login' element={<LoginPage/>} />
  <Route  path='/register' element={<RegisterPage/>} />
  <Route  path='/mybook' element={<MyNotes/>} />  
  <Route path='/createnote' element={<Createnotes/>}/>
  <Route path='/mynotes/create' element={<Create/>}/>
  <Route path='/mynotes/all' element={<Allnotes/>}/>
  <Route path='/home' element={<Home/>}/>
  <Route path='/image' element={<Image/>}/>
  <Route path='/product/:id' element={<Card/>}></Route>
  </Routes>  
  <Footer/>
    </div>    
  
  )}
}

export default App;
