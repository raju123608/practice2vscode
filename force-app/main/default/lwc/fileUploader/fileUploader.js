import { LightningElement, wire, api } from "lwc";
import { getRecord } from "lightning/uiRecordApi";

// Import the required fields and object API name
import { CurrentPageReference } from "lightning/navigation";
import { refreshApex } from "@salesforce/apex";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class fileUploader extends LightningElement {
  @api recordId;
  @wire(CurrentPageReference) pageRef;

  // Accepted file formats
  acceptedFormats = [".pdf", ".png", ".jpg", ".jpeg"];

  // Data for Lightning Datatable
  fileData = [];
  fileColumns = [
    { label: "File Name", fieldName: "title", type: "text" },
    { label: "File Type", fieldName: "type", type: "text" },
    { label: "File Size (KB)", fieldName: "size", type: "number" },
    { label: "Last Modified Date", fieldName: "lastModified", type: "date" }
  ];

  // Wire to get record details for refreshing the component
  wiredRecord;
  @wire(getRecord, { recordId: "$recordId", fields: ["Name"] })
  wiredRecordResult(value) {
    this.wiredRecord = value;
    if (value.data) {
      // Do something with the record data if needed
    } else if (value.error) {
      // Handle error if necessary
    }
  }

  // Handle file upload finished event
  handleUploadFinished(event) {
    const uploadedFiles = event.detail.files;
    const toastMessage = "Files uploaded successfully.";

    // Display toast message
    this.dispatchEvent(
      new ShowToastEvent({
        title: "Success",
        message: toastMessage,
        variant: "success"
      })
    );

    // Refresh the Lightning Datatable data
    this.refreshDataTable();

    // If you need to perform additional actions after file upload, you can do so here
  }

  // Function to refresh Lightning Datatable data
  refreshDataTable() {
    return refreshApex(this.wiredRecord);
  }
}
