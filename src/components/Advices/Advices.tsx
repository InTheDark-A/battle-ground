import React, {useEffect, useState} from "react";
import {Button, Space} from 'antd';
import {useFetch} from "../../utils/hooks";
import Title from "antd/es/typography/Title";
import styles from "./Advices.module.css";
import {LayoutBG} from "../utils/Loading/Loading";
import {useAppDispatch, useAppSelector} from "../../utils/reduxHooks";
import {appSlice} from "../../redux/appSlice";

const actions = appSlice.actions;

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
                <Title level={2} style={{color: "white"}}>
                    {advice}
                </Title>
            </Space>
            <Quotes />
        </LayoutBG>
    )
};

const Quotes = () => {
    const quotes = useAppSelector((state) => state.appReducer.quotes);
    const dispatch = useAppDispatch();
    const UIQuotes = quotes.map((e) => <div onClick={() => {
        console.log("1")
        dispatch(actions.likeQuote(e))
    }}>{e.quote} {e.author} {e.likes}</div>)
    return <Space direction={"horizontal"} align={"center"} wrap={true}>
        {/*<Button onClick={() => getAdvice()} style={{fontSize: "2em", height: "auto"}}>*/}
        {/*    Совет*/}
        {/*</Button>*/}
        <Title level={2} style={{color: "white"}}>
            {UIQuotes}
        </Title>
    </Space>
}



