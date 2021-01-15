import * as vscode from 'vscode';
import { getTimeToPoll } from './functions/get_time_to_poll';
import { WebsiteStatusProvider } from './StatusHandler/lms_status';

export function activate(context: vscode.ExtensionContext): void {

  const disposable = vscode.commands.registerCommand('websiteStatus.openWebsite', (url: string) => {
		// The code you place here will be executed every time your command is executed
    vscode.env.openExternal(vscode.Uri.parse(url.toString()));
	});

  context.subscriptions.push(disposable);

  const websiteStatusProvider = new WebsiteStatusProvider();

  vscode.window.createTreeView('websiteStatus', {
    treeDataProvider: websiteStatusProvider
  });

  vscode.window.registerTreeDataProvider(
    'websiteStatus',
    websiteStatusProvider
  );

  vscode.commands.registerCommand('websiteStatus.refreshEntry', () => {
    websiteStatusProvider.refresh();
  });

  setInterval(() => {
    websiteStatusProvider.refresh();
  }, 60000 * getTimeToPoll());
}

export {
  WebsiteStatusProvider
};

// this method is called when your extension is deactivated
// eslint-disable-next-line @typescript-eslint/no-empty-function
export function deactivate(): void { }
