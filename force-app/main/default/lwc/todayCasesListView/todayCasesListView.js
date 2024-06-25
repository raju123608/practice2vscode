import { LightningElement, track, wire } from "lwc";
import getCasesCreatedToday from "@salesforce/apex/caseList.getTodaysCases";
const columns = [
  { label: "Case Number", fieldName: "CaseNumber" },
  { label: "Subject", fieldName: "Subject" },
  { label: "Status", fieldName: "Status" },
  { label: "Created Date", fieldName: "CreatedDate", type: "date" }
];

export default class TodayCasesListView extends LightningElement {
  @track caseData;
  columns = columns;

  @wire(getCasesCreatedToday)
  wiredCases({ error, data }) {
    if (data) {
      this.caseData = data;
    } else if (error) {
      console.error(error);
    }
  }
}
