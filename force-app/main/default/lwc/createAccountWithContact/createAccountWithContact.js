import { LightningElement, track } from "lwc";
import getcontacts from "@salesforce/apex/accountslist.getContacts";
const column = [
  { label: "Firstname", fieldName: "FirstName" },
  { label: "Lastname", fieldName: "LastName" },
  { label: "Email", fieldName: "Email" }
];

export default class CreateAccountWithContact extends LightningElement {
  column = column;
  @track accountName = "";
  @track contacts = [];
  searchme(event) {
    this.accountName = event.target.value;
  }

  savemee() {
    getcontacts({ accountName: this.accountName })
      .then((result) => {
        this.contacts = result;
      })
      .catch((error) => {
        console.error("error", error);
      });
  }
}
