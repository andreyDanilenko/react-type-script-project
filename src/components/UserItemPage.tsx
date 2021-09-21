import React, { FC, useState, useEffect } from "react";
import { IUser } from "../types/types";
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

interface UserItemPageParams {
  id: string;
}

const UserItemPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null)
  const params = useParams<UserItemPageParams>()
  const history = useHistory();
  // Хук для фиксирования событий страницы
  useEffect(() => {
    fetchUser();

  }, [])
  // функция зхапроса данных с сервера 
  async function fetchUser() {
    try {
      // Делаем запрос на сервер
      const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
      // данные помещаем в состояние
      setUser(response.data)
    } catch (e) {
      alert(e);
    }
  }
  return (
    <div>
      <button onClick={() => history.push('/users')}>Back</button>
      <h1>Страница пользователя {user?.name}</h1>
      <div>
        {user?.email}
      </div>
      <div>
        {user?.address.city} {user?.address.street} {user?.address.zipcode}
      </div>
    </div>

  )
}

export default UserItemPage;