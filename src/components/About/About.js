import React, { Component } from 'react';
import BMap from 'BMap'
import '@/assets/css/About.scss'
// 关于我们
class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currIndex: 1,
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
        this.tabChange=this.tabChange.bind(this);
    }

    tabChange(currIndex){
        if(currIndex==3){
            setTimeout(()=>{
                var map = new BMap.Map("addressMap"); // 创建Map实例
                var marker = new BMap.Marker(new BMap.Point(108.944923,34.365786));  // 创建标注
                map.centerAndZoom(new BMap.Point(108.944923,34.365786), 16); // 初始化地图,设置中心点坐标和地图级别
                map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
                map.setCurrentCity("西安"); // 设置地图显示的城市 此项是必须设置的
                map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
                map.addOverlay(marker);               // 将标注添加到地图中
            },0)
        }
        this.setState({
            currIndex
        })
    }

    componentDidMount() {

    }
    render() {
        return (
            <div className='aboutWarpper'>
                <div className="title">
                    <div className="center">
                        <h1>万千商家信赖，贴心生意助手</h1>
                    </div>
                </div>
                <div className="container">
                    <div className="left">
                        {/* 公司简介 */}
                        <div className="briefIntroductionBox" style={{display: `${this.state.currIndex===1?'block':'none'}`}}>
                            <div className="model">
                                <h1>公司简介</h1>
                                <h2>提供一站式的移动支付解决方案</h2>
                                <p>陕西跃尚信息科技有限公司成立于2017年，总部位于古都西安一 未央经济技术开发区的核心政务地段富尔顿国际中心，公司是家基于云端技术的移动互联网公司，专注为商户提供线下业务+互联网的服务，通过支付、会员、营销、广告、金融、进销存等一系列云端产品与服务，让商户的业务更加智慧，简单，高效。推动线下商户进入大数据服务商。</p>
                            </div>
                            <div className="courseBox">
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
                        {/* 公司文化 */}
                        <div className="cultureBox" style={{display: `${this.state.currIndex===2?'block':'none'}`}}>
                            <div className="model model1">
                                <h1>公司文化</h1>
                                <p>我们秉承“用户至上”的原则，将用户需求抱在首位，始终坚持不断创新，不断突破，保持产品第一，技术第一，服务第一的行业领先地位，全心全意做好产品的运营与用户的极限体验； </p>
                                <p>公司自成立以来，凭借一支经验丰富的行业精英团队和高效务实的管理营销核心，通过优质的资源渠道，便捷的推广组合方式，为各类型企业定制一系列切合，适用，专业的运营整体解决方案，短时间内，已为各个领域的中小型企业用户创造了丰富的价值，赢得业界的赞誉和客户的信任，</p>
                            </div>
                            <div className="model model2">
                                
                                <h1>公司宗旨</h1>
                                <p>作为新兴的移动互联网公司，跃尚旨在赋予中小型企业改变营销、销售和经营的方式，并提升企业效率，为商家、品牌及其他企业提供基本的科技基础设施和营销平台，让其可借助新技术的力量和客户互动，以更具有效率的形式开展运营。</p>
                            </div>
                        </div>
                        {/* 联系我们 */}
                        <div className="contactBox" style={{display: `${this.state.currIndex===3?'block':'none'}`}}>
                            <div className="top">联系我们</div>
                            <div className="name">陕西跃尚信息科技有限公司</div>
                            <div className="phone">电话：12033330000</div>
                            <div className="address">地址：西安市未央区凤城十二路富尔顿国际中心</div>
                            <div className="addressMap" id='addressMap'>

                            </div>

                        </div>
                    </div>
                    <ul className="right">
                        <li onClick={()=>this.tabChange(1)} className={this.state.currIndex===1?'active':''}>公司简介</li>
                        <li onClick={()=>this.tabChange(2)} className={this.state.currIndex===2?'active':''}>公司文化</li>
                        <li onClick={()=>this.tabChange(3)} className={this.state.currIndex===3?'active':''}>联系我们</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default About;