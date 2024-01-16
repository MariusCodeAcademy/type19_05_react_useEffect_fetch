import Posts from './components/posts/Posts';
import UsersList from './components/users/UsersList';
import './styles/App.css';

export default function App() {
  console.log('App susikure');
  return (
    <div className='App container'>
      <h1>Hello, world!</h1>
      <hr />
      {false && <UsersList />}
      <Posts />
    </div>
  );
}
