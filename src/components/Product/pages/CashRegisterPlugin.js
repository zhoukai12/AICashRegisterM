import React, { Component } from 'react';
import Img1 from '@/assets/images/chanpin/chanpin4_2.png'
import Img2 from '@/assets/images/chanpin/chanpin4_3.png'
import Img3 from '@/assets/images/chanpin/chanpin4_4.png'
import Img4 from '@/assets/images/chanpin/chanpin4_5.png'
import './CashRegisterPlugin.scss'
// 收银插件
class CashRegisterPlugin extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='CashRegisterPluginWarpper'>
                <div className="model model1">
                    <h1>为已有收银系统定制<br/>移动支付方案</h1>
                    <h6>对接已有的收银系统，不改变现有操作流程，无需添加额外设备，交易速度快、操作简便。</h6>
                    <img src={Img1} className='img1' alt=""/>
                    <img src={Img2} className='img2' alt=""/>
                </div>
                <div className="model model2">
                    <h1>智能财务对账，远程管理店铺</h1>
                    <h6>详细统计各门店、收银员收款数据，自动记录订单号便于对账，并可根据财务要求定制对账单。</h6>
                    <img src={Img3} alt=""/>
                </div>
                <div className="model model3">
                    <h1>功能齐全，完全接管你的收银台</h1>
                    <h6>插件内置账单、交接班、小票打印，满足多种对账需求。</h6>
                    <img src={Img4} alt=""/>
                </div>
            </div>
         );
    }
}
 
export default CashRegisterPlugin;