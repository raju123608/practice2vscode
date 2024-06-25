import { LightningElement, track } from "lwc";

export default class Dynamicformbasedonuserselection extends LightningElement {
  @track SelectedfromType = "";
  @track NameField = false;
  @track EmailField = false;

  fromTypeOptions = [
    { label: "select form Type", value: "" },
    { label: "Name", value: "name" },
    { label: "Email", value: "email" }
  ];

  handlechange(event) {
    this.SelectedfromType = event.target.value;
    this.NameField = this.SelectedfromType == "name";
    this.EmailField = this.SelectedfromType == "email";
  }
}
