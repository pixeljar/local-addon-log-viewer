import React from 'react';
const { Component, Fragment, } = React;
import { TitleBar } from '@getflywheel/local-components';
import { TertiaryNav, TertiaryNavItem, } from '@getflywheel/local-components';

export default class SiteInfoLogViewer extends Component {

	render () {

		const Item1 = () => (<div>PHP Error Content</div>);
		const Item2 = () => (<div>Nginx Access Content</div>);
		const Item3 = () => (<div>Nginx Error Content</div>);
		const Item4 = () => (<div>Apache Access Content</div>);
		const Item5 = () => (<div>Apache Error Content</div>);
		const Item6 = () => (<div>MySQL Error Content</div>);;

		return (

			<Fragment>
				<TitleBar title="Log Viewer" />
				<TertiaryNav>
					<TertiaryNavItem exact path='/' component={Item1}>PHP Error Log</TertiaryNavItem>
					<TertiaryNavItem path='/item2' component={Item2}>Nginx Access Log</TertiaryNavItem>
					<TertiaryNavItem path='/item3' component={Item3}>Nginx Error Log</TertiaryNavItem>
					<TertiaryNavItem path='/item3' component={Item4}>Apache Access Log</TertiaryNavItem>
					<TertiaryNavItem path='/item3' component={Item5}>Apache Error Log</TertiaryNavItem>
					<TertiaryNavItem path='/item3' component={Item6}>MySQL Error Log</TertiaryNavItem>
				</TertiaryNav>
			</Fragment>

		);

	}

}
