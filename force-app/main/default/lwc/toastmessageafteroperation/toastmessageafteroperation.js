import { LightningElement, track } from "lwc";

import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class Toastmessageafteroperation extends LightningElement {
  /*  @track records='';

    nameme(event){
        this.records=event.target.value;
    }

    subme(){
        if (this.records) {
            // Simulate record submission and handle success
            this.handleSuccess();
        } else {
            // Handle error and show toast
            this.handleError('Please enter a valid name.');
        }
   

    }
    handleSuccess(){
        const event = new ShowToastEvent({ title:'Success',
                                              message:'Submit record successfully',
                                            variant:'success' });
         this.dispatchEvent(event);

    }



    handleError(){
        const event = new ShowToastEvent({title:'Failed',
                                         message:'Submited recrd failed',
                                           variant:'error'
                                        });
        this.dispatchEvent(event);

    } */

  @track recordName = "";

  handleNameChange(event) {
    this.recordName = event.target.value;
  }

  handleSubmit() {
    if (this.recordName) {
      // Simulate record submission and handle success
      this.handleSuccess();
    } else {
      // Handle error and show toast
      this.handleError("Please enter a valid name.");
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

  handleError(errorMessage) {
    // Handle error and show error toast
    const event = new ShowToastEvent({
      title: "Error",
      message: errorMessage,
      variant: "error"
    });
    this.dispatchEvent(event);
  }
}
