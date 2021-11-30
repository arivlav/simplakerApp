import { Slide } from "src/types"
import { generateIdentifier } from "src/helpers/editorHelper"

export const defaultSlide: Slide  = {
    id: generateIdentifier(),
    background: {
        value: "backgroundColor",
        backgroundColor: "#ffffff"
    },
    contentList: [],
} 