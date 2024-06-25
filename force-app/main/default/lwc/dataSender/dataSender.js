import { LightningElement, api } from "lwc";

export default class DataSender extends LightningElement {
  @api value = "";

  handleChange(event) {
    this.value = event.target.value;
    this.dispatchEvent(new CustomEvent("valuechange", { detail: this.value }));
  }
}
