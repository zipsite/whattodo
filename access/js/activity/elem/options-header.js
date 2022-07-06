import Elem from "../../classes/elem.js";

export default class OptionsHeader extends Elem {
    constructor(parentNode, nameElem){
        super(nameElem);
        this.parentNode = parentNode;
        this.headerH = this.fragm.getElementById("header-h");
        this.elem = this.box.childNodes[0];
        this.parentNode.append(this.elem);
    }

    setDisplayText(text) {
        this.headerH.innerText = text;
    }
}