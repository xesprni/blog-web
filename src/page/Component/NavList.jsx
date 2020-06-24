import React from "react";

class NavList extends React.Component{

    render() {
        return (
            <div className="pageside">
                <div className="pagemenus">
                    <ul className="pagemenu">
                        <li><a href="links.html">友情链接</a></li>
                        <li><a href="tags.html">关于我</a></li>
                        <li><a href="tags.html">时光轴</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export {NavList};