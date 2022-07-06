import Elem from "../../classes/elem.js";

export default class Button extends Elem {
    constructor (screennode, nameElem) {
        super(nameElem);
        this.screennode = screennode;
        this.btnText = this.fragm.getElementById("placeholder-btn");

        this.elem = this.box.childNodes[0];
        
        this.screennode.append(this.elem);
    }

    setDisplayText (text) {
        this.btnText.innerText = text;
    }
}