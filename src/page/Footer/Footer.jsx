import React from "react";

class Footer extends React.Component {

    scrollToAnchor = (anchorName) => {
        if (anchorName) {
            // 找到锚点
            let anchorElement = document.getElementById(anchorName);
            // 如果对应id的锚点存在，就跳转到锚点
            if(anchorElement) { anchorElement.scrollIntoView({block: 'start', behavior: 'smooth'}); }
        }
    }

    render() {
        return (
            <footer className="footer" style={{position:"fixed",bottom:"0",width:"100%"}}>
                <div className="container">
                    <p>&copy; 2020 <a href="">@Miracle</a> &nbsp; <a>版权所有</a> &nbsp;</p>
                </div>
                <div><a className="gotop" onClick={()=>this.scrollToAnchor("top")}/></div>
            </footer>
        );
    }
}

export {Footer}