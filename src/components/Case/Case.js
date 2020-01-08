import React, { Component } from 'react';
import '@/assets/css/Case.scss'
// 案例
class Case extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='caseWarpper'>
                <div className="title">
                    <div className="center">
                        <h1>让更多平凡人 实现创业梦</h1>
                        <h6>助你成为专业的移动支付服务商</h6>
                        <div className="button">立即加盟</div>
                    </div>
                </div>
                <div className="container">
                    <ul className="list1">
                        <li className='active'>超级商户</li>
                        <li>优秀代理商</li>
                    </ul>
                    <ul className="list2">
                        <li>
                            <img src="" alt=""/>
                            <div className="textInfo">
                                <h1>连央视都出了《新闻联播》小程序，你还在等什么？</h1>
                                <p>从1978年1月1日起，《新闻联播》开播至今已有41年，每天都会为我们提供最新的新闻资讯以及社会热点，作为中国新闻栏目权威</p>
                            </div>
                        </li>
                        <li>
                            <img src="" alt=""/>
                            <div className="textInfo">
                                <h1>连央视都出了《新闻联播》小程序，你还在等什么？</h1>
                                <p>从1978年1月1日起，《新闻联播》开播至今已有41年，每天都会为我们提供最新的新闻资讯以及社会热点，作为中国新闻栏目权威</p>
                            </div>
                        </li>
                        <li>
                            <img src="" alt=""/>
                            <div className="textInfo">
                                <h1>连央视都出了《新闻联播》小程序，你还在等什么？</h1>
                                <p>从1978年1月1日起，《新闻联播》开播至今已有41年，每天都会为我们提供最新的新闻资讯以及社会热点，作为中国新闻栏目权威</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="pageFlipper">
                        <div className="prev"></div>
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <div className="next"></div>
                    </div>

            </div>
         );
    }
}
 
export default Case;