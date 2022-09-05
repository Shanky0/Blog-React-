import React from 'react';
import { BlogDetail } from '../App';
import BlogCard from './BlogCard';



const Home = () => {
  const {blogs} = BlogDetail();
  return (
    <>
      <div id='homeContainer'>
        <h1>Welcome to Blogs  </h1>
        <div id='blogsList'>
          {blogs.map((val) => { return (<BlogCard val={val} key={val.id} />) })}
        </div>
      </div>
    </>
  )
}

export default Home