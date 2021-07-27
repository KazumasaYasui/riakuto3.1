import React from 'react';
import { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Link, useLocation } from 'react-router-dom';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Recruit from './components/pages/Recruit';
import User from './components/pages/User';
import NotFound from './components/pages/NotFound';
import HistoryButtons from './components/atoms/HistoryButtons';

const user = {
  id: 1,
  name: "サンプル太郎",
}

const App: FC = () => {
  const location = useLocation();

  // for debug
  console.log(location.pathname);
  console.log(location.search);
  console.log(location.key);

  return (
    <>
      <p>弊社のホームページへようこそ！</p>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home">
          <Home/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/recruit" children={<Recruit/>}/>
        <Route path="/contact">
          <Contact destAddress="contact@our-company.com"/>
        </Route>
        <Route path="/user/:userId([0-9]{1})">
          <User id={user.id} name={user.name}/>
        </Route>
        <Redirect from="/user/profile/:userId([0-9]{1})" to="/user/:userId([0-9]{1})"/>
        {/*<Redirect push to="/" />*/}
        <Route>
          <NotFound/>
        </Route>
      </Switch>

      <ul>
        <li>
          <Link to="/">トップページ</Link>
        </li>
        <li>
          <Link to="/about">紹介ページ</Link>
        </li>
        <li>
          <Link to="/recruit">採用ページ</Link>
        </li>
        <li>
          <Link to={{
            pathname: '/contact'
          }}>
            お問い合わせページ
          </Link>
        </li>
        <li>
          <Link replace to={{
            pathname: '/user/1'
          }}>
            ユーザーページ
          </Link>
        </li>
      </ul>

      <HistoryButtons/>
    </>
  );
};

export default App;
