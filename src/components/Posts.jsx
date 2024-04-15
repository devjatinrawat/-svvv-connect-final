import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
    <ul style={{ display : "flex" , flexWrap : "Wrap" , height: "auto"}}>
      {posts.map(post => (
        <div key={post.id} className='post'>
          <img src='https://source.unsplash.com/random/1600x900?apple' alt='blog image'/>
             <div className='post-body'>
              <h2>{post.title}</h2>
             <p>{post.body}</p>
             <div>
              <a href="">Read More</a>
              </div>
            </div>
        </div>
      ))}
    </ul>
    </>
  );
};

export default Posts;
