import Elem from "../classes/elem.js";

export default class BigHeader extends Elem {
    constructor(screennode, nameElem){
        super(nameElem);
        this.screennode = screennode;
        this.headerH = this.fragm.getElementById("header-h");
        this.elem = this.box.childNodes[0];
        this.screennode.append(this.elem);
    }

    setDisplayText(text) {
        this.headerH.innerText = text;
    }
}