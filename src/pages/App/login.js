// import logo from '/img/logo.svg';
// import '/css/App.css';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import Contentlayout from '../component/layout';
//-----------------------------------------------------------------------------------------------------
import axios from 'axios';
// var TweenOneGroup = TweenOne.TweenOneGroup;

// class App extends React.Component {
   
//   constructor() {
//     super();
//     //定义变量 data
//     this.good =  'asdasddddadsad';

//   }
//     //定义方法 function 
//    goset(){
//      alert(1);
//      axios.get('/service/App/login').then(res=>{
//         console.log(res);
//      });
//    }

//   render(){
//     return ( <Contentlayout>
//     <TweenOneGroup>
//       <div  key="0" className="App">
//         <header onClick={this.goset} className="App-header">
//           <img  src='/img/logo.svg' className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React  {this.good}</h1>
//         </header>
//         <p className="App-intro">
//            {this.good}
//         </p>
//       </div>
//       </TweenOneGroup>
//       </Contentlayout>
//     )
//   }
// };

// ReactDOM.render( <App />,
//   document.getElementById('root'),
//   function(){
//       console.log('渲染完成啦！！');
//   }
// )
//-----------------------------------------------------------------------------------------------------------
//生命周期
// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }

//   componentDidMount() {
//     this.timerID = setTimeout(
//       () => this.tick(),
//       1000
//     );
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <Contentlayout>
//   <Clock />
//   </Contentlayout>,
//   document.getElementById('root')
// );
//-----------------------------------------------------------------------------------------------------------
//如何传参
// Calls the children callback numTimes to produce a repeated component
// function Repeat(props) {
//   let items = [];
//   for (let i = 0; i < props.numTimes; i++) {
//     items.push(props.children(i));
//   }
//   return <div>{items}</div>;
// }

// function ListOfTenThings() {
//   //children  可以是任何值 包括一个 回掉函数
//   return (
//     <Repeat numTimes={10}>
//       {(index) => <div key={index}>This is item {index} in the list</div>}
//     </Repeat>
//   );
// }

// function Blog(props) {
//   const sidebar = (
//     <ul>
//       {props.posts.map((post) =>
//         <li key={post.id}>
//           {post.title}
//         </li>
//       )}
//     </ul>
//   );
//   const content = props.posts.map((post) =>
//     <div key={post.id}>
//       <h3>{post.title}</h3>
//       <p>{post.content}</p>
//     </div>
//   );
//   return (
//     <div>
//       {sidebar}
//       <hr />
//       {content}
//     </div>
//   );
// }

// const posts = [
//   {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
//   {id: 2, title: 'Installation', content: 'You can install React from npm.'}
// ];
// ReactDOM.render(
//   <Contentlayout>
//     <ListOfTenThings />
//   {/* <Blog posts={posts} /> */}
// </Contentlayout>,
//   document.getElementById('root')
// );
//---------------------------------------------------------------------------------------------------------
//架构演示
//数据请求  使用 $.ajax 或者 axios
// FilterableProductTable
// 
// SearchBar
// 
// ProductTable
// 
// ProductCategoryRow
// 
// ProductRow

function SearchBar(props){

  json = props.json;

return(
  <div style={{
    width:'100%',
    height:'60px',
    border:'1px solid green'
  }}>
    <input type="text" />
    <br/>    
    <input type="checkbox"/>

  </div>
)

}


function ProductTable(props){

  return(
    <div style={{
      width:'100%',
      height:'220px',
      border:'1px solid red'
    }}>
      
    </div>
  )
  
  }


 function ProductCategoryRow() {

 }
 function ProductRow () {

 }



class FilterableProductTable extends React.Component{
    constructor(){
      super()

      this.state = {filterText: '', inStockOnly:
        false}
        axios.get('/service/App/login').then(res=>{
        console.log(res);
        this.json = res.data;
        });
        // this.json = 

    }


   render(){
     return (
      <Contentlayout>
           <div style={{
             width:'200px',
             height:'300px',
             border:'1px solid orange',
             margin:'20px auto',
             padding:'5px'
           }}>
           <SearchBar json={this.jsons} />
           <ProductTable />
             </div>
        </Contentlayout>
     )
   }
}

ReactDOM.render(
  <FilterableProductTable />,
  document.getElementById('root')
);





//---------------------------------------------------------------------------------------------------------
//数码增加
// import { InputNumber, Button, Checkbox } from 'antd';
// import Children from 'rc-tween-one/lib/plugin/ChildrenPlugin';
// TweenOne.plugins.push(Children);

// class Demo extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       value: 0,
//       animation: null,
//       formatMoney: false,
//     };
//     // this.onChangeMoney = this.onChangeMoney.bind(this);
//     // this.onClick = this.onClick.bind(this);
//   }

//   onChangeMoney = (e)=>{
//     this.setState({
//       formatMoney: e.target.checked
//     })
//   }

//   onClick = () => {
//     const { value, formatMoney } = this.state;
//     this.setState({
//       animation: {
//         Children: { value: value || 10000, floatLength: 2, formatMoney, }, 
//         duration: 1000,
//       }
//     })
//   }

//   onChange = (value)=>{
//     console.log(value)
//     this.setState({
//       value,
//     });
//   }

//   render() {
//     return (
//       <div 
//         style={{ 
//           display: 'flex', 
//           height: '100%',
//           minHeight: '220px', 
//           alignItems: 'center',
//           textAlign: 'center',
//         }}
//       >
//         <div style={{ width: '100%' }}>
//           <TweenOne
//             animation={this.state.animation}
//             style={{ fontSize: 56, marginBottom: 12 }}
//           >
//             0
//           </TweenOne>
//           <InputNumber 
//             defaultValue={this.state.value || 10000}
//             onChange={this.onChange}
//           />
//           <Checkbox style={{ margin: '0 16px' }} onChange={this.onChangeMoney}> to money</Checkbox>
//           <Button
//             type="primary"
//             style={{ marginBottom: 32 }}
//             onClick={this.onClick}
//           >
//             开始
//           </Button>
//         </div>
//       </div>
//     );
//   }
// }
// Demo.propTypes = {
//   children: PropTypes.any,
//   className: PropTypes.string,
//   paused: PropTypes.bool,
// };


// ReactDOM.render(
//   <Demo/>,
//   document.getElementById('root')
// );




//----------------------------------------------------------------------------------------------------------
//分段动画
// const p0 = 'M0,100 L25,100 C34,20 40,0 100,0';
// const p1 = 'M0,100 C5,120 25,130 25,100 C30,60 40,75 58,90 C69,98.5 83,99.5 100,100';
// const ease0 = TweenOne.easing.path(p0);
// const ease1 = TweenOne.easing.path(p1);
// class Demo extends React.Component {
//   constructor(props) {
//     super(props);
//     this.animation = [
//       {
//         repeatDelay: 500,
//         y: -70,
//         repeat: -1,
//         yoyo: true,
//         ease: ease0,
//         duration: 1000
//       },
//       {
//         repeatDelay: 500,
//         appearTo: 0,
//         scaleX: 0,
//         scaleY: 2,
//         repeat: -1,
//         yoyo: true,
//         ease: ease1,
//         duration: 1000,
//       }
//     ];
//   }

//   render() {
//     return (
//       <div>
//         <TweenOne
//           animation={this.animation}
//           paused={this.props.paused}
//           className="code-box-shape"
//           style={{
//             position: 'absolute',
//             transformOrigin: 'center bottom',
//           }}
//         />
//       </div>
//     );
//   }
// }
// Demo.propTypes = {
//   children: PropTypes.any,
//   className: PropTypes.string,
//   paused: PropTypes.bool,
// };



// ReactDOM.render(
//   <Demo/>,
//   document.getElementById('root')
// );


//------------------------------------------------------------------------------------------------------
//掉钱
// import BezierPlugin from 'rc-tween-one/lib/plugin/BezierPlugin';
// import './money.less';

// TweenOne.plugins.push(BezierPlugin);

// class Snow extends React.Component {
//   static propTypes = {
//     children: PropTypes.any,
//     className: PropTypes.string,
//     prefixCls: PropTypes.string,
//     amount: PropTypes.number,
//     repeat: PropTypes.number,
//     ease: PropTypes.string,
//     startArea: PropTypes.object,
//     endArea: PropTypes.object,
//     startDelayRandom: PropTypes.number,
//     basicToDuration: PropTypes.number,
//     randomToDuration: PropTypes.number,
//     rotateRandom: PropTypes.number,
//     bezierSegmentation: PropTypes.number,
//     onEnd: PropTypes.func,
//   }
//   static defaultProps = {
//     prefixCls: 'snow',
//     amount: 10,
//     repeat: 0,
//     ease: 'linear',
//     startArea: {
//       x: 0, y: -200, width: '100%', height: 50,
//     },
//     endArea: {
//       x: -200, y: '100%', width: '120%', height: 100,
//     },
//     basicToDuration: 1200,
//     randomToDuration: 800,
//     startDelayRandom: 800,
//     rotateRandom: 180,
//     bezierSegmentation: 2,
//     onEnd: () => { },
//   };

//   constructor(props) {
//     super(props);
//     this.state = {
//       children: null,
//     };
//   }
//   componentDidMount() {
//     this.setChilrenToState();
//   }

//   onAnimEnd = () => {
//     this.animEnd += 1;
//     if (this.animEnd >= this.props.amount) {
//       this.animEnd = 0;
//       if (this.props.onEnd) {
//         this.props.onEnd();
//       }
//     }
//   }

//   setChilrenToState() {
//     const children = this.getChildrenToRender();
//     this.setState({
//       children,
//     });
//   }

//   getChildrenToRender = () => {
//     const {
//       bezierSegmentation, basicToDuration, randomToDuration,
//       amount, ease, startDelayRandom, repeat, rotateRandom,
//     } = this.props;
//     const children = React.Children.toArray(this.props.children);
//     const rect = this.wrapperDom.getBoundingClientRect();
//     const startArea = this.dataToNumber(this.props.startArea, rect);
//     const endArea = this.dataToNumber(this.props.endArea, rect);
//     return Array(amount).fill(1).map((k, i) => {
//       const item = children[Math.floor(Math.random() * children.length)];
//       const vars = Array(bezierSegmentation).fill(1).map((c, j) => {
//         const hegiht = endArea.y - startArea.y - startArea.height;
//         const y = (hegiht / bezierSegmentation) * (j + 1);
//         const x = Math.random() * (Math.max(startArea.width, endArea.width)
//           + Math.min(startArea.x, endArea.x));
//         // console.log(hegiht, startArea, endArea, y);
//         return {
//           y,
//           x,
//         };
//       });
//       const delay = Math.random() * startDelayRandom;
//       const animation = {
//         bezier: {
//           type: 'soft',
//           autRotate: true,
//           vars,
//         },
//         ease,
//         repeat,
//         repeatDelay: delay,
//         delay,
//         duration: basicToDuration + Math.random() * randomToDuration,
//         onComplete: this.onAnimEnd,
//       };
//       const style = {
//         transform: `translate(${Math.random() * (startArea.width) + startArea.x}px, ${
//           Math.random() * (startArea.height) + startArea.y
//         }px)`,
//       };
//       const child = rotateRandom ? (
//         <TweenOne
//           className="snowRotate"
//           style={{ transform: `rotate(${Math.random() * rotateRandom}deg)` }}
//           animation={{
//             rotate: 0,
//             duration: animation.duration * 4 / 5,
//             delay: animation.delay,
//             repeat: animation.repeat,
//           }}
//         >
//           {item}
//         </TweenOne>
//       ) : item;
//       return (
//         <TweenOne
//           animation={animation}
//           style={style}
//           key={`${item}-${i.toString()}`}
//           className="snowChild"
//         >
//           {child}
//         </TweenOne>
//       );
//     });
//   }
//   dataToNumber = (obj, rect) => {
//     const toNumber = (v, full) => {
//       if (typeof v === 'number') {
//         return v;
//       }
//       const unit = v.replace(/[0-9|.]/g, '');
//       switch (unit) {
//         case '%':
//           return parseFloat(v) * full / 100;
//         case 'em':
//           return parseFloat(v) * 16;
//         default:
//           return null;
//       }
//     };
//     return {
//       x: toNumber(obj.x, rect.width),
//       y: toNumber(obj.y, rect.height),
//       width: toNumber(obj.width, rect.width),
//       height: toNumber(obj.height, rect.height),
//     };
//   }
//   animEnd = 0;
//   render() {
//     // const { prefixCls, ...props } = this.props;
//     const prefixCls = this.props.prefixCls;
//     const props = {
//       prefixCls: 'snow',
//       amount: 10,
//       repeat: 10,
//       ease: 'linear',
//       startArea: {
//         x: 0, y: -200, width: '100%', height: 50,
//       },
//       endArea: {
//         x: -200, y: '100%', width: '120%', height: 100,
//       },
//       basicToDuration: 1200,
//       randomToDuration: 800,
//       startDelayRandom: 800,
//       rotateRandom: 180,
//       bezierSegmentation: 2,
//       onEnd: () => { },
//     };
//     const { children } = this.state;
//     [
//       'amount',
//       'repeat',
//       'ease',
//       'startArea',
//       'endArea',
//       'basicToDuration',
//       'randomToDuration',
//       'startDelayRandom',
//       'bezierSegmentation',
//       'rotateRandom',
//       'onEnd',
//     ].forEach(k => delete props[k]);
//     const className = `${prefixCls}${props.className ? ` ${props.className}` : ''}`;
//     return (
//       <div
//         {...props}
//         ref={(c) => {
//           this.wrapperDom = c;
//         }}
//         className={className}
//       >
//         {children}
//       </div>
//     );
//   }
// }

// class SnowDemo extends React.Component {
//   state = {
//     show: true,
//   }
//   onEnd = () => {
//     this.setState({
//       show: false,
//     });
//   }
//   render() {
//     const children = Array(5).fill(1).map((c, i) => (
//       <div key={i} className="addMoneyAnim" style={{ animationDelay: `${-Math.random() * 0.6}s` }} />
//     ));
//     return (
//       <div className="snow-demo-wrapper" >
//         <div className="snow-demo">
//           {this.state.show && (
//             <Snow onEnd={this.onEnd} >
//               {children}
//             </Snow>
//           )}
//         </div>
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <SnowDemo />
// , document.getElementById('root'));
//-------------------------------------------------------------------------------------------------------
//logo 动画
// import ticker from 'rc-tween-one/lib/ticker';
// import Input from 'antd/lib/input';
// import Button from 'antd/lib/button';
// import InputNumber from 'antd/lib/input-number';
// import Radio from 'antd/lib/radio';
// import Icon from 'antd/lib/icon';
// import { enquireScreen } from 'enquire-js';
// const RadioGroup = Radio.Group;

// class LogoGather extends React.Component {
//   static propTypes = {
//     image: PropTypes.string,
//     w: PropTypes.number,
//     h: PropTypes.number,
//     pixSize: PropTypes.number,
//     pointSizeMin: PropTypes.number,
//   };

//   static defaultProps = {
//     image: 'https://zos.alipayobjects.com/rmsportal/gsRUrUdxeGNDVfO.svg',
//     w: 300,
//     h: 300,
//     pixSize: 20,
//     pointSizeMin: 10,
//   };

//   constructor(props) {
//     super(props);
//     this.state = {};
//     this.interval = null;
//     this.gather = true;
//     this.intervalTime = 9000;
//   }

//   componentDidMount() {
//     this.dom = ReactDOM.findDOMNode(this);
//     this.createPointData();
//   }

//   componentWillUnmount() {
//     ticker.clear(this.interval);
//     this.interval = null;
//   }

//   onMouseEnter = () => {
//     // !this.gather && this.updateTweenData();
//     if (!this.gather) {
//       this.updateTweenData();
//     }
//     this.componentWillUnmount();
//   };

//   onMouseLeave = () => {
//     // this.gather && this.updateTweenData();
//     if (this.gather) {
//       this.updateTweenData();
//     }
//     this.interval = ticker.interval(this.updateTweenData, this.intervalTime);
//   };

//   setDataToDom(data, w, h) {
//     this.pointArray = [];
//     const number = this.props.pixSize;
//     for (let i = 0; i < w; i += number) {
//       for (let j = 0; j < h; j += number) {
//         if (data[((i + j * w) * 4) + 3] > 150) {
//           this.pointArray.push({ x: i, y: j });
//         }
//       }
//     }
//     const children = [];
//     this.pointArray.forEach((item, i) => {
//       const r = Math.random() * this.props.pointSizeMin + this.props.pointSizeMin;
//       const b = Math.random() * 0.4 + 0.1;
//       children.push((
//         <TweenOne className="point-wrapper" key={i} style={{ left: item.x, top: item.y }}>
//           <TweenOne
//             className="point"
//             style={{
//               width: r,
//               height: r,
//               opacity: b,
//               backgroundColor: `rgb(${Math.round(Math.random() * 95 + 160)},255,255)`,
//             }}
//             animation={{
//               y: (Math.random() * 2 - 1) * 10 || 5,
//               x: (Math.random() * 2 - 1) * 5 || 2.5,
//               delay: Math.random() * 1000,
//               repeat: -1,
//               duration: 3000,
//               yoyo: true,
//               ease: 'easeInOutQuad',
//             }}
//           />
//         </TweenOne>
//       ));
//     });
//     this.setState({
//       children,
//       boxAnim: { opacity: 0, type: 'from', duration: 800 },
//     }, () => {
//       this.interval = ticker.interval(this.updateTweenData, this.intervalTime);
//     });
//   }

//   createPointData = () => {
//     const { w, h } = this.props;
//     const canvas = document.getElementById('canvas');
//     const ctx = canvas.getContext('2d');
//     ctx.clearRect(0, 0, w, h);
//     canvas.width = this.props.w;
//     canvas.height = h;
//     const img = new Image();
//     img.onload = () => {
//       ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, w, h);
//       const data = ctx.getImageData(0, 0, w, h).data;
//       this.setDataToDom(data, w, h);
//       this.dom.removeChild(canvas);
//     };
//     img.crossOrigin = 'anonymous';
//     img.src = this.props.image;
//   };

//   gatherData = () => {
//     const children = this.state.children.map(item =>
//       React.cloneElement(item, {
//         animation: {
//           x: 0,
//           y: 0,
//           opacity: 1,
//           scale: 1,
//           delay: Math.random() * 500,
//           duration: 800,
//           ease: 'easeInOutQuint',
//         },
//       }));
//     this.setState({ children });
//   };

//   disperseData = () => {
//     const rect = this.dom.getBoundingClientRect();
//     const sideRect = this.sideBox.getBoundingClientRect();
//     const sideTop = sideRect.top - rect.top;
//     const sideLeft = sideRect.left - rect.left;
//     const children = this.state.children.map(item =>
//       React.cloneElement(item, {
//         animation: {
//           x: Math.random() * rect.width - sideLeft - item.props.style.left,
//           y: Math.random() * rect.height - sideTop - item.props.style.top,
//           opacity: Math.random() * 0.4 + 0.1,
//           scale: Math.random() * 2.4 + 0.1,
//           duration: Math.random() * 500 + 500,
//           ease: 'easeInOutQuint',
//         },
//       }));

//     this.setState({
//       children,
//     });
//   };

//   updateTweenData = () => {
//     this.dom = ReactDOM.findDOMNode(this);
//     this.sideBox = ReactDOM.findDOMNode(this.sideBoxComp);
//     ((this.gather && this.disperseData) || this.gatherData)();
//     this.gather = !this.gather;
//   };

//   render() {
//     return (
//       <div className="logo-gather-demo-wrapper">
//         <canvas id="canvas" />
//         <TweenOne
//           animation={this.state.boxAnim}
//           className="right-side blur"
//           onMouseEnter={this.onMouseEnter}
//           onMouseLeave={this.onMouseLeave}
//           ref={(c) => {
//             this.sideBoxComp = c;
//           }}
//         >
//           {this.state.children}
//         </TweenOne>
//       </div>
//     );
//   }
// }
// class Edit extends React.Component {
//   constructor(props) {
//     super(props);
//     this.defaultImage = {
//       a: 'https://zos.alipayobjects.com/rmsportal/gsRUrUdxeGNDVfO.svg',
//       b: 'https://zos.alipayobjects.com/rmsportal/TOXWfHIUGHvZIyb.svg',
//       c: 'https://zos.alipayobjects.com/rmsportal/NbWTEbiswBhrRBU.svg',
//     };
//     this.state = {
//       image: this.defaultImage.a,
//       pixSize: 20,
//       pointSize: 10,
//       isMobile: false,
//       show: false,
//     };
//   }

//   componentDidMount() {
//     enquireScreen((isMobile) => {
//       this.setState({ isMobile });
//     });
//   }

//   onChangeImage = (e) => {
//     const dom = e.target;
//     this.image = dom.value;
//   }

//   onChangePix = (num) => {
//     this.pixSize = num;
//   }

//   onClick = () => {
//     if (this.image || this.pixSize || this.pointSize) {
//       this.setState({
//         image: this.image || this.state.image,
//         pixSize: typeof this.pixSize === 'number' ? this.pixSize : this.state.pixSize,
//         pointSize: typeof this.pointSize === 'number' ? this.pointSize : this.state.pointSize,
//         update: true,
//       }, () => {
//         this.setState({
//           update: false,
//         });
//       });
//     }
//   }

//   onChangeRadio = (e) => {
//     const target = e.target;
//     const value = target.value;
//     this.image = this.defaultImage[value];
//     this.setState({
//       value,
//     });
//   }

//   onChangePoint = (num) => {
//     this.pointSize = num;
//   }

//   phoneClick = () => {
//     this.setState({
//       show: !this.state.show,
//     });
//   };

//   render() {
//     return (
//       <div style={{ position: 'relative' }}>
//         {!this.state.update && (
//           <LogoGather
//             image={this.state.image}
//             pixSize={this.state.pixSize}
//             pointSizeMin={this.state.pointSize}
//           />
//         )}
//         <div className={`logo-gather-demo-edit-wrapper ${this.state.show ? 'open' : ''}`}>
//           {this.state.isMobile && (
//             <div className="edit-button" onClick={this.phoneClick}>
//               <Icon type="down" />
//             </div>
//           )}
//           <ul>
//             <li>图片:</li>
//             <li >
//               <RadioGroup onChange={this.onChangeRadio} defaultValue="a">
//                 <Radio value="a">
//                   <img
//                     src={this.defaultImage.a}
//                     height="30"
//                   />
//                 </Radio>
//                 <Radio value="b">
//                   <img
//                     src={this.defaultImage.b}
//                     height="30"
//                   />
//                 </Radio>
//                 <Radio value="c">
//                   <img
//                     src={this.defaultImage.c}
//                     height="30"
//                   />
//                 </Radio>
//                 <Radio key="d" value="d" className={`${this.state.isMobile ? 'none' : ''}`}>
//                   其它
//                   <TweenOneGroup
//                     style={{ display: 'inline-block', height: 0 }}
//                     enter={{ width: 0, opacity: 0, type: 'from' }}
//                     leave={{ width: 0, opacity: 0 }}
//                   >
//                     {this.state.value === 'd' ? (
//                       <div key="d">
//                         <Input
//                           placeholder="或自行输入"
//                           style={{ width: 120, marginLeft: 5 }}
//                           onChange={this.onChangeImage}
//                         />
//                       </div>
//                     ) : null}
//                   </TweenOneGroup>
//                 </Radio>
//               </RadioGroup>
//             </li>
//             <li className={`${this.state.isMobile ? 'phone-float-none' : ''}`}>图片取点像素：</li>
//             <li>
//               <InputNumber
//                 defaultValue={this.state.pixSize}
//                 min={15}
//                 style={{ width: 60 }}
//                 onChange={this.onChangePix}
//               />
//             </li>
//             <li className={`${this.state.isMobile ? 'phone-float-none' : ''}`}>点的宽加随机：</li>
//             <li>
//               <InputNumber
//                 defaultValue={this.state.pointSize}
//                 style={{ width: 60 }}
//                 onChange={this.onChangePoint}
//               />
//             </li>
//             <li className={`${this.state.isMobile ? 'phone-float-none' : ''}`}>
//               <Button type="primary" onClick={this.onClick}>更新</Button>
//             </li>
//           </ul>
//           <div style={{ lineHeight: '32px' }}>
//             注：图片尺寸为正方形的PNG或SVG，请确保图片开启跨域；像数点的数值越大则点越少，为流畅最小值为15
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <Edit />
// , document.getElementById('root'));




//---------------------------------------------------------------------------------------------------------
//架构演示
//数据请求  使用 $.ajax 或者 axios
// FilterableProductTable
// 
// SearchBar
// 
// ProductTable
// 
// ProductCategoryRow
// 
// ProductRow


// function SearchBar(props) {

//     return(
//       <div style={{
//         width:"100%",
//         height: "60px",
//         border: '1px solid green',
//         padding:'5px'
//       }}>
//         <input type="text" />
//         <br />
//         <input type="checkbox" />
//       </div>
//     )
// }

// function ProductTable(props) {
//   console.log(props);
  
//   var data = props.data;
//   var stat = props.status;
//   var filedata =  data.map((item)=>{ 
//      var ok = false;
//       for(im in item){
//         if(item[im].indexOf(stat.filterText) != -1){
//           ok =  true;
//         }
//       }
//       if(ok){
//          return item;
//       }
//   });

//   return(
//     <div style={{
//       width:"100%",
//       height: "220px",
//       border: '1px solid blue',
//       padding:'5px'
//     }}>
//     <p>title</p>
//     <dl>
//       <dt>
//         <ProductCategoryRow mapdata={filedata} />
//       </dt>
//       <dd>
//         <ProductRow mapdata={filedata} />
//       </dd>
//     </dl>
//     </div>
//   )
// }

// function ProductCategoryRow(props) {

//     var mapdata = props.mapdata;
    
//     return(
//         mapdata.map((i)=><p>i.category</p>)
//     )
// }
// function ProductRow(props) {
//   var mapdata = props.mapdata;
//     return (
//       mapdata.map((i)=><p>i.name</p>)
//     )
// }


// class FilterableProductTable extends React.Component {
   
//   constructor() {
//     super();
//     this.state= {filterText: '', inStockOnly:
//     false}
//     axios.get('/service/App/login').then(res=>{
//               console.log(res);
//               this.json = res.data;
//     });
//   }

//   render(){
//     return ( <Contentlayout>
//           <TweenOneGroup>
//               <div style={{
//                 width:'200px',
//                 height:'300px',
//                 border:'1px solid orange',
//                 margin:'20px auto',
//                 padding: '10px'
//               }}>
//                   <SearchBar status={this.state}  />
//                   <ProductTable status={this.state} data={this.json} />
//               </div>
//         </TweenOneGroup>
//         </Contentlayout>
//     )
//   }
// };

// ReactDOM.render( <FilterableProductTable />,
//   document.getElementById('root'),
//   function(){
//       console.log('渲染完成啦！！');
//   }
// )


//---------------------------------------------------------------------------------------------------------
