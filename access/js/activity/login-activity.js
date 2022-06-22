import Button from "../classes/icon-button.js";
import { StandActivity } from "../classes/stand-activity.js";

export default class loginActivity extends StandActivity {
    constructor(screen, manager) {
        super(screen, manager);
        this.loginBtn = new Button("elem/primary-big-button");
        
        this.screen.screennode.prepend(this.loginBtn.elem);
        this.loginBtn.setDisplayText("Вход");
        
        // let bigHeaderH = this.screen.fragm.getElementById("big-header-h");
        // bigHeaderH.textContent = "Вход";
        this.screen.pushWindow();
    }
}