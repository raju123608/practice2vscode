import { LightningElement } from "lwc";

export default class DataListener extends LightningElement {
  receivedValue = "";

  connectedCallback() {
    this.template
      .querySelector("c-data-sender")
      .addEventListener("valuechange", this.handleValueChange);
  }

  handleValueChange(event) {
    this.receivedValue = event.detail;
  }
}
