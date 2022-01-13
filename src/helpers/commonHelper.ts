import { Identifier } from "src/types";

export function returnSlideButtonsToOriginalState(): Array<Identifier> {
    const target = document.getElementsByClassName("btn btn_checklist btn_active").item(0) as HTMLButtonElement;
    target.className = "btn btn_checklist";
    document.getElementsByClassName("btn btn_add").item(0)?.removeAttribute('disabled');
    const slidesVisibleCheckboxes = document.querySelectorAll(".slide-miniature__checkbox_visible");
    let slidesIdentifires: Array<Identifier> = [];
    for (let i = 0; i < slidesVisibleCheckboxes.length; i += 1) {
        slidesVisibleCheckboxes[i].className = "slide-miniature__checkbox";
        const checkbox = slidesVisibleCheckboxes[i].firstElementChild as HTMLInputElement;
        if (checkbox !== null && checkbox.checked) {
            slidesIdentifires.push(checkbox.value); 
            checkbox.checked = false;
        }
    }
    return slidesIdentifires;
}