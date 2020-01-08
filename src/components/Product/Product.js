import React, { Component } from 'react';
import {Route,Switch,NavLink,Link} from 'react-router-dom';
import CashRegister from './pages/CashRegister'//AI吧收银app
import PaymentCode from './pages/PaymentCode' //收款码
import BrushPayment from './pages/BrushPayment' //刷脸支付
import IntelligentPos from './pages/IntelligentPos'   //智能POS机
import CashRegisterPlugin from './pages/CashRegisterPlugin'  //收银插件
import DeveloperDocumentation from './pages/DeveloperDocumentation'  //开发者文档
import ErrorPage from '@/404/ErrorPage'
import '@/assets/css/Product.scss'
class Product extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isPage: false
        }
    }
    componentDidMount(){
        console.log(this.props.match.params.id);
        console.log(!!this.props.match.params.id);
        if(!!this.props.match.params.id){
            this.setState({
                isPage: true
            })
        }
    }
    render() { 
        return ( 
            <div className='productWarpper'>
                <div className="titleTab">
                    <div className={`tabLi tabLi1 ${this.state.isPage?'':'active'}`}><Link to='/product'>AI吧收银app</Link></div>
                    <div className={`tabLi tabLi2 ${this.state.isPage?'active':''}`}>收款工具</div>
                    <ul className="list">
                        <li><NavLink to='/product/paymentcode' activeClassName="active">收款码</NavLink></li>
                        <li><NavLink to='/product/brushpayment' activeClassName="active">刷脸支付</NavLink></li>
                        <li><NavLink to='/product/intelligentpos' activeClassName="active">智能pos机</NavLink></li>
                        <li><NavLink to='/product/cashregisterplugin' activeClassName="active">收银插件</NavLink></li>
                        <li><NavLink to='/product/developerdocumentation' activeClassName="active">开发者文档</NavLink></li>
                    </ul>
                </div>
                <div className="content">
                    <Switch>
                        <Route path='/product' exact component={CashRegister}></Route>
                        <Route path='/product/paymentcode' component={PaymentCode}></Route>
                        <Route path='/product/brushpayment' component={BrushPayment}></Route>
                        <Route path='/product/intelligentpos' component={IntelligentPos}></Route>
                        <Route path='/product/cashregisterplugin' component={CashRegisterPlugin}></Route>
                        <Route path='/product/developerdocumentation' exact component={DeveloperDocumentation}></Route>
                        <Route path='/product/developerdocumentation/:id' component={DeveloperDocumentation}></Route>
                        <Route component={ErrorPage}></Route>
                    </Switch>
                </div>
            </div>
         );
    }
}
 
export default Product;