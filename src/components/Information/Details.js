import React, { Component } from 'react';
import './informationDetails.scss'
// 如果使用createBrowserHistory
import creatHistory from 'history/createBrowserHistory' 

const history = creatHistory();

// history.goBack();
//案例详情
class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        console.log(this.props.location.search)
    }
    goBack(){
        history.goBack();
    }
    render() { 
        return ( 
            <div className='informationDetails'>
                <div className="container">
                    <div className='goback' onClick={this.goBack.bind(this)}>&lt; AI吧资讯</div>
                    <div className="content">
                        <h1>AI吧收银与支付宝、微信平台签约</h1>
                        <div className="timeBox">
                            <i></i>
                            <span>2019-07-10 11:00:00</span>
                        </div>
                        <div className="line"></div>
                        <img src="" alt=""/>
                        <p> 现在的大多数人都是手机离不开手，几乎已经长成了许多人身体的一部分。出门什么都能不带，手机必须寸步不离。独自在外什么都不担心，就担心手机和充电宝全部耗尽。5G来袭，移动支付行业会有哪些动向？</p>
                        <img src="" alt=""/>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Details;