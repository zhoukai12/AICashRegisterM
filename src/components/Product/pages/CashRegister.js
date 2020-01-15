import React, { Component } from 'react';
import Img1 from '@/assets/images/chanpin/chanpin3_2.png'
import Img2 from '@/assets/images/chanpin/chanpin3_3.png'
import Img3 from '@/assets/images/chanpin/chanpin3_4.png'
import Img4 from '@/assets/images/chanpin/chanpin3_5.png'
import './CashRegister.scss'
// AI吧收银app
class CashRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='CashRegister'>
                <div className="model model1">
                    <h1>账本+报表 记账+对账</h1>
                    <h6>系统提供日账单、周账单、月账单，<br/>营收情况一看便知，<br/>月度对账不再繁琐。</h6>
                    <img src={Img1} alt=""/>
                </div>
                <div className="model model2">
                    <h1>多种收款方式 到账语音提示</h1>
                    <h6>APP直扫收款或搭配收款工具收款。<br/>语音播报到账金额，自动确认。</h6>
                    <img src={Img2} alt=""/>
                </div>
                <div className="model model3">
                    <h1>门店架构设置<br/>更合理的账号分配</h1>
                    <h6>无论老板、店长还是员工<br/>都有专属账号，<br/>不同职位，不同权限。</h6>
                    <img src={Img3} alt=""/>
                </div>
                <div className="model model4">
                    <h1>告别手忙脚乱的对账时代</h1>
                    <h6>账单管理可下载打款明细和打款记录，<br/>对账更加清晰。</h6>
                    <img src={Img4} alt=""/>
                </div>
            </div>
         );
    }
}
 
export default CashRegister;