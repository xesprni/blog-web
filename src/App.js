import React from 'react';
import './App.css';
import './css/bootstrap.min.css'
import './css/nprogress.css'
import './css/style.css'
import './css/font-awesome.min.css'
import './images/icon/favicon.ico';
import {Header} from "./page/Header/Header";
import {Footer} from "./page/Footer/Footer";

class App extends React.Component {
    render() {
        return (
            <div className="user-select">
                <Header/>
                <div  style={{minHeight:document.documentElement.clientHeight - 140}}>
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        );
    }
}

export {App};
