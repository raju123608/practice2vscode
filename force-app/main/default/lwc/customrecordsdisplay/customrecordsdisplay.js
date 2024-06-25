import { LightningElement, track } from "lwc";

export default class Customrecordsdisplay extends LightningElement {
  @track recordId = "";

  handleRecordIdChange(event) {
    this.recordId = event.target.value;
  }
}
