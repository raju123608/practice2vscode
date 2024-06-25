import { LightningElement, track, wire } from "lwc";
import getContacts from "@salesforce/apex/ContactController.getContacts";

export default class Data_filterand_sorting extends LightningElement {
  filterText = "";
  sortField = "";

  @wire(getContacts)
  contacts;

  get filteredContacts() {
    return this.contacts.data
      ? this.contacts.data.filter((contact) =>
          contact.Name.toLowerCase().includes(this.filterText.toLowerCase())
        )
      : [];
  }

  get sortOptions() {
    return [
      { label: "Name", value: "Name" },
      { label: "Email", value: "Email" }
    ];
  }

  handleFilterChange(event) {
    this.filterText = event.target.value;
  }

  handleSortChange(event) {
    this.sortField = event.target.value;
    if (this.sortField) {
      this.contacts.data.sort((a, b) =>
        a[this.sortField] > b[this.sortField] ? 1 : -1
      );
    }
  }
}
