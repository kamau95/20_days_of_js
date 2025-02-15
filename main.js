let table = document.body.firstElementChild;
for (let i = 0; i < table.rows.length; i++) {
  table.rows[i].cells[i].style.backgroundColor = "red";
  table.style.border = "1px solid";
  table.style.margin = "auto"
}

