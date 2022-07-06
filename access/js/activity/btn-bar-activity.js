import ScreenManager from "../classes/screen-manager.js";
import { StandActivity } from "../classes/stand-activity.js";
import ButtonBar from "./elem/button-bar.js";

export default class loginActivity extends StandActivity {
    constructor(parentNode, manager) {
        super(parentNode, manager);
        this.ButtonBar = new ButtonBar(this.elem, "elem/button-bar");

        this.boxForActivity = document.createElement('div');
        this.boxForActivity.classList.add("full-x-y", "guest-box-col", 'over-hidden');
        this.elem.prepend(this.boxForActivity);

        this.arrManagers = [];

        this.arrNameActivity = [
            "day-task-activity",
            "all-groups-activity",
            "setting-activity"
        ];
        
        this.createScreens();
        this.boxForActivity.append(this.arrManagers[0].elem);

        this.parentnode.prepend(this.elem);
    }

    hundlerSelectManager(e) {
        let id = e.currentTarget.id;
        this.boxForActivity.innerHTML = '';
        if (id == 'bar-home') {
            this.boxForActivity.append(this.arrManagers[0].elem);
        }
        else if (id == 'bar-all') {
            this.boxForActivity.append(this.arrManagers[1].elem);
        }
        else if (id == 'bar-setting') {
            this.boxForActivity.append(this.arrManagers[2].elem);
        }
    }

    createScreens() {
        for (let i = 0; i < 3; i++) {
            this.arrManagers.push(new ScreenManager(this.elem));
            this.arrManagers[i].insert(this.arrNameActivity[i]);
            this.ButtonBar.btnArr[i].addEventListener('click', this.hundlerSelectManager.bind(this));
        }
    }
}