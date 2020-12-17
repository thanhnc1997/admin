import React from 'react';

function SearchFilter() {
  function filter_function() {
    let input, filter, table, tr, td, cell;
    input = document.querySelector('.filter-input');
    filter = input.value.toUpperCase();
    table = document.querySelector('table');
    tr = table.getElementsByTagName('tr');
    for (let i = 1; i < tr.length; i++) {
      tr[i].style.display = 'none';

      td = tr[i].getElementsByTagName('td');
      for (let j = 0; j < td.length; j++) {
        cell = tr[i].getElementsByTagName('td')[j];
        if (cell) {
          if (cell.innerHTML.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = '';
          }
        }
      }
    }
  }
  return (
    <>
      <input
        className="input filter-input"
        type="text"
        placeholder="Tìm kiếm"
        onKeyUp={filter_function}
      />
    </>
  )
}

export default SearchFilter;