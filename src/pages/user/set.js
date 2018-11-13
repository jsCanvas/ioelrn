

import Contentlayout from '../component/layout';

// var ipcRenderer = require('electron').ipcRenderer;
// var remote = require('electron').remote;
// const { Menu, MenuItem, dialog } = remote;

// import { ipcRenderer, remote } from 'electron';


class LogoGather extends React.Component {
    static displayName = 'LogoGather';
    constructor(){
        super()
        this.submit = this.submit.bind(this);
        this.onUploadFileSelected = this.onUploadFileSelected.bind(this);
        this.onUser = this.onUser.bind(this);
        this.onPass = this.onPass.bind(this);

    }
    static propTypes = {

    };

    state = {
        login:false,
        userVal:"",
        passVal:""
    };

    componentWillMount() {
        this._unmounted = false;
    }

    componentWillUnmount() {
        this._unmounted = true;
    }

    

    submit(){
        if(this.state.userVal !=='admin' || this.state.passVal !=='admin'){
            return;
        }
        this.setState({
            login:true
        });
        if(window.ipcRenderer){
            window.ipcRenderer.sendSync('reqaction', 'open')
        }
    }

    onUser(ev){
        this.setState({
            userVal:ev.target.value
        });
    }

    onPass(ev){
        this.setState({
            passVal:ev.target.value
        });
        // this.setState({
        //     login:true
        // });
    }

    onUploadFileSelected(files){
        
       console.log(files.target.files);
      
    }

   render() {
       let loginBox = <div className="loginBox">
           <div className="loginBoxUser">
                <input value={this.state.userVal} onChange={this.onUser} type="text" placeholder="用户名" />
           </div>
           <div className="loginBoxPass">
                <input value={this.state.passVal} onChange={this.onPass} type="password" placeholder="密码" />
           </div>
           <div className="loginBoxButton">
                 <button onClick={this.submit}>登陆</button>
           </div>
       </div>
       let uploadBox = <div>
            <div className="uploadBox" id="mountNode">
                <input type="file" multiple 
                    onChange={this.onUploadFileSelected} />
            </div>
        </div>
       return (
           <div>
                {this.state.login?uploadBox:loginBox}
                <div>
                </div>
           </div>
       )
   }
}
// export default VerticalBPChart;

ReactDOM.render(
  <Contentlayout>
  <LogoGather />
  </Contentlayout>
, document.getElementById('root'));