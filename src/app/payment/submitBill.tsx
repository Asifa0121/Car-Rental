

export function handleSubmit() {
    const nameInput = document.getElementById('name') as HTMLInputElement | null;
    const phoneInput = document.getElementById('phone') as HTMLInputElement | null;
    const addressInput = document.getElementById('address') as HTMLInputElement | null;
    const townInput = document.getElementById('town') as HTMLInputElement | null;

    if (!nameInput || nameInput.value.trim() === '') {
        alert("Please enter your name.");
        return;
    }

   
    if (!phoneInput || phoneInput.value.trim() === '') {
        alert("Please enter your phone number.");
        return;
    }

  
    if (!addressInput || addressInput.value.trim() === '') {
        alert("Please enter your address.");
        return;
    }

   
    if (!townInput || townInput.value.trim() === '') {
        alert("Please enter your town/city.");
        return;
    }


    alert("Form has been submitted successfully.");
    
 
    const form = document.getElementById('SubmitForm') as HTMLFormElement | null;
    if (form) {
        form.reset(); 
    }
}


