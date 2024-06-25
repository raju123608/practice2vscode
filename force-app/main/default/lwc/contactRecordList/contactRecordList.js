import { LightningElement, api, wire } from "lwc";
import contactsdata from "@salesforce/apex/Contactlist.Contactsdata";
const col = [
  { label: "FirstName", fieldName: "FirstName" },
  { label: "LastName", fieldName: "LastName" },
  { label: "phone", fieldName: "Phone" },
  { label: "email", fieldName: "Email" }
];

export default class ContactRecordList extends LightningElement {
  column = col;
  contacts = [];
  @api accountId;
  @wire(contactsdata, { accountId: "$accountId" }) contacts;
}
