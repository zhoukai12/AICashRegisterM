import React, { Component, Fragment } from 'react';
import Swiper from 'swiper/js/swiper.js'
import 'swiper/css/swiper.min.css'
import Img1 from "@/assets/images/home/home_swiper1.png"
import Img2 from "@/assets/images/home/home_swiper2.png"
import Img3 from "@/assets/images/home/home_swiper3.png"
import Img4 from "@/assets/images/home/home_swiper4.png"
import Img6 from "@/assets/images/home/home_swiper5.png"
import Img5 from "@/assets/images/home/home_swiper6.png"
import './SwiperInc.scss';
class SwiperInc extends Component {
    constructor(props) {
        super(props);
        this.state = {}
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
        });
    }
    render() {
        return (
            <div className="swiperBox">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide"><img src={Img1} alt='' /></div>
                        <div className="swiper-slide"><img src={Img2} alt='' /></div>
                        <div className="swiper-slide"><img src={Img3} alt='' /></div>
                        <div className="swiper-slide"><img src={Img4} alt='' /></div>
                        <div className="swiper-slide"><img src={Img5} alt='' /></div>
                        <div className="swiper-slide"><img src={Img6} alt='' /></div>
                    </div>
                    <div className='swiper-pagination'></div>
                </div>
            </div>
        );
    }
}

export default SwiperInc;