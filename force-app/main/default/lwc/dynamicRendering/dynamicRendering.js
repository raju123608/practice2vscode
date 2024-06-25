import { LightningElement, wire } from "lwc";
import getdata from "@salesforce/apex/dynamicRenderingapex.methodName";

export default class DynamicRendering extends LightningElement {
  accounts;
  @wire(getdata)
  accc({ error, data }) {
    if (data) {
      // Assign the fetched accounts to the property
      this.accounts = data;
    } else if (error) {
      console.error("Error fetching accounts: ", error);
    }
  }

  handleFilter(event) {
    this.accounts = this.accounts.filter(
      (account) => account.Industry !== "Agriculture"
    );
  }
}
