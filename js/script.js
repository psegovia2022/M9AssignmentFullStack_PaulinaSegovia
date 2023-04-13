// CREATE AN ARRAY OF EMPLOYEES
// let arrEmployees = [
//     [34123413, "Zak Ruvalcaba", 3424, "zak@vectacorp.com", "Executive"],
//     [23424665, "Sally Smith", 2344, "sally@vectacorp.com", "Administrative"],
//     [12341244, "Mark Martin", 5352, "mark@vectacorp.com", "Sales"],
//     [14545423, "Robin Banks", 7867, "robin@vectacorp.com", "Marketing"],
//     [13413453, "Sue Wedge", 1235, "sue@vectacorp.com", "QA"]
// ]


import * as employees from './modules/init.js';

// GET DOM ELEMENTS
let empTable    = document.querySelector('#employees')
let empCount    = document.querySelector('#empCount')

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid()

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        // CONFIRM THE DELETE
        if (confirm('Are you sure you want to delete this employee?')) {
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            let rowIndex = e.target.parentNode.parentNode.rowIndex
            // REMOVE EMPLOYEE FROM ARRAY
            empTable.deleteRow(rowIndex)
        }
    }
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    empTable.lastElementChild.remove()
    // REBUILD THE TBODY FROM SCRATCH
    let tbody = document.createElement('tbody')
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    employees.fetchingEmployees()
        .then((data) => {
            for (let employee of data) {
                tbody.innerHTML += 
                `
                <tr>
                    <td>${employee.id}</td>
                    <td>${employee.name}</td>
                    <td>${employee.ext}</td>
                    <td><a href="mailto:${employee.email}">${employee.email}</a></td>
                    <td>${employee.department}</td>
                    <td><button class="btn btn-sm btn-danger delete">X</button></td>
                </tr>
                `
            }
            // UPDATE EMPLOYEE COUNT
            empCount.value = `(${data.length})`
        })
    
    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.appendChild(tbody)

};