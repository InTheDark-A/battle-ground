import React, {ReactChildren, ReactElement, Suspense} from "react"
import {Button} from "antd";
import {Content, Footer} from "antd/lib/layout/layout";
import {Header} from "antd/es/layout/layout";


export function withSuspenseComponentStandartBG<WCP>(Component: React.ComponentType<WCP>) {
    return (props: WCP) => {
        return <LayoutBG>
            <Suspense fallback={<Loading/>}><Component {...props}/></Suspense>
        </LayoutBG>;
    }
};

export function withSuspenseComponent<WCP>(Component: React.ComponentType<WCP>) {
    return (props: WCP) => {
        return <Suspense fallback={<Loading/>}><Component {...props}/></Suspense>;
    }
}

export const LayoutBG = ({children, className}: { children: ReactElement | React.ReactNode, className?: string | undefined }) => {
    if (!className) {
        className = "site-layout-background site-layout-background_changed";
    }
    return <>
        <Header/>
        <Content style={{padding: '16px'}}
                 className={className}>
            {children}
        </Content>
        <Footer style={{textAlign: 'center'}}>©Турникет Шашахметов</Footer>
    </>
}



export const Loading = () => {
    return (<Button loading={true}/>)
}