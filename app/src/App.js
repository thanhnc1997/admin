import './css/main.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SideBar from './components/sidebar';
import Customers from './components/customers';
import Orders from './components/orders';
import Products from './components/products';
//import Login from './components/login';

function App() {
	return (
		<Router>
			<div className="container">
				<div className="grid-row">
					<SideBar />
					<div className="page">
						<div className="page-header">
							Xin chào Thanh!
						</div>
						<Switch>
							<Route path="/products" component={Products} />
							<Route path="/customers" component={Customers} />
							<Route path="/orders" component={Orders} />
						</Switch>
					</div>
				</div>
			</div>
		</Router>
		//<Login />
	);
}

export default App;
