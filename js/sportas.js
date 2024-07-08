export function renderSportTablet(data) {
    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        HTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${data[i].name}</td>
                <td>${data[i].date}</td>
            </tr>`

    }
    return `
    <table>
        <thead>
            <tr>
                <td>#</td>
                <td>Name</td>
                <td>Next date</td>
            </tr>
        </thead>
        <tbody>${HTML}</tbody>
    </table>`
}