import { LightningElement, wire, api, track } from "lwc";

import getconts from "@salesforce/apex/Contactlist.getcontactss";
const col = [
  { label: "Firstname", fieldName: "FirstName" },
  { label: "phone", fieldName: "Phone" }
];
export default class Datatablebuttonactioncontacts extends LightningElement {
  contacts;
  cloumns = col;
  @api accountId;
  @wire(getconts, { accountId: "$accountId" })
  wiredContacts({ error, data }) {
    if (data) {
      this.contacts = data;
    } else if (error) {
      console.error("Error fetching contacts:", error);
    }
  }
}
