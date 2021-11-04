import React, {useState} from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {Layout, Menu} from 'antd';
import {Content, Footer} from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import {Header} from "antd/es/layout/layout";
import {CodeOutlined, HeatMapOutlined, HomeOutlined, LinkOutlined, UserOutlined, FieldNumberOutlined} from '@ant-design/icons';
import {Numbers} from "./components/Numbers/Numbers";
import {Provider} from "react-redux";
import {setupStore} from "./redux/redux-store";
import {Home} from "./components/Home/Home";

function App() {
    const [collapsed, onCollapse] = useState(false);
    return (
        <div className="App">
            <Layout style={{minHeight: '100vh'}} hasSider={true}>
                <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                    <div className="logo"/>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" icon={<HomeOutlined/>}>
                            <Link to={"/"}>Home</Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<UserOutlined/>}>
                            <Link to={"/about-me"}>About me</Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<HeatMapOutlined/>}>
                            <Link to={"/skills"}>Skills</Link>
                        </Menu.Item>
                        <Menu.Item key="4" icon={<CodeOutlined/>}>
                            <Link to={"/works"}>Works</Link>
                        </Menu.Item>
                        <Menu.Item key="5" icon={<LinkOutlined/>}>
                            <Link to={"/contact"}>Contact</Link>
                        </Menu.Item>
                        <Menu.Item key="6" icon={<FieldNumberOutlined />}>
                            <Link to={"/numbers"}>Цифро Факты</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{padding: 0}}/>
                    <Content style={{margin: '0 16px'}}>
                        <div className="site-layout-background" style={{padding: 24, height: "100%"}}>
                            <Switch>
                                {/*<Route exact path={"/about-me"} render={<></>}/>*/}
                                {/*<Route exact path={"/contact"} component={<div>1</div>}/>*/}
                                {/*<Route exact path={"/skills"} component={<div>1</div>}/>*/}
                                {/*<Route exact path={"/works"} component={<div>1</div>}/>*/}
                                <Route exact path={"/numbers"} component={Numbers}/>
                                <Route exact path={"/"} component={Home}/>

                            </Switch>
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>©Турникет Шашахметов</Footer>
                </Layout>
            </Layout>
        </div>
    );
}


const store = setupStore();
const FinalApp = () => {
    return (
        <BrowserRouter>
          <Provider store={store}>
            <App/>
          </Provider>
        </BrowserRouter>
    )
}


export default FinalApp;
