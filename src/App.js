import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import ScrollToTop from '@/nav/ScrollToTop'
import Header from '@/nav/Header'
import ErrorPage from '@/404/ErrorPage'
import Routers from '@/Routers'
import FooterBar from '@/nav/Footer'
import '@/assets/css/default.scss'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true
    }
  }
  componentDidMount() {
    console.log(process.env.NODE_ENV)
    console.log(process.env.REACT_APP_SECRET_API)
  }
  render() {
    const token = this.state.isLogin;
    return (
      <Router basename='/aibarm'>
        <ScrollToTop>
          <Header></Header>
          <Switch>
            {Routers.map((item, index) => {
              return <Route key={index} path={item.path} exact render={props =>
                (!item.auth ? (<item.component {...props} />) : (token ? <item.component {...props} /> : <Redirect to={{
                  pathname: '/login',
                  state: { from: props.location }
                }} />)
                )} />
            })}
            {/* // 所有错误路由跳转页面 */}
            <Route component={ErrorPage}></Route>
          </Switch>
          <FooterBar></FooterBar>
        </ScrollToTop>
      </Router>
    );
  }

}

export default App;
