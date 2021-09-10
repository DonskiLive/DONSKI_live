export default function formValidation(form, showMessage){
    let hasError = false;
     for(let element of form){
         if(element.localName !== 'button'){           
             if(element.value.trim() === ''){
                 element.classList.add('is-invalid');
                 hasError = true;
             }else{
                element.classList.remove('is-invalid');
             }
         }
     }
     if(hasError){
         showMessage(false, 'All fields should be fill!!!')
     }
     return hasError;
}



