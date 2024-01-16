// rfc

import TagsList from './TagsList';

export default function SinglePost({ post }) {
  return (
    <li className='card'>
      <p>postId: {post.id}</p>
      <h3>{post.title}</h3>
      <p>{post.body.slice(0, 85)}...</p>
      <p>Likes: {post.reactions}</p>
      <hr />
      <TagsList list={post.tags} />
    </li>
  );
}
