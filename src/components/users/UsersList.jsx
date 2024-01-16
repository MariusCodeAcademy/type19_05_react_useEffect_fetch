import { useEffect, useState } from 'react';

const usersUrl = 'https://jsonplaceholder.typicode.com/users';
// const usersUrl = 'https://jsonplaceholder.typicode';

export default function UsersList() {
  console.log('1. UsersList susikure');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  // parisiusti duomenis is api
  // 1. sukurti state kur bus saugomi duomenys
  const [usersArr, setUsersArr] = useState([]);
  console.log('2. usersArr ===', usersArr);
  // 2. parsiusti duomenis tik uzsikrovus componentui (useEffect)
  // useEffect - paleis fn kai pasikeis priklausomybiu masyvas
  // useEffect(fn, [priklausomybiu masyvas])
  useEffect(() => {
    console.log('3. ivyko useEffect');
    // getUsers();
    setIsLoading(true);
    setTimeout(() => {
      getUsers();
    }, 3000);

    // fetch https://jsonplaceholder.typicode.com/users
    function getUsers() {
      // setIsLoading(true);
      fetch(usersUrl)
        .then((resp) => resp.json())
        .then((gotUserArr) => {
          // parsiusti ir iskonsolinti
          console.log('gotUserArr ===', gotUserArr);
          // atnaujina komponeta(paleidzia is naujo)
          // isimena kad usersArr atnaujintame komponente bus === gotUserArr
          // ideti juosi usersArr
          setUsersArr(gotUserArr);
          // countUsers(usersArr)
          console.log('usersArr po got ===', usersArr);
          // setUsersArr([]);
        })
        .catch((error) => {
          console.warn('ivyko klaida:', error);
          setError('Ivyko klaida, bandykite veliau');
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, []);
  // 3. atnaujinti state su gautais duomenimis

  console.log('4. pries jsx');

  const usersArrEmpty = usersArr.length === 0;
  const notLoading = isLoading === false;
  const noErrrors = !error;
  return (
    <div>
      <h2>Users</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nobis aliquid
        dolores voluptate totam provident ipsa, nesciunt itaque maxime numquam reiciendis aperiam
        quae labore, temporibus quasi ab. aspernatur mollitia numquam odio ea sit assumenda soluta
        expedita reiciendis rem distinctio accusamus similique perspiciatis, quibusdam facilis
        neque!
      </p>
      {error && <h3>{error}</h3>}
      {/* neradom useriu jei siuo metu nesiunciam ju ir ju nera */}
      {/* {usersArr.length === 0 && isLoading === false && !error && <h3>No users found</h3>} */}
      {usersArrEmpty && notLoading && noErrrors && <h3>No users found</h3>}
      {isLoading && <h1>Loading...</h1>}
      <ul>
        {usersArr.map((uObj) => (
          <li key={uObj.id}>
            <h3>{uObj.name}</h3>
            <p>{uObj.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
