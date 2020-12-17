import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProduct } from '../actions/products';
import SearchFilter from './search_filter';

function Products() {
  const data = useSelector(state => state.product.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [])

  return (
    <div className="page-content">
      <div className="content-header mb-20">
        <h3 className="page-title">Sản phẩm</h3>
        <button className="btn edit">Thêm</button>
        <SearchFilter />
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
                <th width="50px"></th>
                <th width="50px"></th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.prd_id}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.origin_price}</td>
                    <td>{item.inventory}</td>
                    <td>{item.customer_order}</td>
                    <td>{item.out_of_stock} ngày</td>
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

export default Products;