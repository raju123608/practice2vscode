import { LightningElement, track ,api,wire} from 'lwc';
import getcases from '@salesforce/apex/allopencasesonaccount.allcases';
import {showToastEvent} from 'lightning/platformShowToastEvent';
const colummm = [{label:'CaseNumber',fieldName:'CaseNumber'},
{label:'Case Origin',fieldName:'Origin'},
{label:'Case Owner',fieldName:'OwnerId'},
{label:'Contact Name',fieldName:'ContactId.Name'},
{label:'Created Date',fieldName:'CreatedById'}
];

export default class Allopencasesaccount extends LightningElement {
    columns=colummm;
    @track cases =[];
    @track showTable=false;
 

    showcases(event){
        getcases().then(result =>
            {
                this.cases= result;
                 this.showTable=true;
                }).catch(error=>{
                    this.showToast('Error',error.body.message,'error');
                });
            }
            


           showToast(title,message,variant){
               const evt = new showToastEvent({
                    title:title,
                    message:message,
                   variant:variant

               });
               this.dispatchEvent(evt);
            }  

           
           /* @wire (getcases) 
            wiredCases({ data, error }) {
                if (data) {
                    this.cases = data;
                } else if (error) {
                    console.error(error);
                    // Handle error appropriately, e.g., display an error message
                }
            } showcases() {
                // Assuming you have a mechanism to get the account ID
                //const accountId = '001x00000000001AAA'; // Replace with actual account ID
                getcases({ accountId })
                    .then(result => {
                        this.cases = result;
                    })
                    .catch(error => {
                        console.error(error);
                        // Handle error appropriately
                    });
            } */
    } 
            


    

