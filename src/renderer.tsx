import SiteInfoLogViewer from './helpers/SiteInfoLogViewer';

export default function (context) {

	const React = context.React;
	const Route = context.ReactRouter.Route;
	const hooks = context.hooks;

	// Default Log Viewer Page.
	hooks.addContent( 'routes[site-info]', (context) => {

		return (
			<Route
				key="site-info-log-viewer"
				path="/main/site-info/:siteID/log-viewer"
				render={(props) => (
					<SiteInfoLogViewer {...props} context={context} />
				)}
			/>
		);

	});

	hooks.addFilter( 'siteInfoMoreMenu', function ( menu, site ) {

		/*
			console.log(
				{
					'hooks' : hooks.registeredHooks,
					'pathname' : this.props.location.pathname,
					'menu' : menu,
					'site' : site,
					'context' : context,
					'this.context' : this.context
				}
			);
		*/

		menu.push({
			label: 'Log Viewer',
			enabled: this.props.location.pathname.indexOf('log-viewer') !== -1,
			click: () => {
				context.events.send( 'goToRoute', `/main/site-info/${site.id}/log-viewer` );
			},
		});

		return menu;

	});

}
