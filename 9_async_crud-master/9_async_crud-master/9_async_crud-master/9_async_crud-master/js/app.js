showCountries();

const addFormElement = document.querySelector("#add-form");
const addAlertElement = document.querySelector("#add-alert");

addFormElement.addEventListener("submit", async function (e) {
    e.preventDefault();

    const nameAddElement = document.querySelector("#name-add");
    const capitalAddElement = document.querySelector("#capital-add");
    const languageElement = document.querySelector("#language-add");
    const currencyElement = document.querySelector("#currency-add");
    const continentElement = document.querySelector("#continent-add");

    let nameAddValue = nameAddElement.value;
    let capitalAddValue = capitalAddElement.value;
    let languageValue = languageElement.value;
    let currencyValue = currencyElement.value;
    let continentElementValue = continentElement.value;

    nameAddElement.classList.remove('is-invalid');
    capitalAddElement.classList.remove('is-invalid');
    languageElement.classList.remove('is-invalid');
    currencyElement.classList.remove('is-invalid');
    continentElement.classList.remove('is-invalid');
    addAlertElement.innerHTML = '';

    if (nameAddValue == "" || nameAddValue === undefined) {
        addAlertElement.innerHTML = alertMaker("Provide name!");
        nameAddElement.classList.add('is-invalid');
    } 
    else if (capitalAddValue == "" || capitalAddValue === undefined) {
        addAlertElement.innerHTML = alertMaker("Provide capital!");
        capitalAddElement.classList.add('is-invalid');
    } 
    else if (currencyValue == "" || currencyValue === undefined) {
        addAlertElement.innerHTML = alertMaker("Provide currency!");
        currencyElement.classList.add('is-invalid');
    } 
    else if (continentElementValue == "" || continentElementValue === undefined) {
        addAlertElement.innerHTML = alertMaker("Provide continent!");
        continentElement.classList.add('is-invalid');
    } 
    else if (languageValue == "" || languageValue === undefined) {
        addAlertElement.innerHTML = alertMaker("Provide language");
        languageElement.classList.add('is-invalid');
    } 
    else {
        const data = {
            name: nameAddValue,
            capital: capitalAddValue,
            language: languageValue,
            currency: currencyValue,
            continent: continentElementValue,
            submit: 1,
        };

        const response = await fetch('./api/add-country.php', {
            method: 'POST',
            body: JSON.stringify(data),
        });
        const result = await response.json();
        if (result.nameError) {
            addAlertElement.innerHTML = alertMaker(result.nameError);
            nameAddElement.classList.add('is-invalid');
        } else if (result.capitalError) {
            addAlertElement.innerHTML = alertMaker(result.capitalError);
            capitalAddElement.classList.add('is-invalid');
        } else if (result.languageError) {
            addAlertElement.innerHTML = alertMaker(result.languageError);
            languageAddElement.classList.add('is-invalid');
        } else if (result.currencyError) {
            addAlertElement.innerHTML = alertMaker(result.currencyError);
            currencyAddElement.classList.add('is-invalid');
        } else if (result.continentError) {
            addAlertElement.innerHTML = alertMaker(result.continentError);
            continentAddElement.classList.add('is-invalid');
        } else if (result.success) {
            addAlertElement.innerHTML = alertMaker(result.success, 'success');
            nameAddElement.value = '';
            capitalAddElement.value = '';
            languageElement.value = '';
            currencyElement.value = '';
            continentElement.value = '';
            showCountries();
        } else if (result.failure) {
            addAlertElement.innerHTML = alertMaker(result.failure);
        } else {
            addAlertElement.innerHTML = alertMaker();
        }
    }
});

async function showCountries() {
    const response = await fetch('./api/show-countries.php');
    const result = await response.json();

    const responseElement = document.querySelector("#response");

    if (result.length !== 0) {
        let rows = '';
        result.forEach(function (country, index) {
            rows += `<tr>
                                    <td>${index + 1}</td>
                                    <td>${country.name}</td>
                                    <td>${country.capital}</td>
                                    <td>${country.language}</td>
                                    <td>${country.currency}</td>
                                    <td>${country.continent}</td>
                                    <td>
                                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editCountryModal" onclick="editCountry(${country.id})">
                                            Edit
                                        </button>
                                        <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteCountryModal" onclick="deleteCountry(${country.id})">
                                            Delete
                                        </button>
                                    </td>
                                </tr>`;

        });
        responseElement.innerHTML = `<table class="table table-bordered m-0">
                            <thead>
                                <tr>
                                    <th>Sr. No.</th>
                                    <th>Name</th>
                                    <th>capital</th>
                                    <th>language</th>
                                    <th>currency</th>
                                    <th>continent</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                ${rows}
                            </tbody>
                        </table>`;
    } else {
        responseElement.innerHTML = `<div class="alert alert-info m-0">No record found!</div>`;
    }
}

const nameEditElement = document.querySelector("#name-edit");
const capitalEditElement = document.querySelector("#capital-edit");
const languageEditElement = document.querySelector("#language-edit");
const currencyEditElement = document.querySelector("#currency-edit");
const continentEditElement = document.querySelector("#continent-edit");


let outerID = '';

async function editCountry(id) {
    outerID = id;
    const data = {
        id: id
    };
    const response = await fetch("./api/show-single-country.php", {
        method: 'POST',
        body: JSON.stringify(data),
    });
    const result = await response.json();

    nameEditElement.value = result.name;
    capitalEditElement.value = result.capital;
    languageEditElement.value = result.language;
    currencyEditElement.value = result.currency;
    continentEditElement.value = result.continent;
}

const editFormElement = document.querySelector("#edit-form");
const editAlertElement = document.querySelector("#edit-alert");

editFormElement.addEventListener("submit", async function (e) {
    e.preventDefault();

    let nameEditValue = nameEditElement.value;
    let capitalEditValue = capitalEditElement.value;
    let languageEditValue = languageEditElement.value;
    let currencyEditValue = currencyEditElement.value;
    let continentEditValue = continentEditElement.value;

    nameEditElement.classList.remove('is-invalid');
    capitalEditElement.classList.remove('is-invalid');
    languageEditElement.classList.remove('is-invalid');
    currencyEditElement.classList.remove('is-invalid');
    continentEditElement.classList.remove('is-invalid');
    editAlertElement.innerHTML = '';

    if (nameEditValue == "" || nameEditValue === undefined) {
        editAlertElement.innerHTML = alertMaker("Provide name!");
        nameEditElement.classList.add('is-invalid');
    } else if (capitalEditValue == "" || capitalEditValue === undefined) {
        editAlertElement.innerHTML = alertMaker("Provide capital!");
        capitalEditElement.classList.add('is-invalid');
    } else if (languageEditValue == "" || languageEditValue === undefined) {
        editAlertElement.innerHTML = alertMaker("Provide language!");
        capitalEditElement.classList.add('is-invalid');
    } else if (currencyEditValue == "" || currencyEditValue === undefined) {
        editAlertElement.innerHTML = alertMaker("Provide currency!");
        currencyEditElement.classList.add('is-invalid');
    } else if (continentEditValue == "" || continentEditValue === undefined) {
        editAlertElement.innerHTML = alertMaker("Provide continent!");
        capitalEditElement.classList.add('is-invalid');
    } else {
        const data = {
            name: nameEditValue,
            capital: capitalEditValue,
            language: languageEditValue,
            currency: currencyEditValue,
            continent: continentEditValue,
            id: outerID,
            submit: 1,
        };

        const response = await fetch("./api/edit-country.php", {
            method: "POST",
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (result.nameError) {
            editAlertElement.innerHTML = alertMaker(result.nameError);
            nameEditElement.classList.add('is-invalid');
        } else if (result.capitalError) {
            editAlertElement.innerHTML = alertMaker(result.capitalError);
            capitalEditElement.classList.add('is-invalid');
        } else if (result.languageError) {
            editAlertElement.innerHTML = alertMaker(result.languageError);
            languageEditElement.classList.add('is-invalid');
        } else if (result.currencyError) {
            editAlertElement.innerHTML = alertMaker(result.currencyError);
            currencyEditElement.classList.add('is-invalid');
        } else if (result.continentError) {
            editAlertElement.innerHTML = alertMaker(result.continentError);
            continentEditElement.classList.add('is-invalid');
        } else if (result.success) {
            editAlertElement.innerHTML = alertMaker(result.success, 'success');
            showUsers();
        } else if (result.failure) {
            editAlertElement.innerHTML = alertMaker(result.failure);
        } else {
            editAlertElement.innerHTML = alertMaker();
        }

    }
});

function deleteCountry(id) {
    outerID = id;
}

const deleteFormElement = document.querySelector("#delete-form");

deleteFormElement.addEventListener("submit", async function (e) {
    e.preventDefault();
    const data = {
        id: outerID
    };

    const response = await fetch('./api/delete-country.php', {
        method: 'POST',
        body: JSON.stringify(data),
    });

    const result = await response.json();

    const alertElement = document.querySelector("#alert");

    if (result.success) {
        alertElement.innerHTML = alertMaker(result.success, 'success');
        showCountries();
        closeDeleteModal();
    } else if (result.failure) {
        alertElement.innerHTML = alertMaker(result.failure);
    } else {
        alertElement.innerHTML = alertMaker();
    }

});

function closeDeleteModal() {
    const modalElement = document.querySelector('#deleteCountryModal');
    const modal = bootstrap.Modal.getInstance(modalElement);

    if (modal) {
        modal.hide();
    }
}

function alertMaker(msg = "Something went wrong!", cls = "danger") {
    return `<div class="alert alert-${cls} alert-dismissible fade show" role="alert">
    ${msg}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;
}