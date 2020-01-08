import React, { Component } from 'react';
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
                <div className="title"></div>
                <div className="model model1">
                    <div className="center">
                        <h1>轻松改造传统收银台</h1>
                        <h6>◎ 轻松对账   ◎ 语音播报   ◎ 实时查看门店交易</h6>
                        <img src="" alt=""/>
                    </div>
                </div>
                <div className="model model2">
                    <div className="center">
                        <img src="" alt=""/>
                        <div className="textInfo">
                            <h1>为已有收银系统定制<br/>移动支付方案</h1>
                            <h6>对接已有的收银系统，不改变现有操作流程，<br/>无需添加额外设备，交易速度快、操作简便。</h6>
                            <div className="iconBox">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="model model3">
                    <div className="center">
                        <h1>智能财务对账，远程管理店铺</h1>
                        <h6>详细统计各门店、收银员收款数据，自动记录订单号便于对账，<br/>并可根据财务要求定制对账单。</h6>
                        <img src="" alt=""/>
                    </div>
                </div>
                <div className="model model4">
                    <div className="center">
                        <h1>功能齐全，完全接管你的收银台</h1>
                        <h6>插件内置账单、交接班、小票打印，满足多种对账需求</h6>
                        <img src="" alt=""/>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default CashRegisterPlugin;