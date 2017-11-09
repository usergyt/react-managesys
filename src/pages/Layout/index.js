import React from 'react';
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Layout, Affix, Row, Col } from 'antd';
import { Route, Redirect } from 'react-router-dom';

import { childRoutes } from '@/router'

import NavPath from '@/components/NavPath'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'
import {fetchProfile, logout} from '@/redux/actions/auth';

import './index.less';

const { Content } = Layout;

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { actions } = this.props;
    actions.fetchProfile();
    let height=document.documentElement.clientHeight
    this.setState({height:height})
   }

  render() {
    const { auth, navpath, actions } = this.props;

    return (
      <div style={{height:this.state.height}}>
      <Layout className="ant-layout-has-sider">
        <Sidebar />
        <Layout>
          <Header profile={auth} logout={actions.logout} />
          <Content style={{ margin: '0 16px' }}>
            <NavPath data={navpath} />
            <div style={{ minHeight: 360 }}>
              <Redirect to="/test" />
              {childRoutes.map((route, index) => (
                <Route key={index} path={route.path} component={route.component} exactly={route.exactly} />
              ))}
            </div>
          </Content>
          <Footer />
        </Layout>
      </Layout>
      </div>
    );
  }
}

App.propTypes = {
  auth: PropTypes.object,
  navpath: PropTypes.array
};

const mapStateToProps = (state) => {
  const { auth, menu } = state;
  console.log(state)
  return {
    auth: auth ? auth : null,
    navpath: menu.navpath
  };
};

function mapDispatchToProps(dispatch) {
  return { 
    actions: bindActionCreators({ fetchProfile, logout }, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
