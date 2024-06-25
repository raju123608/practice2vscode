import { LightningElement, track, wire } from "lwc";

const col = [
  { label: "Name", fieldName: "Name" },
  { label: "phone", fieldName: "Phone" },
  { label: "email", fieldName: "Email" }
];

export default class Persontable extends LightningElement {
  columns = col;
  @track tableData;
  //     handalepassingdata(event){
  //         const { name, phone, Email } = event.detail;
  //         const newData = {
  //           name,
  //           phone,
  //           Email,

  //     };
  //     this.tableData = [...this.tableData, newData];
  // }
  connectedCallback() {
    this.addEventListener("passdata", this.handalepassingdata);
  }

  disconnectedCallback() {
    this.removeEventListener("passdata", this.handalepassingdata);
  }

  handalepassingdata(event) {
    const { name, phone, Email } = event.detail;
    const newData = { name, phone, Email };
    this.tableData = [...this.tableData, newData];
  }
}
