console.log("hello world");

let monthlyTotalPayroll = 0;

function submitForm(event) {
    event.preventDefault();
    console.log(submitForm);
  // inputs
    let firstName = document.querySelector("#firstName").value;
    let lastName =document.querySelector("#lastName").value;
    let idNumber = document.querySelector("#idNumber").value;
    let jobTitle = document.querySelector("#jobTitle").value;
    let annualSalary = document.querySelector("#annualSalary").value;
    let newForm = document.querySelector("#newForm").value;
    newPerson(
        firstName,
        lastName,
        idNumber,
        jobTitle,
        annualSalary,
        newForm
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
        let tableBody = document.querySelector("#tableBody");
        tableBody.innerHTML += `
        <tr>
          <td>${person.firstName}</td>
          <td>${person.lastName}</td>
          <td>${person.idNumber}</td>
          <td>${person.jobTitle}</td>
          <td>${person.annualSalary}</td>
          <td>
              <button onClick = "removePerson(this,${person.annualSalary})"<Remove</button>
          <td>  
          <tr> 
       `;
       sumSalary(person.annualSalary);
    }

    function sumSalary (salary) {
        let monthlySalary = salary / 12;
        monthlyTotalPayroll += monthlySalary;

        updateMonthlyTotalPayroll();
    }
    
    function updateMonthlyTotalPayroll() {
        let updateMonthlyTotalPayroll = document.querySelector("#monthlyTotalPayroll");
        updateMonthlyTotalPayroll.innerHTML = monthlyTotalPayroll.toFixed(2);
    }

// remove data from table
function removePerson(button, annualSalary){
    monthlyTotalPayroll -= annualSalary / 12;
    updateMonthlyTotalPayroll();
    button.parentElement.parentElement.remove();
}
    

