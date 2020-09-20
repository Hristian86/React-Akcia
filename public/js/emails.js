const mailButton = document.getElementById('sendMailButton');
const errorses = document.getElementById('contactErrors');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const subjectError = document.getElementById('subjectError');
const messageError = document.getElementById('messageError');

const validate = async () => {

    mailButton.innerHTML = `<div>Loading...</div>`;

    const name = document.getElementById('name').value;
    const subject = document.getElementById('subject').value;
    const content = document.getElementById('content').value;
    const email = document.getElementById('email').value;
    console.log(name);
    console.log(subject);
    console.log(content);
    console.log(email);

    let errors = [];
    let err = false;

    if (name.length < 3) {
        // make errors
        err = true;
        errors.push("Name must be at least 3 symbols");
        nameError.innerHTML = "Name must be at least 3 symbols";
    } else {
        nameError.innerHTML = "";
    }

    if (subject.length < 3) {
        // make errors
        err = true;
        errors.push("Subject must be at least 3 symbols");
        subjectError.innerHTML = "Subject must be at least 3 symbols";
    } else {
        subjectError.innerHTML = "";
    }

    if (content.length < 3) {
        // make errors
        err = true;
        errors.push("Message must be at least 3 symbols");
        messageError.innerHTML = "Message must be at least 3 symbols";
    } else {
        messageError.innerHTML = "";
    }

    if (email.length < 3) {
        // make errors
        err = true;
        errors.push("Email must be at least 3 symbols");
        emailError.innerHTML = "Email must be at least 3 symbols";
    } else {
        emailError.innerHTML = "";
    }

    console.log(errors);

    if (err) {
        console.log('true');

        mailButton.innerHTML = `<input value="Send Message" class="btn btn-primary" onclick="validate()" type="submit">`;

    } else {
        console.log('false');

        //errorses.innerHTML = "";

        const emailForm = document.getElementById('email-form');
        const result = await SendEmail(email, subject, name, content);
        //let result = { message: "email send" };
        console.log(await result);
        if (await result.error) {
            // make error

            return false;
        } else if (await result.message === "email send") {
            console.log(await result);
            setTimeout(() => {
                emailForm.innerHTML = `<div>
                <h1>Email is send successfully</h1>
            </div>`;
            }, 300);

        }

    }
}





const SendEmail = async (email, subject, name, content) => {
    try {

        let payload = {
            email: email,
            subject: subject,
            content: content,
            name: name
        };

        const result = await fetch("http://localhost:3002/api/contacts", {
            "method": "POST",
            "headers": {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, body: JSON.stringify(payload)
        })
            .then(res => res.json())
            .catch(err => console.log(err));
        return await result

    } catch (e) {
        console.log(e);
    }
}