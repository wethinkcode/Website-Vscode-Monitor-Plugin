import * as vscode from 'vscode';

import { Website } from '../class/Website';
import { Status } from '../class/Status';
import { getStatus } from './get_status';


class LmsStatusProvider implements vscode.TreeDataProvider<Status> {
    constructor(private map: Array<Website>) { }

    getTreeItem(element: Status): vscode.TreeItem {
        return element;
    }

    async getChildren(element?: Status): Promise<Status[]> {
        if (!this.map) {
            vscode.window.showInformationMessage('Map is empty or null');
            return Promise.resolve([]);
        }

        let statuses: Status[] = [];
        
        for(var i = 0; i < this.map.length; i++)
        {
            this.map[i].status = await getStatus(this.map[i].website);
            
            statuses.push(
                new Status(this.map[i].shortName, this.map[i].status, vscode.TreeItemCollapsibleState.None)
            );
        }

        return Promise.resolve(statuses);
    }

    private _onDidChangeTreeData: vscode.EventEmitter<Status | undefined | null | void> = new vscode.EventEmitter<Status | undefined | null | void>();
    readonly onDidChangeTreeData: vscode.Event<Status | undefined | null | void> = this._onDidChangeTreeData.event;

    public refresh(): void {
        this._onDidChangeTreeData.fire();
    }
}

export {
    LmsStatusProvider
};