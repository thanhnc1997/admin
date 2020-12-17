import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrder } from '../actions/orders';
import SearchFilter from './search_filter';

function Orders() {
  const data = useSelector(state => state.order.list);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOrder())
  }, [])

  return (
    <div className="page-content">
      <div className="content-header mb-20">
        <h3 className="page-title">Đơn hàng</h3>
        <button className="btn edit">Thêm</button>
        <SearchFilter />
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
                <th width="50px"></th>
                <th width="50px"></th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.order_id}</td>
                    <td>{item.date}</td>
                    <td>{item.returns_id}</td>
                    <td>{item.customer}</td>
                    <td>{item.total}</td>
                    <td>{item.discount}</td>
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

export default Orders;