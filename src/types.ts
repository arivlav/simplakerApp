type Editor = {
    readonly mode: Mode;
    readonly presentation: Presentation;
}

type Mode = "view" | "edit";

type Identifier = string;

type Presentation = {
    title: string;
    activeSlide: Identifier;
    slideList: Array<Slide>;
    selectedSlides: {
        selectedMode: boolean,    
        selectedSlides: Array<Identifier>,
    }
}

type Slide = {
    id: Identifier;
    background: Background;
    contentList: Array<Content>;
    activeContent: string; 
}

type Background = {
    type: string;
    value: string;
}    

type Content = {
    id: Identifier;
    name: string;
    coordinates: Point;
    width: number;
    height: number;
    type: ContentType;
    zIndex: number;        
}

type ContentType = Image & Primitive & TextBox;

type Image = {
    imageUrl: string;
}

type Primitive = {
    type: string;
    strokeColor: string;
    fillColor: string;
    strokeWeight: number;
}

type Point = {
    x: number;
    y: number;
}

type TextBox = {
    text: string;
    fontFamily: string;
    fontColor: string;
    fontSize: number;
    fontStyle: string;
}    

export type {
    Editor,
    Mode,
    Identifier,
    Presentation,
    Slide,
    Background,
    Content,
    ContentType,
    Image,
    Primitive,
    Point,
    TextBox,
};