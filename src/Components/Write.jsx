import { SwipeableDrawer } from '@mui/material';
import React from 'react';
import { BlogDetail } from '../App';
import '../App.css'

const Write = () => {
  const { logged, blogs, setBlogs, write, setWrite, setOpenSnack } = BlogDetail();

  // Function for posting blog
  const posting = () => {
    var img = document.querySelector('#image').files[0];
    img = (img === undefined ? "https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg" : URL.createObjectURL(img));
    const title = document.querySelector("#title").value;
    const body = document.querySelector("#content").value;
    const authorName = logged.user;
    const id = blogs.length + 2;
    const userId = logged.id;
    if (title === '' || body === '') {
      setOpenSnack({ open: true, html: `Please fill at least title and content to post!! `, time: 1000, severity: "error" })
    } else {
      const obj = { userId: userId, authorName: authorName, src: img, id: id, title: title, body: body }
      setBlogs([...blogs, obj]);
      setOpenSnack({ open: true, html: `${logged.user}, you have posted successfully`, time: 1000, severity: "success" })
      setWrite({ open: false, data: null });
    }
  }

  // Function for updating the blog value

  const update = () => {
    const title = document.querySelector("#title").value;
    const body = document.querySelector("#content").value;
    var img = document.querySelector('#image').files[0];
    img = (img === undefined ? write.data.src : URL.createObjectURL(img));

    if (title === '' || body === '') {
      setOpenSnack({ open: true, html: `Please fill at least title and content to post!! `, time: 1000, severity: "error" })
    } else {
      blogs.forEach((val) => {
        if (val.id === write.data.id) {
          val.src = img;
          val.title = title; val.body = body;
        }
      })
      setOpenSnack({ open: true, html: `${logged.user}, you have updated successfully`, time: 1000, severity: "success" })
      setWrite({ open: false, data: null });
    }
  }

  return (
    <SwipeableDrawer anchor={'bottom'} open={write.open} PaperProps={{ sx: { height: "100vh" } }} onClose={() => { setWrite({ ...write, open: false }) }} onOpen={() => { setWrite({ ...write, open: true }) }}>
      <div id="writeContainer">
        <i className="fa-solid fa-xmark" onClick={() => setWrite({ ...write, open: false })}></i>
        <h1> {`Write Your Blog ${logged.user}`}</h1>
        <input type={'file'} id="image" />
        <input type={'text'} placeholder="Title" autoFocus id='title' defaultValue={write.data !== null ? write.data.title : ""} />
        <textarea placeholder='Content' id='content' defaultValue={write.data !== null ? write.data.body : ""} onChange={(e) => {
          e.target.style.height = e.target.scrollHeight + "px"
        }} />
        {write.data === null ? <button onClick={posting}> Post </button> : <button onClick={update}> Update </button>}
      </div>
    </SwipeableDrawer>
  )
}

export default Write