// parsiusti ir sugeneruoti sarasa https://jsonplaceholder.typicode.com/posts

import { useEffect, useState } from 'react';
import SinglePost from './SinglePost';

export default function Posts() {
  const [postsArr, setPostsArr] = useState([]);
  const [selectValue, setSelectValue] = useState('');
  console.log('selectValue ===', selectValue);
  // getPosts(); // gausim infinite loop jei getPosts keicia state

  function sortByLikes() {
    console.log('sortByLikes');
    // i setPostsArr funkcija paduoti postsArr versija kuri yra isrikiuota, nemodifikuojant postsArr
    // shalow copy
    // pasidarom kopija
    const postArrCopy = [...postsArr];
    // atliekam veikmus su kopija
    postArrCopy.sort((aObj, bObj) => bObj.reactions - aObj.reactions);
    // atnaujinam state su kopija
    setPostsArr(postArrCopy);
  }

  function showOnly5() {
    console.log('showOnly5');
    setSelectValue(7);
    // pasidaryti kopija
    // su splice kukirpti ir palikti tik 5

    // kurti nauja masyva
    // sukti foreach ir sudeti tik pirmus 5 i nauja masyva

    // arr.slice(0, 5)
    // const pirmi5 = postsArr.slice(0, 5);
    // setPostsArr(pirmi5);

    // arr.filter()
  }
  // perdaryti i showOnly5(howMany){}

  useEffect(() => {
    getPostsDummy();
  }, []);

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

  function handleInput(e) {
    console.log('e.target.value ===', e.target.value);
    let reiksme = e.target.value;
  }

  function handleSelectFilter(e) {
    console.log('handleSelectFilter e.target.value ===', e.target.value);
    let reiksme = e.target.value;
    setSelectValue(reiksme);
    // if (reiksme === '5') {
    //   showOnly5();
    // }
  }

  const filteredPosts = selectValue ? postsArr.slice(0, selectValue) : postsArr;
  console.log('postsArr ===', postsArr);

  return (
    <div>
      <h2>Posts</h2>
      <h2>tai kas ivesta: </h2>
      <h2>filterON: {selectValue}</h2>
      <fieldset className='flex'>
        <legend>Filters </legend>
        <button onClick={sortByLikes} className='btn'>
          Most liked posts
        </button>
        <button onClick={showOnly5} className='btn'>
          show 5 posts
        </button>
        <input onChange={handleInput} type='text' placeholder='kazkas' />
        <select onChange={handleSelectFilter} value={selectValue}>
          <option disabled>How many to show</option>
          <option value=''>all</option>
          <option value='5'>5 posts</option>
          <option value='10'>10 posts</option>
          <option value='15'>15 posts</option>
        </select>
      </fieldset>
      <ul className='grid unlisted'>
        {/* {postsArr.slice(0, selectValue || 30).map((post) => ( */}
        {filteredPosts.map((post) => (
          <SinglePost key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
}

// kaip korteles

// kas nori idomiau https://dummyjson.com/posts
