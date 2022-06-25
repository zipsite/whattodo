export class Screen {
    constructor(parentnode) {
        this.parentnode = parentnode;

        this.fragm = new DocumentFragment();

        this.screennode = document.createElement('div');
        this.screennode.classList.add("full-x-y", "guest-box-col");

        this.fragm.prepend(this.screennode);
        console.log("Screen create");
    }
    setwindow(activity, manager) {
        this.screennode.innerHTML = "";
        this.old = this.running;
        this.running = new activity(this, manager);
    }
    pushWindow() {
        this.parentnode.prepend(this.fragm);
    }
}