import { TIMEOUT } from 'dns';
import * as vscode from 'vscode';
import { Website } from './class/Website';
import { LmsStatusProvider } from './curler/lms_status';

const map2: Array<Website> = [
];

export function activate(context: vscode.ExtensionContext) {

  let lmsStatusProvider = new LmsStatusProvider(getMap());

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
    lmsStatusProvider = new LmsStatusProvider(getMap());
    lmsStatusProvider.refresh();
  }, 600000);
}

function getMap(): Array<Website> {
  const websites = vscode.workspace.getConfiguration('WebsiteStatusUpdater')['WebsitesToUse'];

  var map: Array<Website> = [];

  for (var x = 0; x < websites.length; x++)
  {
    map.push(new Website(websites[x]['website'], websites[x]['name'], 0));
  }

  return map;
}

export {
  LmsStatusProvider
};
// this method is called when your extension is deactivated
export function deactivate() { }
