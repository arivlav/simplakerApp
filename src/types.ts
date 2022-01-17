type Editor = {
    readonly mode: Mode;
    readonly presentation: Presentation;
}

type Mode = "view" | "edit";

type Identifier = string; //А почему не сразу стринг там, где нужен id? Тут особая какая то строка будет. Все строки по какому-то шаблону 

// type Palette = {
//     readonly currentColor: string;
//     colorList: Array<string>; //здесь перечислим цвета 
// }

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
    //selectedContents: Array<Identifier>; //для записи выбранных элементов на странице
}

type BackgroundImage = {
    value: "backgroundImage";
    backgroundImage: string;
}

type BackgroundColor = {
    value: "backgroundColor";
    backgroundColor: string;
}

type Background = BackgroundImage | BackgroundColor;

type Content = {
    id: Identifier;
    coordinates: Point;
    width: number;
    height: number;
    type: ContentType;
    zIndex: number;        
}

type ContentType = Image | Primitive | TextBox;

type Image = {
    imagePath: string;
}

type Primitive = {
    type: PrimitiveType;
    strokeColor: string;
    fillColor: string;
    strokeWeight: number;
}

type PrimitiveType = "circle" | "triangle" | "rectangle";

type Point = {
    x: number;
    y: number;
}

type TextBox = {
    value: string;
    fontFamily: string;
    fontColor: string;
    fontSize: number;
    fontStyle: FontStyle; //вынести в тип. Done
}   

type FontStyle = "italic" | "bold" | "underline"; 

// Export
// Undo
// Redo

export type {
    Editor,
    Mode,
    Identifier,
    // Palette,
    Presentation,
    Slide,
    BackgroundImage,
    BackgroundColor,
    Background,
    Content,
    ContentType,
    Image,
    Primitive,
    PrimitiveType,
    Point,
    TextBox,
    FontStyle
};