import React, { Component } from 'react';
import Swiper from 'swiper/js/swiper.js'
import Process from '@/components/Assembly/Process'
import icon1 from '@/assets/images/jiameng/icon1.png'
import icon2 from '@/assets/images/jiameng/icon2.png'
import icon3 from '@/assets/images/jiameng/icon3.png'
import icon4 from '@/assets/images/jiameng/icon4.png'
import icon5 from '@/assets/images/jiameng/icon5.png'
import li1 from '@/assets/images/jiameng/li1.png'
import li2 from '@/assets/images/jiameng/li2.png'
import li3 from '@/assets/images/jiameng/li3.png'
import li4 from '@/assets/images/jiameng/li4.png'
import 'swiper/css/swiper.min.css'
import '@/assets/css/JoinIn.scss'
class JoinIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currIndex: 0, //移动支付解决方案选项卡下标  默认为0 显示第一个,
            tabList: [
                { 'title': '收银插件', img: li1, text: ['支持传统电脑、传统收银机触屏设备、无鼠标设备等各类设备。', '适用场景：大型商超、餐饮饭店等。'] },
                { 'title': '二维码', img: li2, text: ['支持传统电脑、传统收银机触屏设备、无鼠标设备等各类设备。','适用场景：大型商超、餐饮饭店等。'] },
                { 'title': 'POS机', img: li3, text: ['收款速度仅需0.99秒，全场景适用，支持客户无网络支付及语音播报等功能。','适用场景：超市、酒店、餐饮等场所。'] },
                { 'title': '刷脸支付', img: li4, text: ['应用无人收银的智慧终端系统，付款时只需通过人脸特征识别的方式即可轻松付款结账，省去手机支付过程，充分解放用户双手。']},
            ]
        }
    }
    componentDidMount() {
        new Swiper('.swiper-container', {
            loop: true,     //循环
            // slidesPerView: 3,
            centeredSlides: true,
            slidesPerView: 'auto',
            // observer: true,//修改swiper自己或子元素时，自动初始化swiper
            // observeParents: true,//修改swiper的父元素时，自动初始化swiper
            // spaceBetween: 10,
            // autoplay: {      //自动播放，注意：直接给autoplay:true的话，在点击之后不能再自动播放了
            //     delay: 2500,
            //     disableOnInteraction: true,    //户操作swiper之后，是否禁止autoplay。默认为true：停止。
            // },
        });
    }

    //移动支付解决方案选项卡
    tabSwitch(index) {
        this.setState({
            currIndex: index
        })
    }

    render() {
        return (
            <div className='JoinInWarpper'>
                <div className="jmBtn">立即加盟</div>
                <div className="model model1">
                    <h1></h1>
                    <div className="swiperBox">
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="contentBox">
                                        <img src={icon1} alt="" />
                                        <h2>生意贷提现理财 金融服务返佣及时</h2>
                                        <h3>增值收益</h3>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="contentBox">
                                        <img src={icon2} alt="" />
                                        <h2>生意贷提现理财 金融服务返佣及时</h2>
                                        <h3>广告服务</h3>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="contentBox">
                                        <img src={icon3} alt="" />
                                        <h2>生意贷提现理财 金融服务返佣及时</h2>
                                        <h3>分润稳定</h3>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="contentBox">
                                        <img src={icon4} alt="" />
                                        <h2>生意贷提现理财 金融服务返佣及时</h2>
                                        <h3>持续补贴</h3>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="contentBox">
                                        <img src={icon5} alt="" />
                                        <h2>生意贷提现理财 金融服务返佣及时</h2>
                                        <h3>硬件利润</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
                <div className="model model2">
                    <h1>专业的移动支付解决方案</h1>
                    <img src={this.state.tabList[this.state.currIndex]['img']} alt="" />
                    <div className="textBox">
                        <h2>{this.state.tabList[this.state.currIndex]['title']}</h2>
                        {
                            this.state.tabList[this.state.currIndex]['text'].map((item, index) => {
                                return (
                                    <h6 key={index}>{item}</h6>
                                )
                            })
                        }
                    </div>
                    <ul>
                        {
                            this.state.tabList.map((item, index) => {
                                return (
                                    <li key={index} className={this.state.currIndex === index ? 'active' : ''} onClick={() => this.tabSwitch(index)}>{item.title}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                <Process></Process>
            </div>
        );
    }
}

export default JoinIn;