import React, { Component } from 'react';
import './Culture.scss'
//公司文化
class Culture extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='CultureWarpper'>
                <div className="model model1">
                    <h1>公司文化</h1>
                    <h6>我们秉承“用户至上”的原则，将用户需求抱在首位，始终坚持不断创新，不断突破，保持产品第一，技术第一，服务第一的行业领先地位，全心全意做好产品的运营与用户的极限体验； </h6>
                    <h6>公司自成立以来，凭借一支经验丰富的行业精英团队和高效务实的管理营销核心，通过优质的资源渠道，便捷的推广组合方式，为各类型企业定制一系列切合，适用，专业的运营整体解决方案，短时间内，已为各个领域的中小型企业用户创造了丰富的价值，赢得业界的赞誉和客户的信任。</h6>
                </div>
                <div className="model model2">
                    <h1>公司宗旨</h1>
                    <h6>作为新兴的移动互联网公司，跃尚旨在赋予中小型企业改变营销、销售和经营的方式，并提升企业效率，为商家、品牌及其他企业提供基本的科技基础设施和营销平台，让其可借助新技术的力量和客户互动，以更具有效率的形式开展运营</h6>
                </div>
            </div>
         );
    }
}
 
export default Culture;