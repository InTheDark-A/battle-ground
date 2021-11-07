import React, {useEffect, useState} from "react";
import {Button, Space} from 'antd';
import {useFetch} from "../../utils/hooks";
import Title from "antd/es/typography/Title";
import styles from "./Advices.module.css";
import {LayoutBG} from "../utils/Loading/Loading";

export const Advices: React.FC = () => {
    const [advice, setAdvice] = useState("");
    const {loading, request} = useFetch("https://api.adviceslip.com");

    const getAdvice = async () => {
        const data = await request("/advice");
        setAdvice(data?.slip?.advice);
    };
    useEffect(() => {
        getAdvice();
    }, [])

    return (
        <LayoutBG className={styles.block}>
            <Space direction={"horizontal"} align={"center"} wrap={true}>
                <Button loading={loading} onClick={() => getAdvice()} style={{fontSize: "2em", height: "auto"}}>
                    Совет
                </Button>
                <Title level={2} style={{color:"white"}}>
                    {advice}
                </Title>
            </Space>
        </LayoutBG>
    )
}



