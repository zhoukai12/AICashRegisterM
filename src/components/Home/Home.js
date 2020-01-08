import React, { Component } from 'react';
import Swiper from 'swiper/js/swiper.js'
import Process from '@/components/Assembly/Process'
import 'swiper/css/swiper.min.css'
import '@/assets/css/Home.scss'
import Img from "@/assets/images/home/swiper1.png"
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currQues: 0,
            questionList: [
                { title: '如何开通AI吧收银题', images: '', h1: '免费开通', h2: 'AI吧收银开通免费，提交注册信息后专人电话回访，快速为您接入移动支付。' },
                { title: '如何开通AI吧收银题', images: '', h1: '免费开通', h2: 'AI吧收银开通免费，提交注册信息后专人电话回访，快速为您接入移动支付。' },
                { title: '如何开通AI吧收银题', images: '', h1: '免费开通', h2: 'AI吧收银开通免费，提交注册信息后专人电话回访，快速为您接入移动支付。' },
                { title: '如何开通AI吧收银题', images: '', h1: '免费开通', h2: 'AI吧收银开通免费，提交注册信息后专人电话回访，快速为您接入移动支付。' },
                { title: '如何开通AI吧收银题', images: '', h1: '免费开通', h2: 'AI吧收银开通免费，提交注册信息后专人电话回访，快速为您接入移动支付。' }
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
        new Swiper('.swiper-container', {
            loop: true,     //循环
            autoplay: {      //自动播放，注意：直接给autoplay:true的话，在点击之后不能再自动播放了
                delay: 2500,
                disableOnInteraction: true,    //户操作swiper之后，是否禁止autoplay。默认为true：停止。
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,    // 允许点击跳转
            },
            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
        this.$axios.apiGetHomeData().then((res)=>{
            console.log(res)
        })
    }
    render() {
        return (
            <div className='homeWarpper'>
                <div className="swiperBox">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide"><img src={Img} alt='' /></div>
                            <div className="swiper-slide"><img src={Img} alt='' /></div>
                            <div className="swiper-slide"><img src={Img} alt='' /></div>
                            <div className="swiper-slide"><img src={Img} alt='' /></div>
                            <div className="swiper-slide"><img src={Img} alt='' /></div>
                        </div>
                        <div className='swiper-pagination'></div>
                        {/* <!-- 如果需要导航按钮 --> */}
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
    
                    </div>
                </div>
                <div className="content">
                    <div className="model model1">
                        <div className="center">
                            <div className="textBox">
                                <h1>主流移动支付全能收</h1>
                                <h2>信用卡、花呗都能用</h2>
                                <p>多种收款方式、多种收款设备可选。记账对账、语音播报、快速到账、账户保险，让您收款超级简单、方便。</p>
                            </div>
                            <img src="" alt="" />
                        </div>
                    </div>
                    <div className="model model2">
                        <div className="center">
                            <img src="" alt="" />
                            <div className="textBox">
                                <h1>远程管账、管店、管人</h1>
                                <h2>随时随地掌握收款明细</h2>
                                <p>分级账户系统详细统计各品牌、各分店、各收银员收款数据，清晰记录每一笔账目，并可根据财务要求定制对账单。</p>
                            </div>
                        </div>
                    </div>
                    <div className="model model3">
                        <div className="center">
                            <div className="textBox">
                                <h1>营销一触即达</h1>
                                <h2>提升商业竞争能力</h2>
                                <p>AI吧收银不定期推出各类营销活动，提高商户商业竞争能力。</p>
                            </div>
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
                <div className="QuestionsAnswers">
                    <div className="center">
                        <h1>生意帮手AI吧收银 移动收款就用它</h1>
                        <div className="tabBox">
                            <div className="title">
                                <p>商户问题</p>
                                <p>问题解答</p>
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
                                                <h1>{item.h1}</h1>
                                                <h2>{item.h2}</h2>
                                                <img src={item.image} alt="" />
                                            </div>
                                        )
                                    })}
                                </div>
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