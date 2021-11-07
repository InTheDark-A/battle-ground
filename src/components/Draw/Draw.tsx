import React, {useEffect, useRef} from "react";
import "./Draw.css";
import {Button, Slider} from "antd";
// @ts-ignore-block
const Func = (e: KeyboardEvent) => {
    if (e.code === "KeyR") {
        // @ts-ignore
        console.log(ctx);
    }
};
let color = "black";
let lineWidth = 10;

export const Draw: React.FC = () => {
    const ref = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if (!ref.current)
            return;
        Canvas(ref.current)
        //todo: Возможно стоит удалить события
        return () => {
            document.removeEventListener("keydown", Func);
        };
    }, [ref.current])
    return (
        <>
            <div style={{position: "absolute"}}>
                <Slider defaultValue={lineWidth} onChange={(e) => {lineWidth = e}}/>
                <input  type={"color"} onChange={(e) => {
                    color = e.target.value;
                }}/>
                <Button onClick={() => {
                    color = "#a8c1f8"
                }}>Цвет фона</Button>
            </div>
            <canvas style={{width: "100%", height: "100%", display: "block"}} ref={ref}/>
        </>
    )
}

function Canvas(canvas: HTMLCanvasElement) {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    let isMouthDown = false;
    let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    if (!ctx)
        throw Error("2д контекст не взять")
    ctx.fillStyle = color;
    ctx.lineWidth = lineWidth;
    canvas.addEventListener('mouseup', () => {
        ctx.beginPath();
        isMouthDown = false;
    })
    canvas.addEventListener('mousedown', () => {
        ctx.closePath();
        isMouthDown = true;
    })
    canvas.addEventListener("mouseleave", (e) => {
        isMouthDown = false;
        ctx.closePath();
    })
    canvas.addEventListener('mousemove', function (e) {
        if (isMouthDown) {
            ctx.fillStyle = color;
            ctx.strokeStyle = color;
            ctx.lineWidth = lineWidth;
            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(e.offsetX, e.offsetY, lineWidth / 2, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(e.offsetX, e.offsetY);
        }
    });
    document.addEventListener("keydown", (e: KeyboardEvent) => {
        if (e.code === "KeyR") {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
        if (e.code === "KeyZ") {

        }
    })

    // window.onresize = function () {
    //     canvas.width = canvas.offsetWidth;
    //     canvas.height = canvas.offsetHeight;
    // }
}

