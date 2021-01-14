import * as vscode from 'vscode';

import { Status } from '../class/Status';
import { getStatus } from './get_status';


class WebsiteStatusProvider implements vscode.TreeDataProvider<Status> {
    constructor(private map?: Array<Status>) { }

    getTreeItem(element: Status): vscode.TreeItem {
        return element;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async getChildren(_element?: Status): Promise<Status[]> {
        this.map = getMap();
        if (!this.map || this.map.length == 0) {
            vscode.window.showInformationMessage('Map is empty or null');
            return Promise.resolve([]);
        }
        
        for(let i = 0; i < this.map.length; i++)
        {
            const [code, message] = await getStatus(this.map[i].url);

            this.map[i].updateStatusCode(code);
            this.map[i].updateStatusText(message);
        }

        return Promise.resolve(this.map);
    }

    private _onDidChangeTreeData: vscode.EventEmitter<Status | undefined | null | void> = new vscode.EventEmitter<Status | undefined | null | void>();
    readonly onDidChangeTreeData: vscode.Event<Status | undefined | null | void> = this._onDidChangeTreeData.event;

    public refresh(): void {
        vscode.window.showInformationMessage("Refreshing status");
        this._onDidChangeTreeData.fire(undefined);
    }
}

function getMap(): Array<Status> {
    const websites = vscode.workspace.getConfiguration('WebsiteStatusUpdater')['WebsitesToUse'];
    const map: Array<Status> = [];
    for (let x = 0; x < websites.length; x++)
    {
      map.push(new Status(websites[x]['name'], websites[x]['url'], websites[x]['redirect_url']));
    }
    return map;
}
  

export {
    WebsiteStatusProvider,
    getMap
};