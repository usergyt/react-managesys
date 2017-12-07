import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input, Button, Row, Col, Icon, message } from 'antd'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { login } from '@/redux/actions/auth'

const FormItem = Form.Item

// import './index.less'

const propTypes = {
  user: PropTypes.object,
  loggingIn: PropTypes.bool,
  loginErrors: PropTypes.string
};

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      name: "",
      password: "",
      code: "",
      nameError: "",
      passwordError: "",
      validationMsg: "",
      closeEye: true
    }
  }
  componentWillReceiveProps(nextProps) {
     const { user ,loginErrors} = nextProps;
    const { router } = this.props;
    if (user) {   // 判断是否登陆
        localStorage.setItem('user', JSON.stringify(user));
        this.props.history.replace('/home');
     }
     if(loginErrors){
      message.error(loginErrors);
      
     }
   }
  handleName = (e) => {
    let value = e.target.value;
    let error = "";
    if (value.length < 10) {
      error = "请输入正确的账号！";
    }
    this.setState({
      name: value,
      nameError: error,
      validationMsg: error
    });
  }
  handlePassword = (e) => {
    let value = e.target.value;
    let error = "";
    if (value.length < 10) {
      error = "请输入正确的密码！";
    }
    this.setState({
      password: value,
      passwordError: error,
      validationMsg: error
    });
  }
  handleCode = (e) => {
    let value = e.target.value;
    let error = "";
    if (value.length < 4) {
      error = "请输入正确的验证码！";
    }
    this.setState({
      code: value,
      codeError: error,
      validationMsg: error

    });
  }
  clearName = () => {
    this.setState({
      name: "",
    });
  }
  isCloseEye = () => {
    let isEye = this.state.closeEye
    this.setState({
      closeEye: !isEye
    });
  }
  loginSubmit = (e) => {
    this.setState({
      loading: true
    });
    this.props.login(this.state.name, this.state.password)
      
  }

  toRegister() {
    this.props.history.replace('/register');
  }

  render() {
     return (
      <div className="login-wapper">
        <div className="login-header">
          <img src={require('../../assets/images/applogo.png')} />
        </div>
        <div className="login-content">

          <div className="login-box">
            <div className="login-content-title">
              <h3>登录</h3>
            </div>
            <div className={this.state.nameError ? 'login-form  error-active' : 'login-form'}>
              <div className="form-group-item">
                <label className="login-label width68">用户名：</label>
                <input className="no-border login-input width245 pr35" type="text" placeholder="邮箱/手机号" name='intro' id='intro' value={this.state.name} onChange={this.handleName} />

                <div className="login-bottom-line" />

                <i className="rsjf-icon rsjf-icon-input-close" onClick={this.clearName} />
              </div>
            </div>
            <div className={this.state.passwordError ? 'login-form  error-active' : 'login-form'}>
              <div className="form-group-item">
                <label className="login-label width68">密码：</label>
                <input className="no-border .input login-input width245 pr35" type={this.state.closeEye ? 'password' : 'text'} placeholder="8-18位的字母和数组组合" name='password' id='password' value={this.state.password} onChange={this.handlePassword} />
                <div className="login-bottom-line"></div>
                <i className="rsjf-icon rsjf-icon-input-close-eyes " onClick={this.isCloseEye} />

              </div>
            </div>
            <div className={this.state.codeError ? 'login-form mb0 error-active' : 'login-form mb0'}>
              <div className="form-group-item">
                <label className="login-label width68">验证码：</label>
                <input className="no-border login-input width245 pr35" type="text" maxLength="4" placeholder="请输入验证码" name='code' id='code' value={this.state.code} onChange={this.handleCode} /><div className="login-bottom-line"></div>
                <i className="rsjf-icon rsjf-icon-input-close"></i>
                <img className="login-img" src="http://120.26.100.69:8145/filesServer/downLoad/temp/054280f33c8a4620bd431edb64e40c96.jpg" />

              </div>
            </div>
            <div className="row">
              {this.state.validationMsg ? <div className="rsjf-input-error-info position-absolute col-lg-12 error-info-container ">
                <i className="rsjf-icon error-close-icon"></i>
                <span>{this.state.validationMsg}</span>
              </div> : null}
            </div>

            <div className="login-button-container">
              <button className="rsjf-btn rsjf-btn-primary rsjf-btn-lg  col-lg-12 col-md-12 col-sm-12 col-xs-12" disabled={this.state.loading} onClick={this.loginSubmit}>
                {this.state.loading ? "登陆中..." : "登陆"}
              </button>
            </div>
            <div className="text-right login-link">
              <a href="">忘记密码？</a>
            </div>
          </div>

        </div>
        <div className="login-footer text-center">
          <span className="login-copyright">Copyright©2015 融数金服 辽ICP备15009643号</span>
          <span className="login-tel hide">客服电话:400-000-0000</span>
          <span className="login-work-time hide">周一至周五：9：00 - 20：00</span>
        </div>
      </div>


    )
  }
}

function mapStateToProps(state) {
  const { auth } = state;
  if (auth.user) {
    return { user: auth.user, loggingIn: auth.loggingIn, loginErrors: '' };
  }

  return { user: null, loggingIn: auth.loggingIn, loginErrors: auth.loginErrors };
}

function mapDispatchToProps(dispatch) {
  return {
    login: bindActionCreators(login, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
