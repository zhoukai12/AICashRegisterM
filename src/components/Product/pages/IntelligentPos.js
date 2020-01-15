import React, { Component } from 'react';
import Img1 from '@/assets/images/chanpin/chanpin5_2.png'
import Img2 from '@/assets/images/chanpin/chanpin5_3.png'
import Img3 from '@/assets/images/chanpin/chanpin5_4.png'
import Img4 from '@/assets/images/chanpin/chanpin5_6.png'
import './IntelligentPos.scss'
// 智能POS机
class IntelligentPos extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    // 聚合
    render() {
        return (
            <div className='IntelligentPosWarpper'>
                <div className="model model1">
                    <h1>5.5英寸IPS qHD，全高清阳光屏</h1>
                    <h6>分辨率960*540：清晰度提升1.5倍，兼容性最强。 
采用IPS技术：可视角度达 178°，让用户不正对屏幕也能看清楚。 5.5英寸屏幕：市场移动设备主流尺寸，体验好，适合单手把持。 电容式多点触屏 ：看图片可调节图片大小。</h6>
                    <img src={Img1} alt="" className='img1'/>
                    <img src={Img2} alt="" className='img2'/>
                </div>
                <div className="model model2">
                    <h1>全网络覆盖，自动切换<br/>随时随地接单，保障交易流畅</h1>
                    <h6>收款码台卡可放置于柜台，也可拿到顾客面前完成收款，收款码贴纸可张贴于店铺各处收款。</h6>
                    <img src={Img3} alt="" />
                </div>
                <div className="model model3">
                    <h1>全网络覆盖，自动切换 <br/>随时随地接单，保障交易流畅</h1>
                    <img src={Img4} alt="" />
                    <h6>Android 5.X系统4G全网通，Wi-Fi、蓝牙、GPS通讯大容量锂电池，续航能力强前后置双摄像头设计，支持扫码、拍照支持硬国密算法通过多项产品安全认证</h6>
                </div>
            </div>
        );
    }
}

export default IntelligentPos;