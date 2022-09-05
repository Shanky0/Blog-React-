import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { BlogDetail } from '../App';
import '../App.css'
const Post = () => {
  let params = useParams();
  const id = params.postID;
  const [detail, setDetail] = useState(null);
  const { blogs } = BlogDetail();

  useEffect(() => {
    blogs.forEach((val) => {
      if (val.id == id)
        setDetail(val)
    })
  }, [id]);
  const back = () => {
    window.history.go(-1);
  }

  return (
    <>
      {detail !== null &&
        <div id="postContainer">
          <button onClick={back}> <i className="fa-solid fa-arrow-left" /> Go Back</button>
          <div id='detailsContainer'>
            <img src={detail.src} alt={detail.detail} />
            <h1> {detail.title} </h1>
            <h6> Written by: {detail.authorName} </h6>
            <p> <pre>{detail.body}</pre></p>
          </div>
        </div>
      }
    </>
  )
}

export default Post