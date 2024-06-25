import { LightningElement, track } from "lwc";

export default class Communicationsibblingparent extends LightningElement {
  @track sharedData = "";
  passmee(event) {
    this.sharedData = event.detail;
  }
}
