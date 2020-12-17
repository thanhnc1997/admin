import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCustomer } from '../actions/customers';
import SearchFilter from './search_filter';

function Customers() {
  const data = useSelector(state => state.customer.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCustomer());
  }, [])

  return (
    <div className="page-content">
      <div className="content-header mb-20">
        <h3 className="page-title">Khách hàng</h3>
        <button className="btn edit">Thêm</button>
        <SearchFilter />
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
                <th width="50px"></th>
                <th width="50px"></th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.customer_id}</td>
                    <td>{item.name}</td>
                    <td>{item.debt}</td>
                    <td>{item.sales}</td>
                    <td>
                      <button className="btn edit">Sửa</button>
                    </td>
                    <td>
                      <button className="btn delete">Xóa</button>
                    </td>
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

export default Customers;