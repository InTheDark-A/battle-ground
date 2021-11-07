import React, {useState} from 'react';
import {
    BulbOutlined,
    EditOutlined,
    FieldNumberOutlined,
    GithubOutlined,
    HomeOutlined,
    SmileOutlined,
    UserOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import './App.css';
import {Layout, Menu} from 'antd';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import {setupStore} from "./redux/redux-store";
import {Home} from "./components/Home/Home";
import {withSuspenseComponent, withSuspenseComponentStandartBG} from "./components/utils/Loading/Loading";

const {Header, Content, Footer, Sider} = Layout;

const Numbers = withSuspenseComponentStandartBG(React.lazy(() => import('./components/Numbers/Numbers').then(({Numbers}) => ({default: Numbers}))));
const Animals = withSuspenseComponentStandartBG(React.lazy(() => import('./components/Animals/Animals').then(({Animals}) => ({default: Animals}))));
const Jokes = withSuspenseComponent(React.lazy(() => import('./components/Jokes/Jokes').then(({Jokes}) => ({default: Jokes}))));
const Draw = withSuspenseComponentStandartBG(React.lazy(() => import('./components/Draw/Draw').then(({Draw}) => ({default: Draw}))));
const Advices = withSuspenseComponent(React.lazy(() => import('./components/Advices/Advices').then(({Advices}) => ({default: Advices}))));
const AboutMe = withSuspenseComponent(React.lazy(() => import('./components/AboutMe/AboutMe').then(({AboutMe}) => ({default: AboutMe}))));

const App = React.memo(() => {
    const [collapsed, onCollapse] = useState(false);
    return (
        <div className="App">
            <Layout style={{minHeight: '100vh'}} hasSider={true}>
                <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} breakpoint={"lg"} collapsedWidth={50}
                onBreakpoint={(broken) => {console.log(broken)}}>
                    <div className="logo"/>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" icon={<HomeOutlined/>}>
                            <Link to={"/"}>Home</Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<UserOutlined/>}>
                            <Link to={"/about-me"}>About me</Link>
                        </Menu.Item>
                        <Menu.Item key="6" icon={<FieldNumberOutlined/>}>
                            <Link to={"/numbers"}>Цифро Факты</Link>
                        </Menu.Item>
                        <Menu.Item key="7" icon={<GithubOutlined/>}>
                            <Link to={"/animals"}>Котеки</Link>
                        </Menu.Item>
                        <Menu.Item key="8" icon={<SmileOutlined/>}>
                            <Link to={"/jokes"}>Шутки и Аниме</Link>
                        </Menu.Item>
                        <Menu.Item key="9" icon={<BulbOutlined/>}>
                            <Link to={"/advices"}>Советы</Link>
                        </Menu.Item>
                        <Menu.Item key="10" icon={<EditOutlined />}>
                            <Link to={"/draw"}>Draw</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Switch>
                        <Route exact path={"/"} component={Home}/>
                        <Route exact path={"/about-me"} component={AboutMe}/>
                        <Route exact path={"/animals"} component={Animals}/>
                        <Route exact path={"/jokes"} component={Jokes}/>
                        <Route exact path={"/numbers"} component={Numbers}/>
                        <Route exact path={"/advices"} component={Advices}/>
                        <Route exact path={"/draw"} component={Draw}/>
                    </Switch>
                </Layout>
            </Layout>
        </div>
    );
})


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
