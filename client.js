console.log("hello world");

let monthlyTotal = 0;

function submitInfo(event) {
    event.preventDefault();
    console.log(submitInfo);
  // inputs
    let firstName = document.querySelector("#firstName").value;
    let lastName =document.querySelector("#lastName").value;
    let idNumber = document.querySelector("#idNumber").value;
    let jobTitle = document.querySelector("#jobTitle").value;
    let annualSalary = document.querySelector("#annualSalary").value;
    let inputForm = document.querySelector("#inputForm").value;
    newPerson(
        firstName,
        lastName,
        idNumber,
        jobTitle,
        annualSalary,
        inputForm
    );
    }    

    function newPerson(firstName, lastName, idNumber, jobTitle, annualSalary) {
        let person = {
            firstName,
            lastName,
            idNumber,
            jobTitle,
            annualSalary
        };
        addPerson(person);
    }
    function addPerson(person) {
        
    }
    

// remove data from table
function removeData(event) {
    event.target.closest('tr').remove();
}

