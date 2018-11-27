import './index.less'
import logo from '../../assets/logo.png';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Layout, Icon, Menu, Row, Col, Button} from 'antd';
// import Register from '../register/register';
// import Login from '../login/login';

const {Header} = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: null,
            menuCurrent: '',
            login: false,
            register: false,
            nav: '首页'
        };
    }

    render() {
        return (
            <div className="left">
                <Header
                    className="header"
                    style={{
                        position: 'fixed',
                        zIndex: 1,
                        top: 0,
                        width: '100%',
                        minWidth: '1200px',
                        height: '66px',
                        float: 'left',
                        backgroundColor: 'white',
                        borderBottom: '1px solid #eee',
                    }}
                >
                    <Row className="container">
                        <Col style={{width: '120px', float: 'left'}}>
                            <a href="http://biaochenxuying.cn/main.html">
                                <div className="logo ">
                                    <img src={logo} alt=""/>
                                </div>
                            </a>
                        </Col>
                        <Col style={{width: '780px', float: 'left'}}>
                            <Menu
                                theme="light"
                                mode="horizontal"
                                defaultSelectedKeys={['1']}
                                onClick={this.handleMenu}
                                selectedKeys={[this.state.menuCurrent]}
                                style={{lineHeight: '64px', borderBottom: 'none'}}
                            >
                                <Menu.Item key="1">
                                    <Link to="/home">
                                        <Icon type="home" theme="outlined"/>首页
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Link to="/hot">
                                        <Icon type="fire" theme="outlined"/>热门
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <Link to="/timeLine">
                                        <Icon type="hourglass" theme="outlined"/>时间轴
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="4">
                                    <Link to="/message">
                                        <Icon type="message" theme="outlined"/>留言
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="5">
                                    <Link to="/about">
                                        <Icon type="user" theme="outlined"/>关于
                                    </Link>
                                </Menu.Item>
                            </Menu>
                        </Col>
                    </Row>

                </Header>
            </div>
        )
    }
}

export default Nav;