import React from 'react';
import { Identifier } from "src/types"

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

export function generateIdentifier(): Identifier {
    return (new Date()).toISOString();
}

export function isColor(color: string): boolean {
    const regExpColor = new RegExp('^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$');
    return regExpColor.test(color);
}  