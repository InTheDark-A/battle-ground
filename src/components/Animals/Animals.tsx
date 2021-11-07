import {FC, useEffect} from "react";
import {ApiAnimals} from "../../services/Api";
import {Button, Image, Space} from "antd";

export const Animals: FC<any> = () => {
    const [trigger, result] = ApiAnimals.useLazyGetPictureQuery();
    const {data, isLoading, isError} = result;
    useEffect(() => {
        trigger("")
    },[])
    return <Space  direction={"vertical"}>
        <Button disabled={isLoading} onClick={() => {trigger("")}}>Загрузить другую картинку</Button>
        <div>
            {isLoading && "Загрузка"}
            <Image src={data?.file} />
        </div>
    </Space>
}