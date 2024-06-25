import { LightningElement ,wire} from 'lwc';
import accountdata from '@salesforce/apex/accountslist.accountslistdata';

export default class Accountlistdata extends LightningElement {
    @wire(accountdata) accounts;
    accountidfromparent;
    handleclick(event){
        event.preventDefault();
        this.accountidfromparent=event.target.dataset.accountid;
    }

}