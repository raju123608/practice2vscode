import { LightningElement, track } from "lwc";

export default class Createrelatedcontact extends LightningElement {
  @track accname = "";
  @track accweb = "";
  @track confname = "";
  @track conlname = "";
  @track conemail = "";
  @track conphone = "";
  uploadfile;

  Accountname(event) {
    this.accname = event.target.value;
  }
  conweb(event) {
    this.accweb = event.target.value;
  }
  conname(event) {
    this.confname = event.target.value;
  }
  conlastname(event) {
    this.conlname = event.target.value;
  }
  contactemail(event) {
    this.conemail = event.target.value;
  }
  contactphone(event) {
    this.conphone = event.target.value;
  }
  handleFileUploadFinished(event) {
    this.uploadfile = event.detail.files[0];
  }
  savemee() {
    createAccountContact({
      accname: this.accname,
      accweb: this.accweb,
      confname: this.confname,
      conlname: this.conlname,
      conemail: this.conemail,
      conphone: this.conphone,
      uploadfile: this.uploadfile
    })
      .then(() => {
        // Navigate to newly created contact record page
        this.navigateToRecord("Contact", this.contactId); // Assuming contactId is returned from Apex
      })
      .catch((error) => {
        console.error(error);
        // Display error message to user
      });
  }
  saveandnew() {}
  cancelme() {
    this.accname = "";
    this.accweb = "";
    this.confname = "";
    this.conlname = "";
    this.conemail = "";
    this.conphone = "";
    this.uploadfile = "";
  }
}
