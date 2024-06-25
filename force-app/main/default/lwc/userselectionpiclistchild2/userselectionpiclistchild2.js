import { LightningElement, api } from "lwc";

export default class Userselectionpiclistchild2 extends LightningElement {
  @api selectedvalue;
  get shownameinput() {
    return this.selectedvalue === "name";
  }
  get showphoneinput() {
    return this.selectedvalue === "phone";
  }
  get showemailinput() {
    return this.selectedvalue === "email";
  }
}
