import { Switch, Route } from 'react-router-dom';

import SideBar from './sidebar';
import Customers from './customers';
import Orders from './orders';
import Products from './products';
import Home from './home';

function Main() {
  return (

    <div className="container">
      <div className="grid-row">
        <SideBar />
        <div className="page">
          <div className="page-header">
            Xin chào
						</div>
          <Switch>

            <Route path="/products">
              <Products />
            </Route>
            <Route path="/customers">
              <Customers />
            </Route>
            <Route path="/orders">
              <Orders />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default Main;