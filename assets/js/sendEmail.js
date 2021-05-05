function sendMail(contactForm) {
    emailjs.send("Outlook365", "MLBowen_Contact_Form", {
        "f_name": contactForm.fname.value,
        "l_name": contactForm.lname.value,
        "email_add": contactForm.email.value,
        "mob_no": contactForm.mobno.value,
        "tel_no": contactForm.telno.value,
        "message": contactForm.comment.value,
    })

    .then(
        function(response) {
            console.log("SUCCESS", response);

        },
        function(error) {
            console.log("FAILED", error);
        }
    )
    return false;
}