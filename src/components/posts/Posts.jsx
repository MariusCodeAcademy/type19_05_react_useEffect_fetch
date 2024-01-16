// parsiusti ir sugeneruoti sarasa https://jsonplaceholder.typicode.com/posts

import { useEffect, useState } from 'react';

export default function Posts() {
  const [postsArr, setPostsArr] = useState([]);

  // getPosts(); // gausim infinite loop jei getPosts keicia state

  useEffect(() => {
    getPosts();
  }, []);

  function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((resp) => resp.json())
      .then((gotPostsArr) => {
        setPostsArr(gotPostsArr);
      })
      .catch((error) => {
        console.warn('ivyko klaida:', error);
      });
  }

  return (
    <div>
      <h2>Posts</h2>
      <ul className='grid unlisted'>
        {postsArr.map((post) => (
          <li className='card' key={post.id}>
            <p>postId: {post.id}</p>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

// kaip korteles

// kas nori idomiau https://dummyjson.com/posts
