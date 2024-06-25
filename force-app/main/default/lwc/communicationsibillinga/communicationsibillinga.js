import { LightningElement, track } from "lwc";

export default class Communicationsibillinga extends LightningElement {
  //  dataa='';
  // handleme(event){
  //     this.dataa= event.target.value;
  //      const evt =new CustomEvent('datachange' ,{detail:this.dataa});
  //      this.dispatchEvent(evt);

  // }

  localData = "";

  handleInputChange(event) {
    this.localData = event.target.value;
    const dataChangeEvent = new CustomEvent("datachange", {
      detail: this.localData
    });
    this.dispatchEvent(dataChangeEvent);
  }
}
