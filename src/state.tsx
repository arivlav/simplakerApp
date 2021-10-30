import { type } from "os";
import {EditorType} from "./types";
// import {Palette} from "./types";
// import {Background} from "./types";


// let EditorState: EditorType = {
//     mode: "edit",   
//     // chronicle: Chronicle;
//     palette: {
//         currentColor: "#FFD700",
//         colorList: ["#FFD700", "#C71585", "#008080"]
//     },
//     // selectedSlides: Array<Identifier>;
//     presentation: {
//         title: "New presentation",
//         slideList: [
//             {id: "1", background: {value: "backgroundColor", backgroundColor: "#FFF"}, contentList:[],}
//         ]
//     }
// }

// // type Chronicle = {
// //     undo: Array<EditorType>;
// //     redo: Array<EditorType>;
// // }

// // type Mode = "view" | "edit";

// // type Identifier = string; //А почему не сразу стринг там, где нужен id? Тут особая какая то строка будет. Все строки по какому-то шаблону 

// // type Palette = {
// //     readonly currentColor: string;
// //     colorList: Array<string>; //здесь перечислим цвета 
// // }

// type Presentation = {
//     title: string;
//     slideList: Array<Slide>;
// }

// type Slide = {
//     id: Identifier;
//     background: Background;
//     contentList: Array<Content>; 
//     selectedContents: Array<Identifier>; //для записи выбранных элементов на странице
// }

// type BackgroundImage = {
//     value: "backgroundImage";
//     backgroundImage: string;
// }

// type BackgroundColor = {
//     value: "backgroundColor";
//     backgroundColor: string;
// }

// type Background = BackgroundImage | BackgroundColor;

// type Content = {
//     id: Identifier;
//     coordinates: Point;
//     width: number;
//     height: number;
//     type: ContentType;
//     zIndex: number;        
// }

// type ContentType = Image | Primitive | TextBox;

// type Image = {
//     imagePath: string;
// }

// type Primitive = {
//     type: PrimitiveType;
//     strokeColor: string;
//     fillColor: string;
//     strokeWeight: number;
// }

// type PrimitiveType = "circle" | "triangle" | "rectangle";

// type Point = {
//     x: number;
//     y: number;
// }

// type TextBox = {
//     value: string;
//     fontFamily: string;
//     fontColor: string;
//     fontSize: number;
//     fontStyle: FontStyle; //вынести в тип. Done
// }   

// type FontStyle = "italic" | "bold" | "underline"; 



// // Export
// // Undo
// // Redo

// export {EditorState};
export {};