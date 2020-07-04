import * as Local from '@getflywheel/local';
import * as LocalMain from '@getflywheel/local/main';
import uuidv4 from 'uuid/v4';

export default function(context) {

	const { notifier, electron } : { notifier: any, electron: typeof Electron } = context;

	electron.ipcMain.on('goToRoute', async (event, siteId: Local.Site['id']) => {

		const site = LocalMain.SiteData.getSite(siteId);

	});

}
