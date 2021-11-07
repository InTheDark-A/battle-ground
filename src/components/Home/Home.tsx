import React from "react";
import Title from "antd/es/typography/Title";
import styles from "./Home.module.css";
import "./Home.css"
import {Content} from "antd/es/layout/layout";
import {LayoutBG} from "../utils/Loading/Loading";

export const Home: React.FC = () => {

    return (<LayoutBG>
        <Content style={{padding: '16px'}}
                             className="site-layout-background site-layout-background_changed"><Title
        style={{maxWidth: 1000, color: "lightgrey"}} className={styles.home}>
        Привет, это боевая площадка, испытания реактивного оружия против обычных работяг, здесь есть от рандомного
        факта по цифре, до милых котиков. Балуйся на здоровье</Title></Content>
    </LayoutBG>)
}