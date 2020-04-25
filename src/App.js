import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from './components/Layout/Layout'
import './App.css';

const Homepage = lazy(() => import('./components/Homepage/Homepage'))

const App = () => {
  return (
      <BrowserRouter>
          <Layout>
              <Switch>
                  <Route
                      path="/"
                      exact
                      render={() => (
                          <Suspense fallback={<h1>Loading...</h1>}>
                              <Homepage />
                          </Suspense>
                      )}
                  />
              </Switch>
          </Layout>
      </BrowserRouter>
  )
}

export default App;
