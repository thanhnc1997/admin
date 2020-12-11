import React from 'react';

function Products() {
  return (
    <div className="page-content">
      <div className="table-wrapper">
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Mã hàng</th>
                <th>Tên hàng</th>
                <th>Giá bán</th>
                <th>Giá vốn</th>
                <th>Tồn kho</th>
                <th>Khách hàng đặt</th>
                <th>Dự kiến hết hàng</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>SP0901</td>
                <td>Product 1</td>
                <td>0</td>
                <td>1000000</td>
                <td>1000000</td>
                <td>1</td>
                <td>0 ngày</td>
              </tr>
              <tr>
                <td>SP0902</td>
                <td>Product 2</td>
                <td>500000</td>
                <td>2000000</td>
                <td>10</td>
                <td>0</td>
                <td>1 ngày</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Products;