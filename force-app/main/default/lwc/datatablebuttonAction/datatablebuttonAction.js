import { LightningElement, wire } from "lwc";
import getaccounts from "@salesforce/apex/accountslist.accountslistdata";
import { refreshApex } from "@salesforce/apex";

const col = [
  { label: "Name", fieldName: "Name" },
  { label: "Phone", fieldName: "Phone" },
  { label: "Email", fieldName: "Email" },
  {
    // label: 'Actions',
    // type: 'action', // Use 'action' type for actions
    // typeAttributes: {
    //     label: 'View Contacts',
    //     value: 'view_contacts',
    //     iconName: 'action:preview' // Add an icon for clarity
    // }
    label: "Action",
    type: "button",
    typeAttributes: {
      label: "View Contacts",
      name: "viewcontacts",
      variant: "brand"
    }
  }
];
export default class DatatablebuttonAction extends LightningElement {
  column = col;
  accounts = [];

  selectedAccountId;
  @wire(getaccounts)
  dataaa({ error, data }) {
    if (data) {
      this.accounts = data;
    } else if (error) {
      console.log(error);
    }
  }
  handleRowAction(event) {
    const actionName = event.detail.action;
    const row = event.detail.row;

    if (actionName === "viewcontacts") {
      // Emit a custom event with the account's Id
      const selectedEvent = new CustomEvent("viewcontacts", {
        detail: { accountId: row.Id }
      });
      this.dispatchEvent(selectedEvent);
    }
  }
  refreshTable() {
    refreshApex(this.dataa);
  }
}
