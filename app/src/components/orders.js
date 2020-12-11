import React from 'react';

function Orders() {
  return (
    <div className="page-content">
      <div className="table-wrapper">
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Mã hóa đơn</th>
                <th>Thời gian</th>
                <th>Mã trả hàng</th>
                <th>Khách hàng</th>
                <th>Tổng tiền hàng</th>
                <th>Giảm giá</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>DH0901</td>
                <td>Order 1</td>
                <td>0</td>
                <td>1000000</td>
                <td>1000000</td>
                <td>1000000</td>
              </tr>
              <tr>
                <td>DH0902</td>
                <td>Order 2</td>
                <td>500000</td>
                <td>2000000</td>
                <td>2000000</td>
                <td>100000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Orders;