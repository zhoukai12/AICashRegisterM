import React, { Component } from 'react';
import './BrushPayment.scss';
// 刷脸支付
class BrushPayment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currIndex: 0,   //默认展示选项卡第一个
            dataList: [
                { title: '未来酒店', h2: '刷脸入住', text: '********', imgCard: 'red' },
                { title: '零售模拟', h2: '刷脸零售', text: '********', imgCard: 'blue' },
                { title: '自助点餐', h2: '刷脸点餐', text: '********', imgCard: 'green' },
            ]
        }
    }
    TabToggle(index){
        this.setState({
            currIndex: index
        })
    }
    render() {
        return (
            <div className='BrushPaymentWapper'>
                <div className="title">
                    <div className="center">
                        <h1>人工智能重磅黑科技<br />刷脸支付&nbsp;&nbsp;&nbsp;&nbsp;时代已来</h1>
                        <h6>全场景适用 | 降低经营成本 | 安全易操作</h6>
                    </div>
                </div>
                <div className="content">
                    <div className="model model1">
                        <div className="center">
                            <h1>刷脸黑科技，重新洗牌支付市场</h1>
                            <ul>
                                <li>
                                    <img src="" alt="" />
                                    <h2>使用简单快捷</h2>
                                    <p>设备自动感知<br />省去记忆/输入信息的麻烦</p>
                                </li>
                                <li>
                                    <img src="" alt="" />
                                    <h2>安全级别最高</h2>
                                    <p>图层人脸识别率99.9%<br />大大降低信息窃取风</p>
                                </li>
                                <li>
                                    <img src="" alt="" />
                                    <h2>吸引顾客消费</h2>
                                    <p>新潮的场景深受年轻顾客青睐<br />他们是未来消费主力</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="model model2">
                        <div className="center">
                            <h1>刷脸黑科技，重新洗牌支付市场</h1>
                            <div className="text">应用无人收银的智慧终端系统，付款时只需通过人脸特征识别的方<br />式即可轻松付款结账，省去手机支付过程，充分解放用户双手。</div>
                            <ul>
                                <li>
                                    <img src="" alt="" />
                                </li>
                                <li>
                                    <img src="" alt="" />
                                </li>
                                <li>
                                    <img src="" alt="" />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="model model3">
                        <div className="center">
                            <h1>高效便捷，提升用户购物体验</h1>
                            <div className="main">
                                <div className="left"><img src="" alt="" /></div>
                                <ul className="right">
                                    <li>
                                        <img src="" alt="" className="icon" />
                                        <div className="infoMation">
                                            <h2>无需手机，帮您完成“刷脸吃饭”的快捷操作</h2>
                                            <h6>底部指导操作或广告界面。</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="" alt="" className="icon" />
                                        <div className="infoMation">
                                            <h2>成本低，便利性提高，性价比一路飙升</h2>
                                            <h6>用户在线自助购物，降低收银员工成本，更能免费对接ERP商品库存系统，有效降低商家运营成本。</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="" alt="" className="icon" />
                                        <div className="infoMation">
                                            <h2>体验感强，加快支付方式产品迭代</h2>
                                            <h6>全新体验省去用户付款买单的排队时间，更能有效提升商家接待频次，实现真正的多快好省。</h6>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="model model4">
                        <div className="center">
                            <h1>小体积 低成本 更通用</h1>
                            <img src="" alt="" />
                        </div>
                    </div>
                    <div className="model model5">
                        <div className="imgBox" style={{background: `${this.state.dataList[this.state.currIndex]['imgCard']}`}}></div>
                        {/* {`background: ${this.state.dataList[this.state.currIndex][imgCard]}`} */}
                        <div className="center">
                            <ul className='list1'>
                                {
                                    this.state.dataList.map((item, index) => {
                                        return(
                                            <li key={index} onClick={() => this.TabToggle(index)} className={index === this.state.currIndex ? 'active' : ''}>{item.title}</li>
                                        )
                                    })
                                }
                            </ul>
                            <ul className="list2">
                                {
                                    this.state.dataList.map((item, index) => {
                                        return(
                                            <li key={index} className={index === this.state.currIndex ? 'active' : ''}>
                                                <h2>{item.h2}</h2>
                                                <h6>{item.text}</h6>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BrushPayment;