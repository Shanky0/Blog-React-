
import './App.css';
import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Write from './Components/Write';
import Post from './Components/Post';
import Error from './Components/Error';
import Navbar from './Components/Navbar';
import { useState } from 'react';


function App() {
  var [logged, setlogged] = useState(true);

  return (
    <>

      <div id='container'>
       
          <Routers>
            <Navbar logged={logged} setlogged={setlogged} />
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/register' element={<Register />} />
              <Route exact path='/write' element={<Write />} />
              <Route exact path='/post/:postID' element={<Post />} />
              <Route exact path='/post/:*' element={<Error />} />
            </Routes>
          </Routers>
  
      </div>

    </>
  );
}

export default App;
