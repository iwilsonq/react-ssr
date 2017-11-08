import App from './App';
import HomePage from './pages/HomePage';
import UserListPage, { loadData } from './pages/UserListPage';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...UserListPage,
        path: '/users',
        exact: true,
        loadData
      }
    ]
  }
];