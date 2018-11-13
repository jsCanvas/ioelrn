import Contentlayout from '../component/layout';

// import { Menu, Icon } from 'antd';
import Menu from 'antd/lib/Menu';
import Icon from 'antd/lib/Icon';


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function Contents(props) {
    return (
        <div style={{
          height: '84%',
        position: 'absolute',
        width: '100%'}}>
            <iframe
             style={{
                 width:'100%',
                 height: '100%'
             }}
             src={props.link}>

            </iframe>
        </div>
    );
}

class AppMenu extends React.Component {
  state = {
    current: "http://"+location.host+"/datas/talk/reactserver.htm",
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
    <div>
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key={"http://"+location.host+"/datas/talk/reactserver.htm"}>
          <Icon type="mail" />博文首页
        </Menu.Item>
        <SubMenu title={<span><Icon type="setting" />内容目录</span>}>
          <MenuItemGroup style={{height:'200px',overflow:'auto'}} title="es6语法开发服务端渲染react项目">
            <Menu.Item key={"http://"+location.host+"/datas/talk/img0.html"}>引导</Menu.Item>
            <Menu.Item key={"http://"+location.host+"/datas/talk/img1.html"}>流程图</Menu.Item>
            <Menu.Item key={"http://"+location.host+"/datas/talk/img2.html"}>jsx简介</Menu.Item>
            <Menu.Item key={"http://"+location.host+"/datas/talk/img3.html"}>jsx中嵌入表达式</Menu.Item>
            <Menu.Item key={"http://"+location.host+"/datas/talk/img4.html"}>jsx也是一个表达式</Menu.Item>
            <Menu.Item key={"http://"+location.host+"/datas/talk/img5.html"}>用jsx指定属性值</Menu.Item>
            <Menu.Item key={"http://"+location.host+"/datas/talk/img6.html"}>用jsx指定子元素</Menu.Item>
            <Menu.Item key={"http://"+location.host+"/datas/talk/img7.html"}>jsx表示对象</Menu.Item>
            <Menu.Item key={"http://"+location.host+"/datas/talk/img8.html"}>生命周期</Menu.Item>
            <Menu.Item key={"http://"+location.host+"/datas/talk/img9.html"}>生命周期代码</Menu.Item>
            <Menu.Item key={"http://"+location.host+"/datas/talk/img10.html"}>生命周期钩子</Menu.Item>
            <Menu.Item key={"http://"+location.host+"/datas/talk/img11.html"}>生命周期演示</Menu.Item>
            <Menu.Item key={"http://"+location.host+"/datas/talk/img12.html"}>生命周期总结</Menu.Item>
            <Menu.Item key={"http://"+location.host+"/datas/talk/img13.html"}>步骤一拆解组建（1）</Menu.Item>
            <Menu.Item key={"http://"+location.host+"/datas/talk/img14.html"}>步骤一拆解组建（2）</Menu.Item>
            <Menu.Item key={"http://"+location.host+"/datas/talk/img15.html"}>步骤二构建静态版本(1)</Menu.Item>
            <Menu.Item key={"http://"+location.host+"/datas/talk/img16.html"}>步骤二构建静态版本(2)</Menu.Item>
            <Menu.Item key={"http://"+location.host+"/datas/talk/img17.html"}>步骤三确定UI state状态（1）</Menu.Item>
            <Menu.Item key={"http://"+location.host+"/datas/talk/img18.html"}>步骤三确定UI state状态（2）</Menu.Item>
            <Menu.Item key={"http://"+location.host+"/datas/talk/img19.html"}>步骤四确定state位置(1)</Menu.Item>
            <Menu.Item key={"http://"+location.host+"/datas/talk/img20.html"}>步骤四确定state位置(2)</Menu.Item>
            <Menu.Item key={"http://"+location.host+"/datas/talk/img21.html"}>步骤五添加反向数据</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
      </Menu>
      <Contents link={this.state.current} />
      </div>
    );
  }
}



ReactDOM.render(
    <Contentlayout>
    <AppMenu/>
    </Contentlayout>,
    document.getElementById('root')
  );
