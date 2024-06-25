import { LightningElement } from "lwc";
import { FlowNavigationNextEvent } from "lightning/flowSupport";

export default class Passdatalwctoflow extends LightningElement {
  subject;

  description;

  handleSubjectChange(event) {
    this.subject = event.detail.value;
  }

  handleDescChange(event) {
    this.description = event.detail.value;
  }

  handleCreate() {
    const navigateNextEvent = new FlowNavigationNextEvent();
    this.dispatchEvent(navigateNextEvent);
  }
}
