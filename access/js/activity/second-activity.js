import { StandActivity } from "../classes/stand-activity.js";

export default class SecondActivity extends StandActivity {
    constructor(screennode, manager) {
        super(screennode, manager);
        console.log("Activity start");
        this.loadElemAsinc("twowindow");
    }

    hundlerRequest(Request) {
        this.screennode.innerHTML = Request.responseText;
    }
}