import React from "react";
import { Carousel } from 'antd';
import './css/caroursel.css'

class HeadCarousel extends React.Component{
    render() {
        return (
            <Carousel autoplay style={{marginBottom:20}}>
                <div>
                    <h3>海内存知己，天涯若比邻</h3>
                </div>
                <div>
                    <h3>闲时与你立黄昏，灶前笑问粥可温</h3>
                </div>
                <div>
                    <h3>赌书消得泼茶香,当时只道是寻常</h3>
                </div>
            </Carousel>
        );
    }

}

export {HeadCarousel}