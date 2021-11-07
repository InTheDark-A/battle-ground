import {useFetch} from "../../utils/hooks";
import {useEffect, useState} from "react";
import {Button, Space} from "antd";
import Title from "antd/es/typography/Title";
import styles from "./Jokes.module.css";
import {LayoutBG} from "../utils/Loading/Loading";

export const Jokes = () => {
    return (<LayoutBG>
        <Space direction={"vertical"} align={"start"}>
            <Anime/>
            <JokesInner/>
        </Space>
    </LayoutBG>)
}

export const JokesInner = () => {
    const [joke, setJoke] = useState("");
    const {loading, request, error, clearError} = useFetch("https://geek-jokes.sameerkumar.website");

    const getJoke = async () => {
        const data = await request("/api?format=json");
        setJoke(data.joke);
    };
    useEffect(() => {
        getJoke();
    }, [])

    return (<Space direction={"horizontal"} align={"center"} wrap={true} style={{maxWidth: "1000px"}}>
        <Button loading={loading} onClick={() => getJoke()} style={{fontSize: "2em", height: "auto"}}>
            Шутка
        </Button>
        <Title level={2}>
            {joke}
        </Title>
    </Space>)
};

export const Anime = () => {
    const [anime, setAnime] = useState<any>({});
    const {loading, request, error, clearError} = useFetch("https://animechan.vercel.app/api");

    const getAnime = async () => {
        const data = await request("/random");
        setAnime(data);
    };
    useEffect(() => {
        getAnime();
    }, [])

    return (<Space direction={"horizontal"} align={"center"} wrap={true}>
        <Button loading={loading} onClick={() => getAnime()} style={{fontSize: "2em", height: "auto"}}>
            Аниме
        </Button>
        <Title level={2} style={{maxWidth: "1000px"}}>
            <div style={{color: "#120338"}}>
                {anime?.quote}
            </div>
            <div style={{
                display: "grid",
                gridTemplateColumns: "auto auto",
                fontSize: "0.8em",
                color: "#003a8c",
                opacity: 0.8
            }}>
                {anime?.anime &&
                <>
                    <div style={{marginRight: "20px"}}>Аниме: {anime?.anime}</div>
                    <div style={{justifySelf: "end"}}>Персонаж: {anime?.character}</div>
                </>
                }
            </div>
        </Title>
    </Space>)
};



