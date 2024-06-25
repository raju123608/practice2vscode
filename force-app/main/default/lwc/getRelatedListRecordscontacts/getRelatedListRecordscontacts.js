import { LightningElement, wire } from "lwc";
import { getRelatedListInfo } from "lightning/uiRelatedListApi";

export default class GetRelatedListRecordscontacts extends LightningElement {
  error;
  records;
  @wire(getRelatedListInfo, {
    parentRecordId: "001RM000003UNu6YAG",
    relatedListId: "Contacts",
    fields: ["Contact.Id", "Contact.Name"],
    where: '{ Name: { like: "Bob%" }}'
  })
  relatedconts({ data, error }) {
    if (data) {
      this.records = data;
      this.error = undefined;
    } else if (error) {
      this.error = error;
      this.records = undefined;
    }
  }
}
