import * as vscode from 'vscode';
import { Website } from './class/Website';
import { LmsStatusProvider, getMap } from './curler/lms_status';

const map2: Array<Website> = [
];

export function activate(context: vscode.ExtensionContext) {

  let disposable = vscode.commands.registerCommand('websiteStatus.openWebsite', (shortName: String) => {
		// The code you place here will be executed every time your command is executed

    const map = getMap();

    const site = map.filter((e) => {
      if (e.shortName == shortName)
      {
        return e;
      }
    });
    vscode.env.openExternal(vscode.Uri.parse(site[0].website.toString()));
	});

  context.subscriptions.push(disposable);

  let lmsStatusProvider = new LmsStatusProvider();

  vscode.window.createTreeView('websiteStatus', {
    treeDataProvider: lmsStatusProvider
  });

  vscode.window.registerTreeDataProvider(
    'websiteStatus',
    lmsStatusProvider
  );

  vscode.commands.registerCommand('websiteStatus.refreshEntry', () => {
    lmsStatusProvider.refresh();
  });

  setInterval(() => {
    lmsStatusProvider.refresh();
  }, 60000 * 10);
}

export {
  LmsStatusProvider
};
// this method is called when your extension is deactivated
export function deactivate() { }
