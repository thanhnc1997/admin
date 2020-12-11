import React from 'react';

function Customers() {
  return (
    <div className="page-content">
      <div className="table-wrapper">
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Mã khách hàng</th>
                <th>Tên khách hàng</th>
                <th>Nợ hiện tại</th>
                <th>Tổng bán</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>KH0901</td>
                <td>Customer 1</td>
                <td>0</td>
                <td>1000000</td>
              </tr>
              <tr>
                <td>KH0902</td>
                <td>Customer 2</td>
                <td>500000</td>
                <td>2000000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Customers;