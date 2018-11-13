
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import Contentlayout from '../component/layout';

//数码增加
// import { InputNumber, Button, Checkbox } from 'antd';
import Checkbox from 'antd/lib/Checkbox';
import Button from 'antd/lib/button';
import InputNumber from 'antd/lib/input-number';
import Children from 'rc-tween-one/lib/plugin/ChildrenPlugin';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'

const store = createStore(rootReducer)

TweenOne.plugins.push(Children);
class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      animation: null,
      formatMoney: false,
    };
    // this.onChangeMoney = this.onChangeMoney.bind(this);
    // this.onClick = this.onClick.bind(this);
  }

  componentWillMount() {
    this._unmounted = false;
    const { value, formatMoney } = this.state;
    if( window.electron){
      // window.electron.onOk(function(v){
          // console.log(v);
        //   this.setState({
        //   animation: {
        //     Children: { value: value+100 || 10000, floatLength: 2, formatMoney, }, 
        //     duration: 1000,
        //   }
        // })
      // });
      window.store.subscribe(()=>{
          console.log(window.store.getState());
          this.setState({
          animation: {
            Children: { value: window.store.getState() + 100 || 10000, floatLength: 2, formatMoney, }, 
            duration: 1000,
          }
        })
      })
    //   ipcRenderer.on('ok',(event, arg) => {
    //     console.log(arg);
    
    //   })
    }
}

componentWillUnmount() {
    this._unmounted = true;
}


  onChangeMoney = (e)=>{
    this.setState({
      formatMoney: e.target.checked
    })
  }

  onClick = () => {
    if( window.electron){
        window.electron.sendUp();
    }
  }

  onChange = (value)=>{
    console.log(value)
    this.setState({
      value,
    });
  }

  render() {
    return (
      <div 
        style={{ 
          display: 'flex', 
          height: '100%',
          minHeight: '220px', 
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <div style={{ width: '100%' }}>
          <TweenOne
            animation={this.state.animation}
            style={{ fontSize: 56, marginBottom: 12 }}
          >
            0
          </TweenOne>
          <InputNumber 
            defaultValue={this.state.value || 10000}
            onChange={this.onChange}
          />
          <Checkbox style={{ margin: '0 16px' }} onChange={this.onChangeMoney}> to money</Checkbox>
          <Button
            type="primary"
            style={{ marginBottom: 32 }}
            onClick={this.onClick}
          >
            开始
          </Button>
        </div>
      </div>
    );
  }
}
Demo.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  paused: PropTypes.bool,
};

ReactDOM.render(
  <Provider store={store}>
  <Contentlayout>
  <Demo/>
   <App />
  </Contentlayout>
  </Provider>,
  document.getElementById('root')
);