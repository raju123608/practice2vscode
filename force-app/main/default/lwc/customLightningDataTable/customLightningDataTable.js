import { LightningElement, wire } from "lwc";
import { getListUi } from "lightning/uiListApi";

import ACCOUNT_OBJECT from "@salesforce/schema/Account";
import NAME_FIELD from "@salesforce/schema/Account.Name";
import OWNER_NAME_FIELD from "@salesforce/schema/Account.Owner.Id";
import CREATED_DATE_FIELD from "@salesforce/schema/Account.CreatedDate";
import ACTIVE_FIELD from "@salesforce/schema/Account.Active__c";

export default class CustomLightningDataTable extends LightningElement {
  accountData;
  columns = [
    { label: "Name", fieldName: "Name", type: "text" },
    { label: "Owner Name", fieldName: "OwnerName", type: "text" },
    { label: "Created Date", fieldName: "CreatedDate", type: "date" },
    {
      label: "Active",
      fieldName: "Active",
      type: "text",
      cellAttributes: {
        iconName: { fieldName: "ActiveIcon" },
        iconPosition: "left"
      }
    }
  ];

  @wire(getListUi, { objectApiName: ACCOUNT_OBJECT, listViewApiName: "All" })
  wiredAccountData({ error, data }) {
    if (data) {
      this.accountData = data.records.records.map((record) => ({
        Id: record.id,
        Name: record.fields[NAME_FIELD.fieldApiName].value,
        OwnerName: record.fields[OWNER_NAME_FIELD.fieldApiName].value,
        CreatedDate: record.fields[CREATED_DATE_FIELD.fieldApiName].value,
        Active: record.fields[ACTIVE_FIELD.fieldApiName].value ? "✔" : "❌",
        ActiveIcon: record.fields[ACTIVE_FIELD.fieldApiName].value
          ? "utility:success"
          : "utility:error"
      }));
    } else if (error) {
      console.error(error);
    }
  }
}
