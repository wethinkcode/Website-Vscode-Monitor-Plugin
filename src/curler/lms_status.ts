import * as vscode from 'vscode';

import { Website } from '../class/Website';
import { Status } from '../class/Status';
import { getStatus } from './get_status';
import { time } from 'console';


class LmsStatusProvider implements vscode.TreeDataProvider<Status> {
    constructor(private map?: Array<Website>) { }

    getTreeItem(element: Status): vscode.TreeItem {
        return element;
    }

    async getChildren(element?: Status): Promise<Status[]> {
        this.map = getMap();
        if (!this.map || this.map.length == 0) {
            vscode.window.showInformationMessage('Map is empty or null');
            return Promise.resolve([]);
        }
        let statuses: Status[] = [];
        
        for(var i = 0; i < this.map.length; i++)
        {
            let [code, message] = await getStatus(this.map[i].website);

            statuses.push(
                new Status(this.map[i].shortName, code, message, vscode.TreeItemCollapsibleState.None)
            );
        }

        return Promise.resolve(statuses);
    }

    private _onDidChangeTreeData: vscode.EventEmitter<Status | undefined | null | void> = new vscode.EventEmitter<Status | undefined | null | void>();
    readonly onDidChangeTreeData: vscode.Event<Status | undefined | null | void> = this._onDidChangeTreeData.event;

    public refresh(): void {
        vscode.window.showInformationMessage("Refreshing status");
        this._onDidChangeTreeData.fire(undefined);
    }
}

function getMap(): Array<Website> {
    const websites = vscode.workspace.getConfiguration('WebsiteStatusUpdater')['WebsitesToUse'];
  
    var map: Array<Website> = [];
  
    for (var x = 0; x < websites.length; x++)
    {
      map.push(new Website(websites[x]['website'], websites[x]['name'], 0, ""));
    }
  
    return map;
  }
  

export {
    LmsStatusProvider,
    getMap
};