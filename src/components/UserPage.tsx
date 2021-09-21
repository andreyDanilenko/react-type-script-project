import React, { FC, useState, useEffect } from "react";
import { IUser } from "../types/types";
import List from "./List";
import UserItem from "./UserItem";
import axios from 'axios'

const UserPage: FC = () => {
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
    <List
      items={users}
      renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
    />
  )
}

export default UserPage;