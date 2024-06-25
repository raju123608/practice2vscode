import { LightningElement, wire } from "lwc";
import getconacts from "@salesforce/apex/contactlistdisplay.contactsrecorddisplay";

export default class Contactlist extends LightningElement {
  @wire(getconacts) contacts;
}
