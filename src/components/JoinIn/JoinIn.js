import React, { Component } from 'react';
import Swiper from 'swiper/js/swiper.js'
import Process from '@/components/Assembly/Process'
import 'swiper/css/swiper.min.css'
import '@/assets/css/JoinIn.scss'
class JoinIn extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currIndex: 0, //移动支付解决方案选项卡下标  默认为0 显示第一个,
            tabList: [
                {'title':'二维码',img:'',background:'red'},
                {'title':'刷脸支付',img:'',background:'blue'},
                {'title':'POS机',img:'',background:'green'},
                {'title':'收银插件',img:'',background:'yellow'},
            ]
         }
    }
    componentDidMount() {
        new Swiper('.swiper-container', {
            slidesPerView: 5,
            spaceBetween: 50,
            centeredSlides: true,
            loop: true,     //循环
            // autoplay: {      //自动播放，注意：直接给autoplay:true的话，在点击之后不能再自动播放了
            //     delay: 2500,
            //     disableOnInteraction: true,    //户操作swiper之后，是否禁止autoplay。默认为true：停止。
            // },
            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

    //移动支付解决方案选项卡
    tabSwitch(index){
        this.setState({
            currIndex: index
        })
    }

    render() { 
        return ( 
            <div className='JoinInWarpper'>
                <div className="title">
                    <div className="center">
                        <h1>让更多平凡人 实现创业梦</h1>
                        <h6>助你成为专业的移动支付服务商</h6>
                        <div className="button">立即加盟</div>
                    </div>
                </div>
                <div className="content">
                    <div className="model model1">
                        <div className="center">
                            <h1>选择我们的理由</h1>
                            <div className="swiperBox">
                                <div className="swiper-container">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide"></div>
                                        <div className="swiper-slide"></div>
                                        <div className="swiper-slide"></div>
                                        <div className="swiper-slide"></div>
                                        <div className="swiper-slide"></div>
                                        <div className="swiper-slide"></div>
                                    </div>
                                </div>
                                {/* <!-- 如果需要导航按钮 --> */}
                                <div className="swiper-button-prev"></div>
                                <div className="swiper-button-next"></div>
                            </div>
                        </div>
                    </div>
                    <div className="model model2">
                        <div className="center">
                            <h1>专业的移动支付解决方案</h1>
                            <div className="tabBox">
                                <ul className="list1">
                                    {this.state.tabList.map((item,index)=>{
                                        return (
                                            <li key={index} className={this.state.currIndex===index?'active':''} onClick={()=>this.tabSwitch(index)}>
                                                <img src="" alt=""/>
                                                <p>{item.title}</p>
                                            </li>
                                        )
                                    })}
                                </ul>
                                <ul className="list2">
                                    {this.state.tabList.map((item,index)=>{
                                        return (
                                            <li key={index} className={this.state.currIndex===index?'active':''} style={{background: `${item.background}`}}></li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="model model3">
                        <div className="center">
                                
                        </div>
                    </div>
                    <Process></Process>
                </div>
            </div>
         );
    }
}
 
export default JoinIn;