import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import UserPage from './components/UserPage';
import TodosPage from './components/TodosPage';
import UserItemPage from './components/UserItemPage';
import TodosItemPage from './components/TodosItemPage';

const App = () => {
  return (
    <BrowserRouter>
      <div >
        <div>
          <NavLink to="/users">Пользователи</NavLink>
          <NavLink to="/todos">Список дел</NavLink>
        </div>
        <Route path={'/users'} exact>
          <UserPage />
        </Route>
        <Route path={'/todos'} exact>
          <TodosPage />
        </Route>
        <Route path={'/users/:id'}>
          <UserItemPage />
        </Route>
        <Route path={'/todos/:id'}>
          <TodosItemPage />
        </Route>
      </div>
    </BrowserRouter >

  );
}

export default App;
