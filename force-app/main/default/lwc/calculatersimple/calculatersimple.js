import { LightningElement,track } from 'lwc';

export default class Calculatersimple extends LightningElement {

    // @track first;
    // @track secound;
    // firstname(event){
    //     this.first=event.target.value;

    // }
    // secondname(event){
    //     this.secound=event.target.value;

    // }

//     handlechange(event){
//         const inputName = event.target.name;
//     const inputValue = event.target.value;
//     // Dispatch a custom event to pass the input values to parent component
//     this.dispatchEvent(
//       new CustomEvent("numberchange", { detail: { [inputName]: inputValue } })
//     );
//   }
@track number1;
@track number2;

    
}