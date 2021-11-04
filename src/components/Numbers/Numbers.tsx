import React, {useEffect, useState} from "react";
import {ApiNumber} from "../../services/Api";
import {Button, Divider, Input, Space} from 'antd';
import Title from "antd/lib/typography/Title";
import styles from "./Numbers.module.css";
import Paragraph from "antd/es/typography/Paragraph";

function getRandomNum(max: number, min: number) {
    max += min;
    return Math.floor(Math.random() * max - min);
}

export const Numbers: React.FC = () => {
    const [text, changeText] = useState("");
    const [trigger, result] = ApiNumber.useLazyGetFactQuery();
    const {data, isLoading, isError} = result;

    useEffect(() => {
        if (!text.length)
            return
        trigger(text);
    }, [text])

    return <div className={styles.numbers} prefix={styles.numbers}>
        <Title>Факт по цифре</Title>
        <Space size={0}>
            <Input placeholder="Пиши цифру!" value={text} onChange={(value) => changeText(value.target.value)}/>
            <Button onClick={() => changeText(getRandomNum(1000, 1000).toString())}>Взять рандомный число</Button>
        </Space>
        <Divider/>
        {isError ? <Title level={2} type={"danger"}>
            Тебе ведь по-русски сказано, факт по цифре.<br/>
            Зачем ты сюда свои букавы суешь ?</Title> : ""}
        {isLoading && "Загрузка"}
        {!isError && <Title style={{maxWidth: '700px'}} level={3}>{data}</Title>}
    </div>
}

