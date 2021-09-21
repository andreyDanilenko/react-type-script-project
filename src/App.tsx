import React, { useEffect, useState } from 'react';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { IUser } from './types/types';
import axios from 'axios';

const App = () => {
  // Хук для фиксирования начального сотояния 
  const [users, setUsers] = useState<IUser[]>([])
  // Хук для фиксирования событий страницы
  useEffect(() => {
    fetchUsers();
  }, [])
  // функция зхапроса данных с сервера 
  async function fetchUsers() {
    try {
      // Делаем запрос на сервер
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      // данные помещаем в состояние
      setUsers(response.data)
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div >
      <Card onClick={(num) => console.log('click', num)} variant={CardVariant.outlined} height='200px' width='300px'>
        <button>Кнопка</button>
      </Card>
      <UserList users={users} />
    </div>
  );
}

export default App;
