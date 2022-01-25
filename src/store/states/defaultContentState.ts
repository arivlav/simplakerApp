import { Content } from "src/types"

export const defaultContent: Content = {
    id: '',
    name: '',
    coordinates: {
        x: 10,
        y: 10,
    },
    width: 480,
    height: 270,
    type: {
        //dlya image
        imageUrl: '',
        //dlya promitives
        type: '',
        strokeColor: '#123456',
        fillColor: '#654321',
        strokeWeight: 2,
        //dlya texta
        text: 'Text text text еще текст asdfasd adsfasddafdsfasdfasd',
        fontFamily: 'Arial',
        fontColor: '#0f0f0f',
        fontSize: 16,
        fontStyle: 'bold',
    },
    zIndex: 0,
}