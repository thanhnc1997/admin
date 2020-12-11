import React, { useEffect, useState } from 'react';

function Products() {
  const API_PRODUCTS = 'https://5fd331a98cee610016ae009d.mockapi.io/api_products/products';
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(API_PRODUCTS)
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
          <h3 className="page-title">Sản phẩm</h3>
        </div>
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
                {
                  items.map((item, index) => (
                    <tr key={index}>
                      <td>{item.prd_id}</td>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>{item.origin_price}</td>
                      <td>{item.inventory}</td>
                      <td>{item.customer_order}</td>
                      <td>{item.out_of_stock} ngày</td>
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

export default Products;