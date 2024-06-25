import { LightningElement } from 'lwc';

export default class Childone extends LightningElement {
  name;
    namemee(event){
        this.name = event.target.value;


    }
    submeee(event){
        const abc = new CustomEvent("notify",{detail:this.name});
        this.dispatchEvent(abc);

    }

}