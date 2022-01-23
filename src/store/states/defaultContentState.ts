import { generateIdentifier } from "src/helpers/editorHelper"
import { Content } from "src/types"

export const defaultContent: Content = {
    id: '',
    name: '',
    coordinates: {
        x: 10,
        y: 10,
    },
    width: 160,
    height: 90,
    type: {
        //dlya image
        imageUrl: '',
        //dlya promitives
        type: '',
        strokeColor: '',
        fillColor: '',
        strokeWeight: 2,
        //dlya texta
        text: 'Text',
        fontFamily: 'Arial',
        fontColor: '#0f0f0f',
        fontSize: 16,
        fontStyle: 'bold',
    },
    zIndex: 0,
}