import { StandActivity } from "../classes/stand-activity.js";
import SimpleHeader from "./elem/simple-header.js";
import Button from "./elem/icon-button.js";
import InputText from "./elem/input-text.js";

export default class loginActivity extends StandActivity {
    constructor(parentNode, manager) {
        super(parentNode, manager);

        this.header = new SimpleHeader(this.elem,"elem/big-header");
        this.header.setDisplayText("Вход");

        this.elem.insertAdjacentHTML('beforeend',
        this.loadElemSinc('login-layout').responseText);

        this.inputPlace = this.fragm.getElementById("input-place");
        this.btnPlace = this.fragm.getElementById("btn-place");

        this.emailInput = new InputText(this.inputPlace, "elem/input-text");
        this.passInput = new InputText(this.inputPlace, "elem/input-text");

        this.emailInput.setPlaceholder('Email');
        this.passInput.setPlaceholder('Пароль');

        this.btnLogin = new Button(this.btnPlace, 'elem/primary-big-button');
        this.btnRegist = new Button(this.btnPlace, 'elem/secondary-big-button');
        
        this.btnLogin.setDisplayText('Вход');
        this.btnRegist.setDisplayText('Регистрация');

        this.btnLogin.elem.addEventListener('click', this.loginHundler.bind(this));

        this.parentnode.prepend(this.elem);
    }

    loginHundler () {
        this.manager.insert('btn-bar-activity');
    }
}