import { LightningElement } from "lwc";

export default class Praccticecomponent extends LightningElement {
  nameeee = "";
  phonemee = "";
  namemee(event) {
    this.nameeee = event.target.value;
  }
  phoneme() {
    this.phonemee = event.target.value;
  }
  submeee() {}
}
