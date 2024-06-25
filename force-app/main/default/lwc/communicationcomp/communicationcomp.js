import { LightningElement } from "lwc";

export default class Communicationcomp extends LightningElement {
  handalepassingdata(event) {
    const passDataEvent = new CustomEvent("passdata", { detail: event.detail });
    this.dispatchEvent(passDataEvent);
  }
}
