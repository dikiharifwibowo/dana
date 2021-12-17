import './Style.scss';
import 'bulma/css/bulma.min.css'
import Home from './pages/Home'
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar' 
import About from './pages/About';
import ContactUs from './pages/Contact';
import { createStore } from 'redux';
import {Provider} from 'react-redux';

const globalState = {
  page: 'Home',
}
//reducer
const rootReducer = (state = globalState, action) => {
  if(action.type==="CHANGE_PAGE_HOME") {
    document.title = 'HOME - Dikih Arif Wibowo';
    return {
      ...state,
      page: 'Home'
    }  
  }
  if(action.type==="CHANGE_PAGE_ABOUT") {
    document.title = 'ABOUT - Dikih Arif Wibowo';
    return {
      ...state,
      page: 'About Us'
    }  
  }
  if(action.type==="CHANGE_PAGE_CONTACT") {
    document.title = 'CONTACT - Dikih Arif Wibowo';
    return {
      ...state,
      page: 'Contact'
    }  
  }

  return state;
}

//store
const store = createStore(rootReducer);


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path="/dana" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer></Footer>
      </div>
    </Provider>
  );
}

export default App;
