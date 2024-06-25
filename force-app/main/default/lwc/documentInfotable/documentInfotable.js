import { LightningElement, track, wire } from "lwc";
import getdata from "@salesforce/apex/documenttableapex.getmetaa";

const col = [
  { label: "Document Title", fieldName: "Document_Title__c" },
  { label: "Document number", fieldName: "Document_Number__c" },
  { label: "Doument description", fieldName: "Document_Description__c" }
];

export default class DocumentInfotable extends LightningElement {
  columns = col;
  @track raj;
  @wire(getdata)
  raj({ error, data }) {
    if (data) {
      this.raj = data;
    } else if (error) {
      console.error("Error fetching Custom Metadata records: ", error);
    }
  }
}
