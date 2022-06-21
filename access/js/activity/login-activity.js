import { StandActivity } from "../classes/stand-activity.js";

export default class loginActivity extends StandActivity {
    constructor(screen, manager) {
        super(screen, manager);
        this.screen.screennode.insertAdjacentHTML('beforeend', 
            this.loadElemSinc("primary-big-button").responseText
        );

        // let bigHeaderH = this.screen.fragm.getElementById("big-header-h");
        // bigHeaderH.textContent = "Вход";
        this.screen.pushWindow();
    }
}