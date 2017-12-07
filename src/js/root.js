import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
//import {Router, Route, hashHistory} from 'react-router';
import {Button} from 'antd';
import PCIndex from './components/pc_index';
import PCNewsDetails from './components/pc_news_details';
import MobileNewsDetails from './components/mobile_news_details';
import MobileIndex from './components/mobile_index';
import PCUserCenter from './components/pc_usercenter';
import MobileUserCenter from './components/mobile_usercenter';
import 'antd/dist/antd.css';
import MediaQuery from 'react-responsive';
export default class Root extends React.Component {
	render() {
		return (
			<div>
				<MediaQuery query='(min-device-width: 1224px)'>
					<BrowserRouter>
					    <Switch>
					        <Route exact path="/" component={PCIndex}></Route>
						    <Route exact path="/details/:uniquekey" component={PCNewsDetails}></Route>
						    <Route exact path="/usercenter" component={PCUserCenter}></Route>
					    </Switch>
					</BrowserRouter>
				</MediaQuery>
				<MediaQuery query='(max-device-width: 1224px)'>
					<BrowserRouter>
					    <Switch>
					        <Route exact path="/" component={MobileIndex}></Route>
						    <Route exact path="/details/:uniquekey" component={MobileNewsDetails}></Route>
						    <Route exact path="/usercenter" component={MobileUserCenter}></Route>
					    </Switch>
					</BrowserRouter>
				</MediaQuery>
			</div>
		);
	};
}
ReactDOM.render(
	<Root/>, document.getElementById('mainContainer'));
