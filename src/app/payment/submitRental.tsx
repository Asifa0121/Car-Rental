

export function handleSubmit() {
    const locationInput = document.getElementById('location') as HTMLInputElement | null;
    const dateInput = document.getElementById('date') as HTMLInputElement | null;
    const timeInput = document.getElementById('time') as HTMLInputElement | null;
   
    if (!locationInput || locationInput.value.trim() === '') {
        alert("Please enter your name.");
        return;
    }

   
    if (!dateInput || dateInput.value.trim() === '') {
        alert("Please enter your phone number.");
        return;
    }

  
    if (!timeInput || timeInput.value.trim() === '') {
        alert("Please enter your address.");
        return;
    }

   


    alert("Form has been submitted successfully.");
    
 
    const form = document.getElementById('Form') as HTMLFormElement | null;
    if (form) {
        form.reset(); 
    }
}


