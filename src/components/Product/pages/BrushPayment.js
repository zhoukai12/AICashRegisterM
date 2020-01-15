import React, { Component } from 'react';
import Img1 from '@/assets/images/chanpin/chanpin6_2.png'
import Img2 from '@/assets/images/chanpin/chanpin6_3.png'
import Img3 from '@/assets/images/chanpin/chanpin6_4.png'
import Img5 from '@/assets/images/chanpin/chanpin6_5.png'
import swiper1 from '@/assets/images/chanpin/chanpin6_swiper1.png'
import swiper2 from '@/assets/images/chanpin/chanpin6_swiper2.png'
import swiper3 from '@/assets/images/chanpin/chanpin6_swiper3.png'
import swiper4 from '@/assets/images/chanpin/chanpin6_swiper4.png'
import swiper2_1 from '@/assets/images/chanpin/chanpin6_swiper2_1.png'
import swiper2_2 from '@/assets/images/chanpin/chanpin6_swiper2_2.png'
import swiper2_3 from '@/assets/images/chanpin/chanpin6_swiper2_3.png'
import swiper2_4 from '@/assets/images/chanpin/chanpin6_swiper2_4.png'
import swiper2_5 from '@/assets/images/chanpin/chanpin6_swiper2_5.png'
import tab1 from '@/assets/images/chanpin/tab1.png'
import tab2 from '@/assets/images/chanpin/tab2.png'
import tab3 from '@/assets/images/chanpin/tab3.png'
import Swiper from 'swiper/js/swiper.js'
import 'swiper/css/swiper.min.css'
import './BrushPayment.scss';
// 刷脸支付
class BrushPayment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currIndex: 0,   //默认展示选项卡第一个
            dataList: [
                { title: '未来酒店', h2: '刷脸入住', text: '住客进入酒店后可以直接使用酒店自助终端机完成刷脸实名验证、房费支付以及获取房卡的整个入住流程，免去前台排队办理入住的琐碎流程，酒店入住更省心，住店体验更美好', imgCard: tab1 },
                { title: '零售模拟', h2: '刷脸零售', text: '解锁刷脸支付<br/>开启自助购物新体验<br/>通过消费者自助购物自助扫码付款，实现快速结账，减少排队时间。', imgCard: tab2 },
                { title: '自助点餐', h2: '刷脸点餐', text: '通过自助点餐机，解决集中时间就餐问题。<br/>同时打通食堂从预订-制作-配餐-分发等各环节，解放收银员。', imgCard: tab3 },
            ]
        }
    }
    TabToggle(index) {
        this.setState({
            currIndex: index
        })
    }
    componentDidMount() {
        let swiper1 = new Swiper('.swiperBox1 .swiper-container', {
            loop: true,
            slidesPerView: 'auto',
            spaceBetween: 0,
            centeredSlides: true,
        });
        let swiper2 = new Swiper('.swiperBox2 .swiper-container', {
            effect: 'fade',
            pagination: {
                el: '.swiperBox2 .swiper-pagination',
                clickable: true,
            },
        });
    }
    render() {
        return (
            <div className='BrushPaymentWapper'>
                <div className="model model1">
                    <h1>刷脸黑科技，重新洗牌支付市场</h1>
                    <ul>
                        <li>
                            <img src={Img1} alt="" />
                            <h2>使用简单快捷</h2>
                            <h3>设备自动感知<br />省去记忆/输入信息的麻烦</h3>
                        </li>
                        <li>
                            <img src={Img2} alt="" />
                            <h2>安全级别最高</h2>
                            <h3>图层人脸识别率<br />99.9%大大降低信息窃取风</h3>
                        </li>
                        <li>
                            <img src={Img3} alt="" />
                            <h2>吸引顾客消费</h2>
                            <h3>新潮的场景深受年轻顾客青睐，他们是消费主力</h3>
                        </li>
                    </ul>
                </div>
                <div className="model model2">
                    <h1>什么是刷脸支付</h1>
                    <h6>应用无人收银的智慧终端系统，付款时只需通过人脸特征识别的方式即可轻松付款结账，省去手机支付过程，充分解放用户双手。</h6>
                    <div className="swiperBox1">
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide"><img src={swiper1} alt=""/></div>
                                <div className="swiper-slide"><img src={swiper2} alt=""/></div>
                                <div className="swiper-slide"><img src={swiper3} alt=""/></div>
                                <div className="swiper-slide"><img src={swiper4} alt=""/></div>
                            </div>
                            {/* <div class="swiper-pagination"></div> */}
                        </div>
                    </div>
                </div>
                <div className="model model3">
                    <h1>高效便捷，提升用户购物体验</h1>
                    <img src={Img5} alt="" />
                </div>
                <div className="model model4">
                    <h1>小体积 低成本 更通用</h1>
                    <div className="swiperBox2">
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide"><img src={swiper2_1} alt=""/></div>
                                <div className="swiper-slide"><img src={swiper2_2} alt=""/></div>
                                <div className="swiper-slide"><img src={swiper2_3} alt=""/></div>
                                <div className="swiper-slide"><img src={swiper2_4} alt=""/></div>
                                <div className="swiper-slide"><img src={swiper2_5} alt=""/></div>
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
                <div className="tabBox" style={{background: `url(${this.state.dataList[this.state.currIndex]['imgCard']}) no-repeat top center/100%`}}>
                    <ul>
                        {
                            this.state.dataList.map((item, index) => {
                                return (
                                    <li key={index} className={this.state.currIndex===index?'active':''} onClick={()=>this.TabToggle(index)}>{item.title}</li>
                                )
                            })
                        }
                    </ul>
                    <h1>{this.state.dataList[this.state.currIndex]['h2']}</h1>
                    <h6 dangerouslySetInnerHTML={{__html:this.state.dataList[this.state.currIndex]['text']}}></h6>
                </div>
            </div>
        );
    }
}

export default BrushPayment;