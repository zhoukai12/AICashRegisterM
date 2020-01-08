import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import '@/assets/css/Information.scss'
//AI吧资讯
class Information extends Component {
    constructor(props) {
        super(props);
        this.state = {
            informationList: [
                { title: '5G劲爆来袭，移动支付迎来创业投资新风口', content: '现在的大多数人都是手机离不开手，几乎已经长成了许多人身体的一部分。出门什么都能不带，手机必须寸步不离。独自在外什么都不担心，就担心手机和充电宝全部耗尽。5G来袭，移动支付行业会有哪些动向？', time: '2019-07-10 11:00:00' },
            ]
        }
        this.details = this.details.bind(this);
    }
    details(id) {
        this.props.history.push({
            pathname: '/information/details',
            query: {
                id
            }
        })
    }
    render() {
        return (
            <div className='informationWarpper'>
                <div className="container">
                    <ul>
                        {
                            this.state.informationList.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={`/information/details?id=111`}>
                                            <img src="" alt="" />
                                            <div className="userInfo">
                                                <h1>{item.title}</h1>
                                                <h6>{item.content}</h6>
                                                <div className="timeBox">
                                                    <i></i>
                                                    <span>{item.time}</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="pageFlipper">
                        <div className="prev"></div>
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <div className="next"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Information;