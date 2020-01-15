import React, { Component } from 'react';
import Process from '@/components/Assembly/Process'
import '@/assets/css/Home.scss'
import homeImg1 from "@/assets/images/home/homeImg1.png"
import homeImg2 from "@/assets/images/home/homeImg2.png"
import homeImg3 from "@/assets/images/home/homeImg3.png"
import homeImg4 from "@/assets/images/home/homeImg4.png"
import SwiperInc from '@/components/Assembly/SwiperInc'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currQues: 0,
            questionList: [
                { title: '如何开通AI吧收银题', images: homeImg4, h1: '免费开通', h2: 'AI吧收银开通免费，提交注册信息后专人电话回访，快速为您接入移动支付。' },
                { title: '如何开通AI吧收银题', images: homeImg4, h1: '免费开通', h2: 'AI吧收银开通免费，提交注册信息后专人电话回访，快速为您接入移动支付。' },
            ]
        }
        this.TabToggle = this.TabToggle.bind(this);
    }
    TabToggle(index) {
        console.log(index)
        this.setState({
            currQues: index,
        })
    }

    componentDidMount() {
        /*this.$axios.apiGetHomeData().then((res) => {
            console.log(res)
        })*/
    }
    render() {
        return (
            <div className='homeWarpper'>
                <SwiperInc></SwiperInc>
                <div className="content">
                    <div className="model model1">
                        <h1>主流移动支付全能收</h1>
                        <h2>信用卡、花呗都能用</h2>
                        <h6>多种收款方式、多种收款设备可选。记账对账、语音播报、快速到账、账户保险，让您收款超级简单、方便。</h6>
                        <img src={homeImg1} alt="" />
                    </div>
                    <div className="model model2">
                        <h1>远程管账、管店、管人</h1>
                        <h2>随时随地掌握收款明细</h2>
                        <h6>分级账户系统详细统计各品牌、各分店、各收银员收款数据，清晰记录每一笔账目，并可根据财务要求定制对账单。</h6>
                        <img src={homeImg2} alt="" />
                    </div>
                    <div className="model model3">
                        <h1>营销一触即达</h1>
                        <h2>提升商业竞争能力</h2>
                        <h6>AI吧收银不定期推出各类营销活动，提高商户商业竞争能力。</h6>
                        <img src={homeImg3} alt="" />
                    </div>
                </div>
                <div className="QuestionsAnswers">
                    <h1>生意帮手AI吧收银 移动收款就用它</h1>
                    <div className="tabBox">
                        <div className="title">
                            <p>商户问题</p>
                        </div>
                        <div className="tabContent">
                            <ul className="left">
                                {this.state.questionList.map((item, index) => {
                                    return (
                                        <li key={index} onClick={() => this.TabToggle(index)} className={index === this.state.currQues ? 'active' : ''}>
                                            <p>{item.title}</p>
                                            <i></i>
                                        </li>
                                    )
                                })}
                            </ul>
                            <div className="right">
                                {this.state.questionList.map((item, index) => {
                                    return (
                                        <div key={index} className={`item ${index === this.state.currQues ? 'active' : ''}`}>
                                            <img src={item.images} alt="" />
                                            <h2>{item.h2}</h2>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <Process></Process>
            </div>
        );
    }
}

export default Home;