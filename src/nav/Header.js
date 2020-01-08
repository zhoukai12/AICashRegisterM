import React, { Component } from 'react';
import {NavLink,Link} from 'react-router-dom';
import '@/assets/css/Header.scss'
 class Header extends Component{
     constructor(props){
         super(props);
         this.state={
             navList:[
                 {name: '首页',link: "/",exact: true},
                 {name: '产品中心',link: "/product"},
                 {name: '伙伴加盟',link: "/joinin"},
                 {name: 'AI吧资讯',link: "/information"},
                 {name: '案例',link: "/case"},
                 {name: '关于我们',link: "/about"},
             ]
         }
     }
     render(){
         const navList=this.state.navList
         return(
             <div className='header'>
                <div className="headerTop">
                    <p className="left"><Link  to='/'>商户登陆</Link><Link to='/'>代理商登陆</Link></p>
                    <p className="right"><span>加盟代理：0000-57876587</span><span>商家服务：0000-57876587</span></p>
                </div>
                <div className="headerContent">
                    <span className="logo"><Link to='/'>Logo位置</Link></span>
                    <div className="navList">
                        <ul className="list">
                            {navList.map((item,index)=>{
                                return (
                                    <li key={index}>
                                        <NavLink to={item.link} exact={item.exact} activeClassName="navListActive">
                                            <p>{item.name}</p>
                                            <i></i>
                                        </NavLink>
                                    </li>
                                )
                            })}
                        </ul>
                        <span className="JoinButton">加盟</span>
                    </div>
                    
                </div>
             </div>
         )
     }
 }
 export default Header;