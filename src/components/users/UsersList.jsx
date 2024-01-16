import { useEffect, useState } from 'react';

export default function UsersList() {
  console.log('1. UsersList susikure');

  // parisiusti duomenis is api
  // 1. sukurti state kur bus saugomi duomenys
  const [usersArr, setUsersArr] = useState([]);
  console.log('2. usersArr ===', usersArr);
  // 2. parsiusti duomenis tik uzsikrovus componentui (useEffect)
  // useEffect - paleis fn kai pasikeis priklausomybiu masyvas
  // useEffect(fn, [priklausomybiu masyvas])
  useEffect(() => {
    console.log('3. ivyko useEffect');

    // fetch https://jsonplaceholder.typicode.com/users
    // parsiusti ir iskonsolinti
    // ideti juosi usersArr
  }, []);
  // 3. atnaujinti state su gautais duomenimis

  function getUsers() {}
  console.log('4. pries jsx');
  return (
    <div>
      <h2>Users</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nobis aliquid
        dolores voluptate totam provident ipsa, nesciunt itaque maxime numquam reiciendis aperiam
        quae labore, temporibus quasi ab. Doloribus sint id harum exercitationem aspernatur mollitia
        numquam odio ea sit assumenda soluta expedita reiciendis rem distinctio accusamus similique
        perspiciatis, quibusdam facilis neque!
      </p>
      <ul>
        <li>user1</li>
        <li>user2</li>
      </ul>
    </div>
  );
}
