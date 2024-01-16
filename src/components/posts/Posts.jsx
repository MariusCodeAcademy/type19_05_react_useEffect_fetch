// parsiusti ir sugeneruoti sarasa https://jsonplaceholder.typicode.com/posts

import { useEffect, useState } from 'react';

export default function Posts() {
  const [postsArr, setPostsArr] = useState([]);

  // getPosts(); // gausim infinite loop jei getPosts keicia state

  useEffect(() => {
    getPostsDummy();
  }, []);

  // function getPosts() {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then((resp) => resp.json())
  //     .then((gotPostsArr) => {
  //       setPostsArr(gotPostsArr.slice(0, 10));
  //     })
  //     .catch((error) => {
  //       console.warn('ivyko klaida:', error);
  //     });
  // }
  function getPostsDummy() {
    fetch('https://dummyjson.com/posts')
      .then((resp) => resp.json())
      .then((gotObjBack) => {
        console.log('gotPostsArr ===', gotObjBack);
        setPostsArr(gotObjBack.posts);
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
            <p>{post.body.slice(0, 85)}...</p>
            <p>Likes: {post.reactions}</p>
            <hr />
            <h4>Tags</h4>
            <ul className='unlisted flex f-wrap'>
              {post.tags.map((tag) => (
                <li key={tag} className='tag'>
                  {tag}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

// kaip korteles

// kas nori idomiau https://dummyjson.com/posts
