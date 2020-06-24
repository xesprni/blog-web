import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <p>&copy; 2020 <a href="">@Miracle</a> &nbsp; <a>版权所有</a> &nbsp;</p>
                </div>
                <div><a className="gotop"/></div>
            </footer>
        );
    }
}

export {Footer}