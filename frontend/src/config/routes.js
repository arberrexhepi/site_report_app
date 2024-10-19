// Route definitions and paths for React-Router dom in Routes

import { Route, Routes } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import InputFormPage from '../pages/InputFormPage';

const routes = [
  { path: '/', component: HomePage },
  { path: '/input', component: InputFormPage }
];

export default routes;
