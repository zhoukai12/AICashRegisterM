import React, { Component, Fragment } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '@/assets/css/Header.scss'
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            maskHide: false, //导航是否显示 false为否
            navList: [
                { name: '首页', link: "/", exact: true },
                { name: '产品中心', link: "/product" },
                { name: '伙伴加盟', link: "/joinin" },
                { name: 'AI吧资讯', link: "/information" },
                { name: '案例', link: "/case" },
                {
                    name: '关于我们', link: "/about", children: [
                        { title: '公司简介', link: '/about/introduce' },
                        { title: '公司文化', link: '/about/culture' },
                        { title: '联系我们', link: '/about/contact' }
                    ],
                    isShow: false
                },
            ]
        }
        this.showMask = this.showMask.bind(this)
        this.hideMask = this.hideMask.bind(this)
    }

    showMask() {
        this.setState({
            maskHide: true
        })
    }
    hideMask() {
        this.setState({
            maskHide: false
        })
    }

    toggleShow(index){
        let newArr=this.state.navList;
        newArr[index]['isShow']=!newArr[index]['isShow']
        //浅拷贝存在直接在setState外面修改值了
        this.setState({
            navList: newArr,
        })
    }
    
    render() {
        return (
            <div className='header'>
                <div className="headerTop">
                    <div className='logo'></div>
                    <div className='listSwitch' onClick={this.showMask}></div>
                </div>
                <div className="headerContent" style={{ display: `${this.state.maskHide ? 'block' : 'none'}` }}>
                    <div className="closeBtn" onClick={this.hideMask}>&times;</div>
                    <ul>
                        {
                            this.state.navList.map((item, index) => {
                                return (
                                    <li key={index}>
                                        {!item.children ?
                                            <p><Link to={item.link} onClick={this.hideMask}>{item.name}</Link></p>
                                            :
                                            <Fragment>
                                                <p onClick={()=>{this.toggleShow(index)}} className={`active ${item.isShow?'active1':'none'}`}>{item.name}</p>
                                                <div className="item" style={{display: `${item.isShow?'flex':'none'}`}}>
                                                    {item.children.map((itemm, indext) => {
                                                        return (
                                                            <Link key={indext} to={itemm.link} onClick={this.hideMask}>{itemm.title}</Link>
                                                        )
                                                    })}
                                                </div>
                                            </Fragment>
                                        }
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
export default Header;