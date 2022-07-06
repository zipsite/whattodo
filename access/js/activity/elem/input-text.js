import Elem from "../../classes/elem.js";

export default class InputText extends Elem {
    constructor(screennode, nameElem) {
        super(nameElem);
        this.screennode = screennode;
        this.textInput = this.fragm.getElementById("text-input");
        this.placeholder = this.fragm.getElementById("placeholder");
        this.elem = this.box.childNodes[0];
        this.screennode.append(this.elem);
    }

    setPlaceholder(text){
        this.placeholder.innerText = text;
    }
}