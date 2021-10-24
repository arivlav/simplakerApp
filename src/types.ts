type Editor = {
    readonly mode: Mode;   //Вынести в тип. Done
    readonly chronicle: Chronicle;
    readonly palette: Palette;
    //если в селектид слайд один слайд, то он работает, как текущий, и можно выбирать контент
    //если выбрано более одного слайда, то выбор контента слетает.

    readonly selectedSlides: Array<Identifier>;  //сюда записываются выбранные несколько слайдов
    readonly presentation: Presentation;
}

type Chronicle = {
    undo: Array<Editor>;
    redo: Array<Editor>;
}

type Mode = "view" | "edit";

type Identifier = string; //А почему не сразу стринг там, где нужен id? Тут особая какая то строка будет. Все строки по какому-то шаблону 

type Palette = {
    readonly currentColor: string;
    colorList: Array<string>; //здесь перечислим цвета 
}

type Presentation = {
    title: string;
    slideList: Array<Slide>;
}

type Slide = {
    id: Identifier;
    background: Background;
    contentList: Array<Content>; 
    selectedContents: Array<Identifier>; //для записи выбранных элементов на странице
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

type ContentType = Image | Primitive | Message;

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

type Message = {
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