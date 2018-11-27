import './index.less';
import React, { Component } from 'react';
import SliderRight from '../components/slider/index';
import Nav from '../components/nav/nav';
import { Layout, BackTop } from 'antd';
const { Content, Footer, Sider } = Layout;
class Layouts extends Component {
  render() {
    return (
      <div id="Layout">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default Layouts
