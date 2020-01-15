import React, { Component } from 'react';
import './Introduce.scss'
//公司简介
class Introduce extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courseList: [
                { title: '飞跃期', text: '公司致力于为商家提供新零售整体解决方案，引进了全媒体平台广告，精准营销，全面营销，引爆流量革命。' },
                { title: '成熟期', text: '公司主抓技术核心，增加了软件开发、系统开发、APP开发、网页开发等相关项目，助力企业蓬勃发展。' },
                { title: '壮大期', text: '扩充精英团队，调整组织架构，成立了掌柜部、广告部、软件部、招商部、运营部、技术研发部，各项业务全面发展。' },
                { title: '深化期', text: '基依托微信平台的资源，新增公众号的开发，运营、维护、托管等业务，打造微信运营矩阵。' },
                { title: '转型期', text: '基于市场考量，作为腾讯官方广告服务商，增加了微信朋友圈广告，百度SEO广告推广服务，向全营销迈进。' },
                { title: '调研期', text: '引进微客掌柜项目，成立微客巴巴西北运营中心，并全面开展新零售业务。' },
                { title: '拓展期', text: '开发拓展渭南、榆林两地，进一步开拓采宝聚合支付市场。' },
                { title: '起步期', text: '公司成立，组织架构趋于完善、采宝聚合支付项目初见成效。' }
            ]
        }
    }
    render() {
        return (
            <div className='IntroduceWarpper'>
                <div className="model model1">
                    <h1>公司简介</h1>
                    <h2>提供一站式的移动支付解决方案</h2>
                    <h6>陕西跃尚信息科技有限公司成立于2017年，总部位于古都西安一 未央经济技术开发区的核心政务地段富尔顿国际中心，公司是家基于云端技术的移动互联网公司，专注为商户提供线下业务+互联网的服务，通过支付、会员、营销、广告、金融、进销存等一系列云端产品与服务，让商户的业务更加智慧，简单，高效。推动线下商户进入大数据服务商。</h6>
                </div>
                <div className="model model2">
                    <h1>发展历程</h1>
                    <div className="listBox">
                        <div className="arrow"></div>
                        <ul>
                            {
                                this.state.courseList.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <div className="section">
                                                <i></i>
                                                <span>{item.title}</span>
                                            </div>
                                            <div className="text">{item.text}</div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Introduce;