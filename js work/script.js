function formValidation(event){

    event.preventDefault();

    const userid = document.registration.userid;
    const passid = document.registration.passid;
    const username = document.registration.username;
    const address = document.registration.address;
    const country = document.registration.country;
    const zip = document.registration.zip;
    const email = document.registration.email;
    const genderRadios = document.querySelectorAll('input[name="sex"]');
    const languageCheckboxes = document.querySelectorAll('input[name="en"], input[name="nonen"]');

    if (userid.value == "") {
        alert("Please enter User ID");
        return false;
    }

    if (userid.value.length < 6) {
        alert("User ID must be at least 6 characters long");
        return false;
    }

    if (passid.value.length < 8 || !/\d/.test(passid.value)) {
        alert("Password must be at least 8 characters long and contain at least one digit");
        return false;
    }

    if (!/^\d{4}$/.test(zip.value)) {
        alert("ZIP code must contain 4 digits");
        return false;
    }

    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)) {
        alert("Please enter a valid email address");
        return false;
    }

    if(username.value.length<3){
        alert("Please enter your name!");
        return false;
    }
    if(address.value.length<1){
        alert("Please enter your address!");
        return false;
    }
    if (country === "Default") {
        alert("Please select a country");
        return false;
    }
    const genderSelected = false;
    for (const i = 0; i < genderRadios.length; i++) {
        if (genderRadios[i].checked) {
            genderSelected = true;
            break;
        }
    }
    if (!genderSelected) {
        alert("Please select a gender");
        return false;
    }

    const languageSelected = false;
    for (const i = 0; i < languageCheckboxes.length; i++) {
        if (languageCheckboxes[i].checked) {
            languageSelected = true;
            break;
        }
    }
    if (!languageSelected) {
        alert("Please select at least one language");
        return false;
    }


    addRowToTable();
    return true;
}

function addRowToTable() {
    const table = document.getElementById("tblData");

    const userid = document.registration.userid.value;
    const passid = document.registration.passid.value;
    const username = document.registration.username.value;
    const address = document.registration.address.value;
    const country = document.registration.country.value;
    const zip = document.registration.zip.value;
    const email = document.registration.email.value;
    const gender = document.querySelector('input[name="sex"]:checked').value;

    const selectedLanguages = [];
    const englishCheckbox = document.querySelector('input[name="en"]');
    if (englishCheckbox.checked) {
        selectedLanguages.push(englishCheckbox.nextSibling.textContent.trim());
    }
    const nonEnglishCheckbox = document.querySelector('input[name="nonen"]');
    if (nonEnglishCheckbox.checked) {
        selectedLanguages.push(nonEnglishCheckbox.nextSibling.textContent.trim());
    }

    const rowData = [userid, passid, username, address, country, zip, email, gender, selectedLanguages.join(", ")];

    const newRow = document.createElement('tr');

    rowData.forEach(function(value) {
        const cell = document.createElement('td');
        const text = document.createTextNode(value);
        cell.appendChild(text);
        newRow.appendChild(cell);
    });

    table.appendChild(newRow);
}


document.querySelector('form[name="registration"]').addEventListener('submit', formValidation);
