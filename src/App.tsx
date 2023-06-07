import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './routes/home'
import Login from './routes/login'
import Conversation from './routes/conversation'
import User from './routes/user'
import ErrorPage from './routes/error-page'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "conversation/:conversationId",
    element: <Conversation />,
  },
  {
    path: "user/:userId",
    element: <User />,
  },
]);
const App: React.FC = () => {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
