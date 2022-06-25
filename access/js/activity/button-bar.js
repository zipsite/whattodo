import Elem from "../classes/elem.js";

export default class ButtonBar extends Elem {
    constructor (screennode, nameElem) {
        super(nameElem);

        this.screennode = screennode;

        this.iconArr = [
            (this.fragm.getElementById("bar-home-icon")),
            (this.fragm.getElementById("bar-all-icon")),
            (this.fragm.getElementById("bar-setting-icon"))
        ];

        this.barHome = this.fragm.getElementById("bar-home");
        this.barAll = this.fragm.getElementById("bar-all");
        this.barSetting = this.fragm.getElementById("bar-setting");

        this.barHome.addEventListener("click", this.clickHundler.bind(this));
        this.barAll.addEventListener("click", this.clickHundler.bind(this));
        this.barSetting.addEventListener("click", this.clickHundler.bind(this));

        this.elem = this.box.childNodes[0];

        this.screennode.append(this.elem);
    }
    clickHundler (e) {
        let oneActive = (e.currentTarget.childNodes)[1];
        for (let i = 0; i < this.iconArr.length; i++) {
            this.iconArr[i].classList.toggle("bar-active-icon", false);
        }
        oneActive.classList.toggle("bar-active-icon", true);
    }
}