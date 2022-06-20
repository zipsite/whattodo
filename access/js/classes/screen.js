export class Screen {
    constructor(parentnode) {
        this.parentnode = parentnode;
        this.screennode = document.createElement('div');
        parentnode.prepend(this.screennode);
        console.log("Screen create");
    }
    setwindow(activity, manager) {
        this.screennode.innerHTML = "";
        this.old = this.running;
        this.running = new activity(this.screennode, manager);
    }
}