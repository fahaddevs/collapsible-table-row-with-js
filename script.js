"use strict";

const expandedRows = document.querySelectorAll(".expanded-row");

for (let i = 0; i < expandedRows.length; i++) {
  expandedRows[i].style.display = "none";
}

const expandableRows = document.getElementsByClassName("expandable-row");

for (let i = 0; i < expandableRows.length; i++) {
  expandableRows[i].addEventListener("click", function () {
    const parentRow = this;
    const expandedRows = document.querySelectorAll(
      `.expanded-row[data-parent="${parentRow.dataset.rows}"]`
    );
    for (let j = 0; j < expandedRows.length; j++) {
      if (expandedRows[j].style.display === "none") {
        expandedRows[j].style.display = "table-row";
      } else {
        expandedRows[j].style.display = "none";
      }
    }
  });
}
