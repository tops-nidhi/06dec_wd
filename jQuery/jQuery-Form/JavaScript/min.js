$(document).ready(function(){

    $("#myfo").validate({
        
        rules: {
            name: {
                required: true,
                minlength: 2
            },
        email: {
            required: true,
            email: true
        },
        phone: {
            required: true,
            minlength: 10,
            maxlength: 10,
            number: true
        }
    },
    messages: {
        name: {
            required: 'First enter your name',
            minlength: 'Your name must consist of at least 2 characters'

        },
        email: {
            required: 'Please enter your email address',
            email : 'Enter your mail into the mail formate'
        },
        phone: {
            required: 'Please enter your phone number',
            number: 'Only digits are allowed',
            minlength: 'Your phone number must be 10 digits'
        }
    },
    
    
    submitHandler: function(form) {
        form.submit();
    }
});
})