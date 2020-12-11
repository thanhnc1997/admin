import React, { useEffect, useState } from 'react';

function Customers() {
  const API_CUSTOMERS = 'https://5fd331a98cee610016ae009d.mockapi.io/api_products/customers';
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(API_CUSTOMERS)
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
          <h3 className="page-title">Khách hàng</h3>
        </div>
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
                {
                  items.map((item, index) => (
                    <tr key={index}>
                      <td>{item.customer_id}</td>
                      <td>{item.name}</td>
                      <td>{item.debt}</td>
                      <td>{item.sales}</td>
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

export default Customers;