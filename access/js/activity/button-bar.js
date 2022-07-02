import Elem from "../classes/elem.js";

export default class ButtonBar extends Elem {
    constructor (parentNode, nameElem) {
        super(nameElem);

        this.parentNode = parentNode;

        this.iconArr = [
            (this.fragm.getElementById("bar-home-icon")),
            (this.fragm.getElementById("bar-all-icon")),
            (this.fragm.getElementById("bar-setting-icon"))
        ];

        this.btnArr = [
            this.fragm.getElementById("bar-home"),
            this.fragm.getElementById("bar-all"),
            this.fragm.getElementById("bar-setting"),
        ];

        for (let i = 0; i < this.btnArr.length; i++) {
            this.btnArr[i].addEventListener("click", this.clickHundler.bind(this));
        }

        this.iconArr[0].classList.toggle("bar-active-icon", true);

        this.elem = this.box.childNodes[0];
        this.parentNode.append(this.elem);
    }
    clickHundler (e) {
        let oneActive = (e.currentTarget.childNodes)[1];
        for (let i = 0; i < this.iconArr.length; i++) {
            this.iconArr[i].classList.toggle("bar-active-icon", false);
        }
        oneActive.classList.toggle("bar-active-icon", true);
    }
}