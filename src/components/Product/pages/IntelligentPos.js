import React, { Component } from 'react';
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
                <div className="title">

                </div>
                <div className="model model1">
                    <div className="center">
                        <div className="textBox">
                            <h1>5.5英寸IPS qHD，全高清阳光屏</h1>
                            <h6>分辨率960*540：清晰度提升1.5倍，兼容性最强。采用IPS技术：可视角度达 178°，让用户不正对屏幕也能看清楚。5.5英寸屏幕：市场移动设备主流尺寸，体验好，适合单手把持。电容式多点触屏 ：看图片可调节图片大小。</h6>
                            <img src="" alt="" />
                        </div>
                        <img src="" alt="" />
                    </div>
                </div>
                <div className="model model2">
                    <div className="center">
                        <img src="" alt="" />
                        <div className="textBox">
                            <h1>全网络覆盖，自动切换 <br />随时随地接单，保障交易流畅</h1>
                            <h6>4G全网通，Wi-Fi、蓝牙、GPS通讯全支持。</h6>
                        </div>
                    </div>
                </div>
                <div className="model model3">
                    <div className="center">
                        <h1>高效便捷，提升用户购物体验</h1>
                        <img src="" alt=""/>
                        <p>Android 5.X系统4G全网通，Wi-Fi、蓝牙、GPS通讯大容量锂电池，续航能力强前后置双摄像头设计，<br/>支持扫码、拍照支持硬国密算法通过多项产品安全认证</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default IntelligentPos;