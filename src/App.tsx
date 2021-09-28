import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { GlobalStyles } from './global';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Subscription = lazy(() => import('./pages/Subscription'));

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <Suspense fallback={''}>
          <Switch>
            <Route  exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/subscription" component={Subscription} />
          </Switch>
        </Suspense>
      </div>
    </>
  );
}

export default App;
