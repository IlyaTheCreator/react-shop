import React, { Suspense, lazy } from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom'

import Layout from './components/Layout/Layout'
import './App.css';

const HomePage = lazy(() => import('./components/HomePage/HomePage'))
const ShopHome = lazy(() => import('./components/ShopHome/ShopHome'))
const ShopPage = lazy(() => import('./components/ShopPage/ShopPage'))

const App = ()=> {
  return (
      <BrowserRouter>
          <Layout>
              <Switch>
                  <Route
                      path="/"
                      exact
                      render={() => (
                          <Suspense fallback={<h1>Loading...</h1>}>
                              <HomePage />
                          </Suspense>
                      )}
                  />
                  <Route
                      path="/shop-home"
                      exact
                      render={() => (
                          <Suspense fallback={<h1>Loading...</h1>}>
                              <ShopHome />
                          </Suspense>
                      )}
                  />
                  <Route
                      path="/shop/:sex"
                      render={() => (
                          <Suspense fallback={<h1>Loading...</h1>}>
                              <ShopPage />
                          </Suspense>
                      )}
                  />
              </Switch>
          </Layout>
      </BrowserRouter>
  )
}

export default App;
