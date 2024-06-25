import { LightningElement } from "lwc";

export default class Parent extends LightningElement {
  searchtextparent;
  callme(event) {
    this.searchtextparent = event.detail;
  }
}
