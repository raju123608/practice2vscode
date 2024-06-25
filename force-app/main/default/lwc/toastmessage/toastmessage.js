import { LightningElement, track } from "lwc";
//import {showToastEvent} from 'lightning/platformshowToastEvent' ;
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class Toastmessage extends LightningElement {
  @track name = "";
  namemee(event) {
    this.name = event.target.value;
  }
  submeee(event) {
    if (this.name) {
      this.handleSuccess;
    } else {
      this.handleError("please enter the valid name");
    }
  }
  handleSuccess() {
    // Handle successful submission and show success toast
    const event = new ShowToastEvent({
      title: "Success",
      message: "Record submitted successfully.",
      variant: "success"
    });
    this.dispatchEvent(event);
  }
  handleError() {
    const event = new ShowToastEvent({
      title: "Error",
      message: "Record submition Failed",
      variant: "error"
    });
    this.dispatchEvent(event);
  }
}
