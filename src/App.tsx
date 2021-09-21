import React, { useEffect, useState } from 'react';
import Card, { CardVariant } from './components/Card';
import { ITodo, IUser } from './types/types';
import axios from 'axios';
import List from './components/List';
import UserItem from './components/UserItem';
import TodoItem from './components/TodoItem';

const App = () => {
  // Хук для фиксирования начального сотояния 
  const [users, setUsers] = useState<IUser[]>([])
  const [todos, setTodos] = useState<ITodo[]>([])
  // Хук для фиксирования событий страницы
  useEffect(() => {
    fetchUsers();
    fetchTodos();
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

  async function fetchTodos() {
    try {
      // Делаем запрос на сервер
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
      // данные помещаем в состояние
      setTodos(response.data)
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div >
      <Card onClick={(num) => console.log('click', num)} variant={CardVariant.outlined} height='200px' width='300px'>
        <button>Кнопка</button>
      </Card>
      <List
        items={users}
        renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
      />
      <List
        items={todos}
        renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
      />
    </div>
  );
}

export default App;
