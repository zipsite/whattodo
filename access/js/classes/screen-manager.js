export default class ScreenManager {

    constructor(parentnode){
        this.parentnode = parentnode;
        this.fragm = new DocumentFragment();
        this.elem = document.createElement("div");
        this.elem.classList.add("full-x-y", "guest-box-col");
        this.fragm.append(this.elem);


        console.log("ScreenManager create");
        this.nowActivity = null;
    }

    insert(activityName) {
        import(`../activity/${activityName}.js`)
        .then(this.hundler.bind(this));
        
    }

    hundler(module){
        this.elem.innerHTML = "";
        this.nowActivity = new module.default(this.elem, this);
    }


}