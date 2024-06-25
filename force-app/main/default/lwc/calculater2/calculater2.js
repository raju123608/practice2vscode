import { LightningElement, track } from 'lwc';

export default class Calculater2 extends LightningElement {
    @track result;
//     firstNumber;
//     secondNumber;
//     calculatevalues(event) {
//     const inputName = Object.keys(event.detail)[0];
//     const inputValue = event.detail[inputName];

//     // Update the corresponding property based on the input name
//     if (inputName === "number1") {
//       this.firstNumber = inputValue;
//     } else if (inputName === "number2") {
//       this.secondNumber = inputValue;
//     }
//   }

//     addme(event){
//         const first=this.template.querySelector('c-calculatersimple').first;
        
        
//         const secound=this.template.querySelector('c-calculatersimple').secound;
//         this.result = parseFloat(first) + parseFloat(secound);

//     }
//     Subtractme(){
//         // const first=this.template.querySelector('c-calculatersimple').first;
        
        
//         // const secound=this.template.querySelector('c-calculatersimple').secound;
//         // this.result = parseFloat(first) + parseFloat(secound);
//         this.result = parseFloat(this.firstNumber) - parseFloat(this.secondNumber);


//     }
//     Multifyme(){
//         // const first=this.template.querySelector('c-calculatersimple').first;
        
        
//         // const secound=this.template.querySelector('c-calculatersimple').secound;
//         // this.result = parseFloat(first) + parseFloat(secound);
//         this.result = parseFloat(this.firstNumber) * parseFloat(this.secondNumber);


//     }
//     Divisionme(){
//         // const first=this.template.querySelector('c-calculatersimple').first;
        
        
//         // const secound=this.template.querySelector('c-calculatersimple').secound;
//         // this.result = parseFloat(first) + parseFloat(secound);
//         this.result = parseFloat(this.firstNumber) / parseFloat(this.secondNumber);


//     }
handleAdd() {
    const firstComponent = this.template.querySelector('c-first-component');
    const number1 = parseInt(firstComponent.number1, 10);
    const number2 = parseInt(firstComponent.number2, 10);
    this.result = number1 + number2;
}

handleSubtract() {
    const firstComponent = this.template.querySelector('c-first-component');
    const number1 = parseInt(firstComponent.number1, 10);
    const number2 = parseInt(firstComponent.number2, 10);
    this.result = number1 - number2;
}

handleMultiply() {
    const firstComponent = this.template.querySelector('c-first-component');
    const number1 = parseInt(firstComponent.number1, 10);
    const number2 = parseInt(firstComponent.number2, 10);
    this.result = number1 * number2;
}

handleDivide() {
    const firstComponent = this.template.querySelector('c-first-component');
    const number1 = parseInt(firstComponent.number1, 10);
    const number2 = parseInt(firstComponent.number2, 10);
    this.result = number1 / number2;
}
}