const SHEETDB_URL = "https://sheetdb.io/api/v1/yfq6zjrp5riy9"; // Substitua pela sua URL da API do SheetDB

document.addEventListener("DOMContentLoaded", function() {
    fetchData();
});

function fetchData() {
    fetch(SHEETDB_URL)
        .then(response => response.json())
        .then(data => {
            const tbody = document.querySelector("#data-table tbody");
            tbody.innerHTML = '';
            data.forEach((row, index) => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${row.DATA}</td>
                    <td>${row.NOME_CLIENTE}</td>
                    <td>${row.PRODUTO}</td>
                    <td>${row.VALOR}</td>
                    <td>${row.PAGAMENTO}</td>
                    <td>${row.TOTAL}</td>
                    <td>${row.SALDO}</td>
                    
                `;
                tbody.appendChild(tr);
            });

            const total = document.querySelector("#total");
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}