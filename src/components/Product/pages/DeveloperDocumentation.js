import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import Text from './Text'
import "./DeveloperDocumentation.scss"
// 开发者文档
class DeveloperDocumentation extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='DeveloperDocumentationWarpper'>
                <div className="container">
                    <ul className="list1">
                        <li><NavLink to='/product/developerdocumentation' exact activeClassName='active'>介绍</NavLink></li>
                        <li><NavLink to='/product/developerdocumentation/1' activeClassName='active'>对接前准备</NavLink></li>
                        <li><NavLink to='/product/developerdocumentation/2' activeClassName='active'>对接过程常见问题</NavLink></li>
                        <li><NavLink to='/product/developerdocumentation/3' activeClassName='active'>Web Api接入指南</NavLink></li>
                        <li><NavLink to='/product/developerdocumentation/4' activeClassName='active'>对接流程文档</NavLink></li>
                        <li><NavLink to='/product/developerdocumentation/5' activeClassName='active'>签名机制</NavLink></li>
                        <li><NavLink to='/product/developerdocumentation/6' activeClassName='active'>商户入网OpenAPI</NavLink></li>
                        <li><NavLink to='/product/developerdocumentation/7' activeClassName='active'>商户入网接口</NavLink></li>
                    </ul>
                    <div className="right">
                        <Switch>
                            <Route path='/product/developerdocumentation' exact component={Text}></Route>
                            <Route path='/product/developerdocumentation/:id' component={Text}></Route>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default DeveloperDocumentation;