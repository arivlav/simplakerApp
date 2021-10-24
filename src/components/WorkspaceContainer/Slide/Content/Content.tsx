import React from 'react';
import c from './Content.module.css';
import Circle from './Primitive/PrimitiveCircle';
import Rectangle from './Primitive/PrimitiveRectangle';
import Triangle from './Primitive/PrimitiveTriangle';
import TextBox from './TextBox/TextBox';
import Image from './Image/Image';




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
                <Circle />
                <Rectangle />
                <Triangle />
                <TextBox text="Съешь еще этих мягких французских булок, да выпей чаю"/>
                <Image href="/img/smpl_logo_violetred.svg"/>                
            </svg>
        </div>
    );
}

export default Content;

