import React from 'react';

export default function TagsList({ list = [] }) {
  return (
    <>
      <h4>Tags</h4>
      <ul className='unlisted flex f-wrap'>
        {list.map((tag) => (
          <li key={tag} className='tag'>
            {tag}
          </li>
        ))}
      </ul>
    </>
  );
}
