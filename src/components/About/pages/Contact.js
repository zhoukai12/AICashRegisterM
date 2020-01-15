import React, { Component } from 'react';
import BMap from 'BMap'
import './Contact.scss'
//联系我们
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        var map = new BMap.Map("addressMap"); // 创建Map实例
        var marker = new BMap.Marker(new BMap.Point(108.944923, 34.365786));  // 创建标注
        map.centerAndZoom(new BMap.Point(108.944923, 34.365786), 16); // 初始化地图,设置中心点坐标和地图级别
        map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
        map.setCurrentCity("西安"); // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
        map.addOverlay(marker);               // 将标注添加到地图中
    }
    render() {
        return (
            <div className='ContactWarpper'>
                <div className="model">
                    <h1>联系我们</h1>
                    <h2>陕西跃尚信息科技有限公司</h2>
                    <h6>电话：12033330000</h6>
                    <h6>地址：西安市未央区凤城十二路富尔顿国际中心</h6>
                    <div className="addressMap" id='addressMap'></div>
                </div>
            </div>
        );
    }
}

export default Contact;