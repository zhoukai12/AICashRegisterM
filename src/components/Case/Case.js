import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Img1 from '@/assets/images/anli/img1.png'
import Img2 from '@/assets/images/anli/img2.png'
import Img3 from '@/assets/images/anli/img3.png'
import '@/assets/css/Case.scss'
// 案例
class Case extends Component {
    constructor(props) {
        super(props);
        this.state = {
            informationList: [
                { title: '5G劲爆来袭，移动支付迎来创业投资新风口',img: Img1, content: '现在的大多数人都是手机离不开手，几乎已经长成了许多人身体的一部分。出门什么都能不带，手机必须寸步不离。独自在外什么都不担心，就担心手机和充电宝全部耗尽。5G来袭，移动支付行业会有哪些动向？', time: '2019-07-10 11:00:00' },
                { title: '5G劲爆来袭，移动支付迎来创业投资新风口',img: Img2, content: '现在的大多数人都是手机离不开手，几乎已经长成了许多人身体的一部分。出门什么都能不带，手机必须寸步不离。独自在外什么都不担心，就担心手机和充电宝全部耗尽。5G来袭，移动支付行业会有哪些动向？', time: '2019-07-10 11:00:00' },
                { title: '5G劲爆来袭，移动支付迎来创业投资新风口',img: Img3, content: '现在的大多数人都是手机离不开手，几乎已经长成了许多人身体的一部分。出门什么都能不带，手机必须寸步不离。独自在外什么都不担心，就担心手机和充电宝全部耗尽。5G来袭，移动支付行业会有哪些动向？', time: '2019-07-10 11:00:00' },
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
            <div className='caseWarpper'>
               <div className="jmBtn">立即加盟</div>
               <ul>
                    {
                        this.state.informationList.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link to={`/information/details?id=111`}>
                                        <img src={item.img} alt="" />
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
            </div>
         );
    }
}
 
export default Case;