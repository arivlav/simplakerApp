import { setMaxListeners } from 'process';
import React from 'react';
import { setCoordinates } from 'src/store/actionCreators/editorAction';
import { store } from 'src/store/store';
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

export const useDragAndDrop = (myRef: React.MutableRefObject<HTMLDivElement>, ratio: number, content: Content) => {
    let newPos: Point = {
        x: content.coordinates.x,
        y: content.coordinates.y
    };

    React.useEffect(() => {
        const currentContent = myRef.current;

        let startPos: Point;


        function handleMouseDown(e: MouseEvent): void {
            startPos = {
                x: e.pageX,
                y: e.pageY,
            };
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
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

                if (currentContent !== null) currentContent.style.left = String(newPos.x) + 'px';
                if (currentContent !== null) currentContent.style.top = String(newPos.y) + 'px';
            }
        }

        function handleMouseUp(): void {
            if (newPos) {
                //store.dispatch(setCoordinates(content.id, newPos.x/ratio, newPos.y/ratio));
            }
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        if (currentContent != null)
            currentContent.addEventListener("mousedown", handleMouseDown);

        return () => {
            if (currentContent) {
                currentContent.removeEventListener("mousedown", handleMouseDown);
            }
        };
    }, [myRef]);
}

export function generateIdentifier(): Identifier {
    return (new Date()).toISOString();
}

export function isColor(color: string): boolean {
    const regExpColor = new RegExp('^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$');
    return regExpColor.test(color);
}  