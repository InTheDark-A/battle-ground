import {Carousel, Space, Typography} from "antd";
import React, {CSSProperties} from "react";
import "./AboutMe.css";
import {LayoutBG} from "../utils/Loading/Loading";

function onChange(a: any) {
    console.log(a);
}

const contentStyle: CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    background: '#364d79',
    textAlign: "center"
};

export const AboutMe: React.FC = () => {

    return (
        <LayoutBG>
            <Info/>
            <div className='light x1'/>
            <div className='light x2'/>
            <div className='light x3'/>
            <div className='light x4'/>
            <div className='light x5'/>
            <div className='light x6'/>
            <div className='light x7'/>
            <div className='light x8'/>
            <div className='light x9'/>
        </LayoutBG>
    )
}


const Info = () => {
    return <div>
        <Carousel afterChange={onChange}>
            <div>
                <h3 style={contentStyle}>Это</h3>
            </div>
            <div>
                <h3 style={contentStyle}>Всего лишь</h3>
            </div>
            <div>
                <h3 style={contentStyle}>Крутой, но</h3>
            </div>
            <div>
                <h3 style={contentStyle}>Бесполезный слайдер</h3>
            </div>
        </Carousel>
        <Space>
            <Typography>
                <Typography.Paragraph>На момент написания 07.11.2021.
                    Я студент долбоёб, обучаюсь на ИРИТ-РТФ, звать бродягой, по жизне Шагиахметов Артур, иногда
                    Алёна.</Typography.Paragraph>
                <Typography.Paragraph>
                    Владею навыками: js, ts, css, scss, React, чуть-чуть c#, git, Ant-Design, Photoshop, Rest Api
                </Typography.Paragraph>
            </Typography>

        </Space>
    </div>;
}