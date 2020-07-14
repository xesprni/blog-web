import React from "react";
import {fetch, post} from '@utils/HttpUtil.js';
import './login.css';
import {Form, Input, Button, Checkbox} from 'antd';

const FormItem = Form.Item;

class Login extends React.Component {

    componentDidMount() {
        if (window.localStorage.getItem("token")) {
            window.location.href="#/admin/editor"
        }
    }

    render() {
        return (
            <div className="login-page">
                <div className="login-content-wrap">
                    <div className="login-content">
                        <div className="login-box">
                            <div className="title">Welcome</div>
                            <LoginForm />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class LoginForm extends React.Component {
    state = {};

    onFinish = (obj) => {
        let url  = "/admin/login"
        post(url,obj).then(function (res) {
            if (res.flag) {
                window.localStorage.setItem("token", res.data);
                window.location.reload();
            }
        })
    }

    onFinishFailed = () => {

    }

    refreshVerifyCode=()=>{
        let img = document.getElementById("verifyImg");
        img.setAttribute("src", "http://www.miracle1874.com:8000/admin/getVerify"+"?"+Math.random());
    }
    componentDidMount() {
    }

    render() {

        const tailLayout = {
            wrapperCol: {
                offset: 10,
                span: 16,
            },
        };

        return (
            <Form
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}>
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}>
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}>
                    <Input.Password/>
                </Form.Item>
                <div style={{width:200,display:"inline-block"}}>
                    <Form.Item
                        label="图形验证码"
                        name="code"
                        rules={[
                            {
                                required: true,
                                message: 'Please input verify code!',
                            },
                        ]}>
                        <Input maxLength={4}/>
                    </Form.Item>
                </div>
                <div style={{display:"inline-block"}} onClick={this.refreshVerifyCode}>
                    <img id="verifyImg" src={`http://www.miracle1874.com:8000/admin/getVerify`} />
                </div>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}

export {Login, LoginForm};
