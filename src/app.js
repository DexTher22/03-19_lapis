const tbody = document.querySelector("tbody")


employees = [
    { id: 1, name: 'Erős István', city: 'Szeged', salary: '395'},
    { id: 2, name: 'Tar Ferenc', city: 'Pécs', salary: '392'},
    { id: 3, name: 'Csaló Gábor', city: 'Szeged', salary: '398'},
    { id: 4, name: 'Rendes Irén', city: 'Pécs', salary: '393'},
    { id: 5, name: 'Fel Áron', city: 'Szeged', salary: '397'}
]

var rows = ''
employees.forEach(emp => {
    rows += makeRow(emp)
})
tbody.innerHTML = rows

function makeRow(emp) {
    return `
    <tr>
        <td>${emp.id}</td>
        <td>${emp.name}</td>
        <td>${emp.city}</td>
        <td>${emp.salary}</td>
        <td>
            <button class="btn btn-danger">Törlés</button>
        </td>
        <td>
            <button class="btn btn-primary">Szerkesztés</button>
        </td>
    </tr>
    `
}