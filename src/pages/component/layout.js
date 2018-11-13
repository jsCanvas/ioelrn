// import { Layout, Menu, Icon } from 'antd';
import Layout from 'antd/lib/Layout';
import Menu from 'antd/lib/Menu';
import Icon from 'antd/lib/icon';

const { Header, Content, Footer, Sider } = Layout;

const SubMenu = Menu.SubMenu;

class ContentLayout extends React.Component {

constructor(props) {
    super(props);
    this.rut = location.href;
    this.meone = this.rut.split('/')[1];
    console.log(this.meone);
    this.slides = [
        {
            name: '首页',
            path:'user',
            routes:[
                {
                    name: '分析',
                    path:'/user/index',
                },
                {
                    name: '设置',
                    path:'/user/set',
                }
            ]
        },{
            name: '博文',
            path: 'reactserver',
            routes:[
                {
                    name: 'ES6语法开发服务端渲染react项目',
                    path:'/reactserver/index'
                }
            ]
        },{
            name:'示例',
            path:'App',
            routes:[
                {
                    name: '掉钱',
                    path:'/App/gold',
                },
                {
                    name: 'logo动画',
                    path:'/App/logo',
                },
                {
                    name: '数码',
                    path:'/App/numAdd',
                },
                {
                    name: '测试',
                    path:'/App/login',
                }
            ]
        }
    ]

    this.content = this.slides.map( (item) => {
        if( item.routes){
             return (<SubMenu
             collapsed="false"
             key={item.path}
             title={<span><Icon type="user" /><span>{item.name}</span></span>}
           >
             {item.routes.map((posy)=><Menu.Item  key={posy.path}>{posy.name}</Menu.Item>)}
           </SubMenu>)
        }else{
            return (<Menu.Item  key={item.path}>
            <Icon type="user" />
            <span className="nav-text">{item.name}</span>
            </Menu.Item>)
        }
    })
  }

  handleClick = (e) => {
    console.log('click ', e);
    location.href = e.key;
  }

    render(){
            return ( 
                <Layout>
                <Sider
                  breakpoint="lg"
                  collapsedWidth="0"
                  onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
                >
                  <div className="logo" />
                  <Menu theme="dark" mode="inline" onClick={this.handleClick} defaultSelectedKeys={this.rut}>
                   {this.content}
                  </Menu>
                </Sider>
                <Layout>
                  <Content style={{ height:'100%', width:'100%' }}>
                    <div style={{ background: '#fff', minHeight: 360 }}>
                      {this.props.children}
                    </div>
                  </Content>
                  <Footer style={{ textAlign: 'center' }}>
                    web5.cc ©2018 Created by bitao.ren
                  </Footer>
                </Layout>
              </Layout> )
          }

}


export default ContentLayout;