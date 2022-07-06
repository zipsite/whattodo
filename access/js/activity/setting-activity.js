import { StandActivity } from "../classes/stand-activity.js";
import DropDownListCheck from "./elem/drop-down-list-check.js";
import SimpleHeader from "./elem/simple-header.js";

export default class SettingActivity extends StandActivity {
    constructor(parentnode, manager) {
        super(parentnode, manager);

        this.header = new SimpleHeader(this.elem,'elem/big-header');
        this.header.setDisplayText('Настройки');

        this.elem.insertAdjacentHTML('beforeend', this.loadElemSinc('setting-layout').responseText);

        this.placeElement = this.fragm.getElementById('place-element');

        this.arrVariants = [
            "Система",
            "Светлая",
            "Тёмная"
        ];

        this.changeTheme = new DropDownListCheck(this.placeElement, 'elem/drop-down-list-check', this.arrVariants);

        this.parentnode.append(this.elem);
    }
}