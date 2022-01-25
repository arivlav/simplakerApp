import React from 'react';
import { Content, Identifier, Point } from "src/types"

export const SLIDE_HEIGHT = 900;
export const SLIDE_WIDTH = 1600;
export const SCREEN_RATIO = 56.25;

export const useResize = (myRef: React.MutableRefObject<HTMLDivElement>) => {
    const [width, setWidth] = React.useState(0)
    const [height, setHeight] = React.useState(0)

    React.useEffect(() => {
        setWidth(myRef.current.clientWidth)
        setHeight(myRef.current.clientHeight)
        const handleResize = () => {
            setWidth(myRef.current.offsetWidth)
            setHeight(myRef.current.offsetHeight)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [myRef])

    return { width, height }
}

export const useDragAndDrop = (myRef: React.MutableRefObject<HTMLDivElement>, ratio: number, content: Content, setContentCoordinates: Function): Point => {
    const [newCoord, setCoord] = React.useState({x: 0, y: 0});
    React.useEffect(() => {
        const currentContent = myRef.current;
        let startPos: Point;
        let newPos: Point;
        function handleMouseDown(e: MouseEvent): void {
            startPos = {
                x: e.pageX,
                y: e.pageY,
            };
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseup", handleMouseUp);
        }

        function handleMouseMove(e: MouseEvent): void {
            if (!e.defaultPrevented) {
                const delta = {
                    x: e.pageX - startPos.x,
                    y: e.pageY - startPos.y
                }
                newPos = {
                    x: ratio * content.coordinates.x + delta.x,
                    y: ratio * content.coordinates.y + delta.y
                }

                setCoord(newPos);

                if (currentContent !== undefined && currentContent !== null) {
                    currentContent.style.left = String(newPos.x) + 'px';
                    currentContent.style.top = String(newPos.y) + 'px';
                }
            }
        }

        function handleMouseUp(): void {
            //setContentCoordinates(newPos.x/ratio, newPos.y/ratio);
            // console.log('ушло ' + newPos.x/ratio + ' ' + newPos.y/ratio);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        }

        if (currentContent !== undefined)
            currentContent.addEventListener("mousedown", handleMouseDown);

        return () => {
            if (currentContent) {
                currentContent.removeEventListener("mousedown", handleMouseDown);
            }
        };
    }, [myRef]);
    console.log(newCoord);
    return newCoord;
}

export function generateIdentifier(): Identifier {
    return (new Date()).toISOString();
}

export function isColor(color: string): boolean {
    const regExpColor = new RegExp('^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$');
    return regExpColor.test(color);
}  