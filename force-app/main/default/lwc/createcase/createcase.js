import { LightningElement, api, wire } from "lwc";

import getAccounts from "@salesforce/apex/accountslist.getAccountRecords";

export default class Createcase extends LightningElement {
  columns = [
    { label: "Account Name", fieldName: "Name", type: "text" },
    { label: "Created Date", fieldName: "CreatedDate", type: "date" }
  ];

  formattedAccounts = [];

  @wire(getAccounts)
  wiredAccounts({ error, data }) {
    if (data) {
      this.formattedAccounts = this.formatAccountData(data);
    } else if (error) {
      console.error("Error loading accounts", error);
    }
  }

  formatAccountData(accounts) {
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return accounts.map((account) => {
      return {
        Id: account.Id,
        Name: account.Name,
        CreatedDate: this.formatDateTime(account.CreatedDate, userTimezone)
      };
    });
  }

  formatDateTime(dateTime, timezone) {
    const formattedDateTime = new Date(dateTime).toLocaleString(undefined, {
      timeZone: timezone
    });
    return formattedDateTime;
  }
}
