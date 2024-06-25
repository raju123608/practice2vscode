import { LightningElement, track, wire } from "lwc";
import getAccounts from "@salesforce/apex/searchAccountdata.getaccounts";
import getcontacts from "@salesforce/apex/searchAccountdata.getContacts";

const column = [
  { label: "Name", fieldName: "Name" },
  { label: "Phone", fieldName: "Phone" },
  { label: "Rating", fieldName: "Rating" },
  {
    label: "Action",
    type: "button",
    typeAttributes: {
      name: "Viewcontacts",
      label: "View contacts",
      variant: "brand"
    }
  }
];

const column2 = [
  { label: "FirstName", fieldName: "FirstName" },
  { label: "LastName", fieldName: "LastName" },
  { label: "Email", fieldName: "Email" }
];
export default class SearcchAccountData extends LightningElement {
  columns = column;

  columns2 = column2;

  @track accounts = [];
  @track contacts = [];
  @track searchtext = "";
  searchme(event) {
    this.searchtext = event.target.value;
  }
  getdataa() {
    getAccounts({ searchtext: this.searchtext })
      .then((result) => {
        this.accounts = result;
      })
      .catch((error) => {
        console.error("error", error);
      });
  }
  handleRowAction(event) {
    const actionName = event.detail.action.name;
    const row = event.detail.row;
    if (actionName == "Viewcontacts") {
      this.showRelatedContacts(row.Id);
    }
  }
  showRelatedContacts(accountName) {
    getcontacts({ accountName })
      .then((result) => {
        this.contacts = result;
      })
      .catch((error) => {
        console.error("error", error);
      });
  }
}
