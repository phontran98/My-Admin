import React from 'react';
import {Switch , Route ,Redirect} from 'react-router-dom';
import Authenticated from './Authenticated';
import DashboardPage from './Pages/DashboardPage';
import LoginPage from './Pages/LoginPage';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' >
          <Authenticated>
            <DashboardPage/>
          </Authenticated>          
        </Route>
        <Route exact path='/login' component={LoginPage}/>
        <Route exact path='*' render={() => "404 Not found!"}/>
      </Switch>
    </>  
  )
}

export default App
