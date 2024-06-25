import { LightningElement, track } from "lwc";

export default class Userselectionpicklistfield1 extends LightningElement {
  @track selectedinput;
  showchildcomponents = false;
  inputsoptions = [
    { label: "show input 1", value: "name" },
    { label: "Show Input 2", value: "phone" },
    { label: "show Input 3", value: "email" }
  ];

  handledata(event) {
    this.selectedinput = event.target.value;
    this.showchildcomponents = Boolean(this.selectedinput);
  }
}
