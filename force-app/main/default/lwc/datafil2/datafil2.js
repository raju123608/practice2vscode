import { LightningElement } from "lwc";

export default class Datafil2 extends LightningElement {
  name;
  phone;
  contry;
  nameme(event) {
    this.name = event.target.value;
  }
  phoneme(event) {
    this.phone = event.target.value;
  }
  conme(event) {
    this.contry = event.target.value;
  }
  handledata() {
    const eventdata = {
      name: this.name,
      phone: this.phone,
      contry: this.contry
    };
    const event = new CustomEvent("passdata", { detail: eventdata });
    this.dispatchEvent(event);
  }
}
