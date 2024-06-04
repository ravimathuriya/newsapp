import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {HashRouter as Router,Routes,Route,} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App = () => {
  
  
  let pagesize = 9;

  const APIKEY = process.env.REACT_APP_NEWSAPP_API

  const[progress, setprogress] = useState(0)  

 
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        
      />
        <Routes>
           <Route exact path = "/" element={<News setprogress={setprogress} apiKey={APIKEY} key="/" pagesize={pagesize} countary={"in"} category={"general"}/>}></Route>
           <Route exact path = "/business"  element={<News setprogress={setprogress} apiKey={APIKEY} key="business" pagesize={pagesize} countary={"in"} category={"business"}/>}></Route>
           <Route exact path = "/entertainment" element={<News setprogress={setprogress} apiKey={APIKEY} key="entertainment" pagesize={pagesize} countary={"in"} category={"entertainment"}/>}></Route>
           <Route exact path = "/general" element={<News setprogress={setprogress} apiKey={APIKEY} key="general" pagesize={pagesize} countary={"in"} category={"general"}/>}></Route>
           <Route exact path = "/health" element={<News setprogress={setprogress} apiKey={APIKEY} key="health" pagesize={pagesize} countary={"in"} category={"health"}/>}></Route>
           <Route exact path = "/science" element={<News setprogress={setprogress} apiKey={APIKEY} key="science" pagesize={pagesize} countary={"in"} category={"science"}/>}></Route>
           <Route exact path = "/sports" element={<News setprogress={setprogress} apiKey={APIKEY} key="sports" pagesize={pagesize} countary={"in"} category={"sports"}/>}></Route>
           <Route exact path = "/technology" element={<News setprogress={setprogress} apiKey={APIKEY} key="technology" pagesize={pagesize} countary={"in"} category={"technology"}/>}></Route> 
        </Routes>
        </Router>
        
      </div>
    )
  
}

export default App
