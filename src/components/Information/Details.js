import React, { Component } from 'react';
import './informationDetails.scss'
// 如果使用createBrowserHistory
import creatHistory from 'history/createBrowserHistory' 

const history = creatHistory();

// history.goBack();
//案例详情
class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        console.log(this.props.location.search)
    }
    goBack(){
        history.goBack();
    }
    render() { 
        return ( 
            <div className='informationDetails'>
                <div className="titleBox">
                    <h1>5G劲爆来袭，移动支付迎来创业投资新风口</h1>
                    <div className="timeBox">
                        <i></i>
                        <span>2018.01.01</span>
                    </div>
                </div>
                <div className="textBox">
                    <p>春天来了，但是不确定是不是一个好的春天，确实学习UI设计的人很多，但是方向基本都是应用UI不管是应用UI还是游戏UI至少都是UI但是并不是每个人都可以成为UI设计师，游戏很多人都爱好的吧,各种死宅们。  春天来了，但是不确定是不是一个好的春天，确实学习UI设计的人很多，但是方向基本都是应用不管是应用UI还是游戏UI至少都是UI但是并不是每个人都可以成为UI设计师或者说游戏UI。因为游戏UI设计对于应用设计的就业面都是很小。诚筑说小编整理一下很正经的内容。  春天来了，但是不确定是不是一个好的春天，确实学习UI设计的人很多，但是方向基本都是应用不管是应用UI还是游戏UI至少都是UI但是并不是每个人都可以成为UI设计师或者说游戏UI。</p>
                </div>
            </div>
         );
    }
}
 
export default Details;