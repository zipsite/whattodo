import { StandActivity } from "../classes/stand-activity.js";

export default class mainActivity extends StandActivity {
    constructor(screennode, manager) {
        super(screennode, manager);
        console.log("mainActivity start");
        this.hundlerRequest(this.loadElemSinc("main-layout"));
    }

    hundlerRequest(Request) {
        this.screennode.innerHTML = Request.responseText;
    }

    handlerParClick () {
        this.manager.insert("second-activity");
    }
}