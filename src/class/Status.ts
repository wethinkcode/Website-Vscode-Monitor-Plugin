import * as vscode from 'vscode';
import * as path from 'path';


class Status extends vscode.TreeItem {
  constructor(
    public shortName: String,
    public status: Number,
    public statusText: String,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState
  ) {
    super(`${shortName}`, collapsibleState);
    this.tooltip = `${this.statusText}`;
    this.description = this.status.toString();
    if (this.status >= 200 && this.status <= 299) {
      this.iconPath = {
        light: path.join(__filename, '..', '..', 'resource', 'Green.svg'),
        dark: path.join(__filename, '..', '..', 'resource', 'Green.svg')
      };
    } else {
  
      vscode.window.showErrorMessage(`${this.shortName} is down with ${this.status}`);
      this.iconPath = {
        light: path.join(__filename, '..', '..', 'resource', 'Red.svg'),
        dark: path.join(__filename, '..', '..', 'resource', 'Red.svg')
      };
    }
    
    this.command = {
      title: "Open Site",
      command: "websiteStatus.openWebsite",
      arguments: [ this.shortName ]
    }
  }
}



export { Status };