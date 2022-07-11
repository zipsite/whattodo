import Elem from "../../classes/elem.js";

export default class InputDropListElem extends Elem {
    constructor(parentNode, nameElem) {
        super(nameElem);
        this.parentNode = parentNode;

        this.textElemList = this.fragm.getElementById('text-elem-list');

        this.elem = this.box.childNodes[0];
        this.parentNode.append(this.elem);
    }

    setText(text) {
        this.textElemList.innerText = text;
    }
}