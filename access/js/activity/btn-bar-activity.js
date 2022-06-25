import { StandActivity } from "../classes/stand-activity.js";
import ButtonBar from "./button-bar.js";

export default class loginActivity extends StandActivity {
    constructor(screen, manager) {
        super(screen, manager);
        this.screennode = document.createElement('div');
        this.screennode.classList.add("full-x-y", "guest-box-col");


        this.screen.screennode.append(this.screennode);
        this.ButtonBar = new ButtonBar(this.screen.screennode, "elem/button-bar");
        this.screen.pushWindow();
    }
}