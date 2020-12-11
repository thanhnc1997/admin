import React, { useEffect, useState } from 'react';

function Orders() {
  const API_ORDERS = 'https://5fd331a98cee610016ae009d.mockapi.io/api_products/orders';
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(API_ORDERS)
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result);
        },
        (error) => {
          setError(error);
        }
      )
  }, [])

  if (error) {
    return null
  }
  else {
    return (
      <div className="page-content">
        <div className="content-header grid-row mb-20">
          <h3 className="page-title">Đơn hàng</h3>
        </div>
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
                {
                  items.map((item, index) => (
                    <tr key={index}>
                      <td>{item.order_id}</td>
                      <td>{item.data}</td>
                      <td>{item.returns_id}</td>
                      <td>{item.customer}</td>
                      <td>{item.total}</td>
                      <td>{item.discount}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }

}

export default Orders;