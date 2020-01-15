import React, { Component } from 'react';
import '@/assets/css/About.scss'
import ErrorPage from '@/404/ErrorPage'
import Introduce from './pages/Introduce' //公司简介
import Culture from './pages/Culture'  //公司文化
import Contact from './pages/Contact'  //联系我们
import { Redirect ,Route,Switch} from 'react-router-dom';
// 关于我们
class About extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    componentDidMount() {

    }
    render() {
        return (
            <div className='aboutWarpper'>
                <Switch>
                    <Route path='/about' exact render={props=>
                         (
                            <Redirect to='/about/introduce'/>
                        )
                    }/>
                    <Route path='/about/introduce' component={Introduce}></Route>
                    <Route path='/about/culture' component={Culture}></Route>
                    <Route path='/about/contact' component={Contact}></Route>
                    <Route component={ErrorPage}></Route>
                </Switch>
            </div>
        );
    }
}

export default About;