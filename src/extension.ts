import * as vscode from 'vscode';
import { Website } from './class/Website';
import { LmsStatusProvider } from './curler/lms_status';

const map2: Array<Website> = [
];

export function activate(context: vscode.ExtensionContext) {

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
