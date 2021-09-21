import React, { FC, useEffect, useState } from "react";
import { ITodo } from "../types/types";
import List from "./List";
import TodoItem from "./TodoItem";
import axios from 'axios';


const TodosPage: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])
  // Хук для фиксирования событий страницы
  useEffect(() => {
    fetchTodos();
  }, [])

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
    <List
      items={todos}
      renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
    />
  )
}

export default TodosPage;