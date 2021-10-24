//Editor
    function createPresentation(): Editor {
        let newEditor: Editor = {}; //здесь параметры по умолчанию 
        return newEditor;
    }

    function savePresentation(): void {
        //сохраняем json file
    }

    function openPresentation(pathFile: string): Editor {
        let newEditor: Editor = {/*Сюда все из json*/};
        return newEditor;
    }

    function exportPresentation(editor: Editor): void {
        //экспортируем в pdf
    }

    function previewPresentation(): void {
        //организация демонстрации презентации
    }

    function setCurrentColor(editor: Editor, newColor: string): Editor {
        return {
            ...editor,
            palette: {
                ...editor.palette,
                currentColor: newColor        
            }
        };
    }

    function createSlide(editor: Editor): Editor {
        let newSlide: Slide = {};//здесь параметры по умолчанию
        return {
            ...editor,
            presentation: {
                ...editor.presentation,
                slideList: [
                    ...editor.presentation.slideList,
                    newSlide,
                ]
            }
        };
    }

    !!!!function selectSlides(editor: Editor, selectedSlides: Array<Identifier>): Editor {
        return {
            ...editor,
            selectedSlides: selectedSlides,
        };
    }
    
    copySlides
    removeSlides
    moveSlides
    addToHistory
    undoHistory
    redoHistory
    clearRedoHistory
    
//Presentation
    function setPresentationTitle(editor: Editor, newTitle: string): Editor {
        return {
            ...editor,
            palette: {
                ...editor.presentation,
                title: newTitle,        
            }
        };
    }

    function getPresentationTitle(editor: Editor, newTitle: string): Editor {
        return editor.presentation.title;
    }

Slide
    function createContent(editor: Editor): Editor {
        let newContent: Content = {};//здесь параметры по умолчанию
        let newEditor: Editor = {...editor};
        newEditor.presentation.slideList[newEditor.selectedSlides[0]].contentList
        return newEditor;
    }
    removeContent
    copyContent
    moveContent
    resizeContent
    setSlideBackground

Content
    insertImageToSlide
    drawPrimitiveToSlide
    insertMessageToSlide

Primitive
    drawCircle
    drawTriangle
    drawRectangle
    setStrokeColorPrimitive
    setFillColorPrimitive
    setStrokeWeightPrimitive

Message
    setValueMessage
    setFontFamilyMessage
    setColorMessage
    setSizeMessage
    setFontStyleMessage