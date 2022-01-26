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

export const useDragAndDrop = (myRef: React.MutableRefObject<HTMLDivElement>, ratio: number, content: Content, setCoord: Function, setContentCoordinates: Function) => {
    const startPos = React.useRef({x: 0, y: 0});
    const newPosition = React.useRef({x: content.coordinates.x, y: content.coordinates.y});

    React.useEffect(() => {
        const currentContent = myRef.current;
        if (currentContent !== undefined)
            currentContent.addEventListener("mousedown", handleMouseDown);

        return () => {
            if (currentContent) {
                currentContent.removeEventListener("mousedown", handleMouseDown);
            }
        };
    }, [myRef]);    

    function handleMouseDown(e: MouseEvent): void {
        startPos.current.x = e.pageX;
        startPos.current.y = e.pageY;
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    }
    

    function handleMouseMove(e: MouseEvent): void {
        e.preventDefault();
            const delta = {
                x: e.pageX - startPos.current.x,
                y: e.pageY - startPos.current.y
            }
            const newPlace = {
                x: ratio * content.coordinates.x + delta.x,
                y: ratio * content.coordinates.y + delta.y
            }

            setCoord(newPlace);
            newPosition.current = newPlace;
        
    }

    function handleMouseUp(): void {
        console.log('работа');
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
        setContentCoordinates({x: newPosition.current.x/ratio, y: newPosition.current.y/ratio});
    }
}

export function generateIdentifier(): Identifier {
    return (new Date()).toISOString();
}

export function isColor(color: string): boolean {
    const regExpColor = new RegExp('^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$');
    return regExpColor.test(color);
}  