
import './App.css';
import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Write from './Components/Write';
import Post from './Components/Post';
import Error from './Components/Error';
import Navbar from './Components/Navbar';
import { createContext, useContext, useState } from 'react';
import data from './Components/Assets/data.json'
import { Alert, Snackbar } from '@mui/material';

const user = createContext();
function App() {
  var [logged, setlogged] = useState({ id: 1, user: "Shanky" });
  const [blogs, setBlogs] = useState(data);
  const [write, setWrite] = useState({ open: false, data:null});
  const [openSnack, setOpenSnack] = useState({ open: false, html: "", time: 800, severity: "success" })

  return (
    <>
      <user.Provider value={{ logged, setlogged, blogs, setBlogs, write, setWrite, openSnack, setOpenSnack }} >
        <div id='container'>
          <Routers>
            <Navbar />
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/register' element={<Register />} />
              <Route exact path='/post/:postID' element={<Post />} />
              <Route exact path='/post/:*' element={<Error />} />
            </Routes>
          </Routers>

          <Write />
        </div>


        <Snackbar open={openSnack.open} autoHideDuration={openSnack.time} onClose={() => setOpenSnack({ ...openSnack, open: false })} anchorOrigin={{ vertical: 'top', horizontal: "center" }} >
          <Alert onClose={() => setOpenSnack({ ...openSnack, open: false })} severity={openSnack.severity} sx={{ width: '100%' }} variant="filled">
            {openSnack.html}
          </Alert>
        </Snackbar>
      </user.Provider>
    </>
  );
}

export default App;

export const BlogDetail = () => {
  return useContext(user)
}