import React from 'react';
import './App.css';
import { RequestList } from './components/request-list/RequestList';
import { Header } from './components/heaeder/Header';

export const App = () => (
  <>
    <Header />
    <RequestList />
  </>
);
