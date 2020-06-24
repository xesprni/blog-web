import React from "react";
import {NavList} from "../Component/NavList";


class Abouts extends React.Component {


    render() {
        return (
            <div className="user-select">
                <div className="container container-page">
                    <NavList/>
                    <div className="content">
                        <header className="article-header">
                            <h1 className="article-title">About Me</h1>
                        </header>
                    </div>
                </div>
            </div>
        );
    }
}

export {Abouts};