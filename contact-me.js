function submitForm(event) {
	 
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        console.log(formData);
		 setTimeout (function(){
			window.alert('Form submitted successfully!');
			document.getElementById('contact-form').reset();
		 },1000)
    }
