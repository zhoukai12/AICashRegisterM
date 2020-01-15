import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import img1 from '@/assets/images/chanpin/chanpin1_1.png'
import img2 from '@/assets/images/chanpin/chanpin1_2.png'
import img3 from '@/assets/images/chanpin/chanpin1_3.png'
import img4 from '@/assets/images/chanpin/chanpin1_4.png'
import img5 from '@/assets/images/chanpin/chanpin1_5.png'
import SwiperInc from '@/components/Assembly/SwiperInc'
import '@/assets/css/Product.scss'
class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
    }
    render() {
        return (
            <div className='productWarpper'>
                <SwiperInc></SwiperInc>
                <div className="model model1">
                    <img src={img1} alt="" />
                    <Link to='/product/cashregister'></Link>
                    <div className="btnBox">
                        <div className="btn" onClick={()=>{alert('敬请期待~')}}></div>
                        <div className="btn" onClick={()=>{window.open('http://sxyueshang.com/ai.apk')}}></div>
                    </div>
                </div>
                <div className="model model2">
                    <Link to='/product/paymentcode'></Link>
                    <img src={img2} alt="" />
                </div>
                <div className="model model3">
                    <Link to='/product/brushpayment'></Link>
                    <img src={img3} alt="" />
                </div>
                <div className="model model4">
                    <Link to='/product/intelligentpos'></Link>
                    <img src={img4} alt="" />
                </div>
                <div className="model model5">
                    <Link to='/product/cashregisterplugin'></Link>
                    <img src={img5} alt="" />
                </div>
            </div>
        );
    }
}

export default Product;