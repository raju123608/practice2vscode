import { LightningElement, track, wire } from "lwc";
import dataformtable from "@salesforce/apex/tabledata.methodName";

const colu = [
  { label: "accounr name", fieldName: "Name" },
  { label: "Phone", fieldName: "Phone" },
  { label: "Rating", fieldName: "Rating" }
];

export default class Datatable extends LightningElement {
  @track columns = colu;
  raj = [];

  @wire(dataformtable)
  wiredData({ error, data }) {
    if (data) {
      this.raj = data;
    } else if (error) {
      console.error(error);
    }
  }
}
