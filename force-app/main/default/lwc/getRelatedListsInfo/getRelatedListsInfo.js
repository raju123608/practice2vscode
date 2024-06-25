import { LightningElement, wire } from "lwc";
import { getRelatedListInfo } from "lightning/uiRelatedListApi";
//import ACCOUNT_OBJECT from "@salesforce/schema.Account";
import ACCOUNT_OBJECT from "@salesforce/schema/Account";

export default class GetRelatedListsInfo extends LightningElement {
  error;
  relatedLists;
  @wire(getRelatedListInfo, { ParentObjectApiName: ACCOUNT_OBJECT })
  listinfo({ data, error }) {
    if (data) {
      this.relatedLists = data;
      this.error = undefined;
    } else if (error) {
      this.error = error;
      this.relatedLists = undefined;
    }
  }
}
