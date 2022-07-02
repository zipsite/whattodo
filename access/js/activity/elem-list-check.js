import Elem from "../classes/elem.js";

export default class ElemListCheck extends Elem {
    constructor(parentNode, nameElem) {
        super(nameElem);
        this.parentNode = parentNode;

        this.checkBox = this.fragm.getElementById('check-box');
        this.placeHolder = this.fragm.getElementById('place-holder');

        this.elem = this.box.childNodes[0];
        this.parentNode.append(this.elem);
    }

    setText (text){
        this.placeHolder.innerText = text;
    }

    setStatus (status) {
        if (status == 'check') {
            this.checkBox.setAttribute('src', '/access/svg-icon/check-yes.svg');
        }

        else if (status == 'nocheck') {
            this.checkBox.setAttribute('src', '/access/svg-icon/check-no.svg');
        }
    }
}