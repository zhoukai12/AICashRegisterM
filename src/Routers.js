
import Home from '@/components/Home/Home'  //首页
import Product from '@/components/Product/Product'  //产品中心
import CashRegister from '@/components/Product/pages/CashRegister' //APP适配
import PaymentCode from '@/components/Product/pages/PaymentCode' //收款码
import BrushPayment from '@/components/Product/pages/BrushPayment' //刷脸支付
import IntelligentPos from '@/components/Product/pages/IntelligentPos'   //智能POS机
import CashRegisterPlugin from '@/components/Product/pages/CashRegisterPlugin'  //收银插件
import JoinIn from '@/components/JoinIn/JoinIn'  //伙伴加盟
import Information from '@/components/Information/Information'  //AI吧资讯
import Details from '@/components/Information/Details'  //AI吧资讯
import Case from '@/components/Case/Case'  //案例
import About from '@/components/About/About'  //关于我们

// import Login from '@/component/Login'

export default [
  { path: "/", component: Home},
  { path: "/home", component: Home},
  { path: "/product", component: Product},
  { path: "/product/cashregister", component: CashRegister},
  { path: "/product/paymentcode", component: PaymentCode},
  { path: "/product/brushpayment", component: BrushPayment},
  { path: "/product/intelligentpos", component: IntelligentPos},
  { path: "/product/cashregisterplugin", component: CashRegisterPlugin},
  { path: "/product/developerdocumentation/:id", component: Product},
  { path: "/joinin", component: JoinIn},
  { path: "/information", component: Information},
  { path: "/information/details", component: Details},
  { path: "/case", component: Case},
  { path: "/about", component: About},
  { path: "/about/:id", component: About},
]