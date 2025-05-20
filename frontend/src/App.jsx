import React from 'react';
import { UserProvider } from "./context/UserContext";
import UserForm from './components/UserForm';
import UserList from './components/UserList';

const App = () => {
  return (
    <UserProvider>
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">MERN CRUD App with Context</h1>
        <UserForm />
        <UserList />
      </div>
    </UserProvider>
  );
};

export default App;
