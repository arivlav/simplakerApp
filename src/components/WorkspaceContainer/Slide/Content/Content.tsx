import React from 'react';
import c from './Content.module.css';
import Circle from './Circle/PrimitiveCircle';
import Rectangle from './Primitive/PrimitiveRectangle';
import Triangle from './Primitive/PrimitiveTriangle';


/* type ContentProps = {
    className: string,
} */

type ContentProps = {
    viewBox: string,
    widthContent: string,
    heightContent: string
}

function Content(props: ContentProps) {
    return (
        <div >
            <svg className={`${c.content}`} xmlns="http://www.w3.org/2000/svg" version="1.1"
                fill-rule="evenodd" fill="none" stroke="none" stroke-linecap="square" stroke-miterlimit="10"
                overflow="hidden" preserveAspectRatio="none" viewBox={props.viewBox} width={props.widthContent} height={props.heightContent} >
                <g>
                    <ellipse rx="40" ry="40" cx="200" cy="200" fill="red" stroke="blue" stroke-width="2" />
                </g>
                <g className="s">
                    <rect width="80" height="80" x="450" y="135" rx="0" ry="0" fill="#8B0000" stroke="green" stroke-width="6" />
                </g>
                <g>
                    <polygon points="2,80 40,2 80,80" fill="#C71585" stroke="#008080" stroke-width="2" />
                </g>
                <Circle />
                <Rectangle />
                <Triangle />
            </svg>
        </div>
    );
}

export default Content;

