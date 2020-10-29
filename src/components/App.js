import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import Header from './Header/Header';


const Home = lazy(() => import('../view/home'));
const Users = lazy(() => import('../view/users/users'));
const Drivers = lazy(() => import('../view/drivers/drivers'));
const Login = lazy(() => import('../view/login'));


function App() {
  
  return (
    <>
      <Header />
      <Suspense fallback={<h3>Загружаем...</h3>}>
        <Switch>
          <Route path="/home" component={Home} />

          <PrivateRoute path="/users" component={Users} />
          <PrivateRoute path="/drivers" component={Drivers} />


          <PublicRoute restricted path="/login" component={Login} />
         
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
