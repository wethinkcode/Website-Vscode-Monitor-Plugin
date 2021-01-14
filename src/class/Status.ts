import * as vscode from 'vscode';
import * as path from 'path';


class Status extends vscode.TreeItem {
  constructor(
    public shortName: string,
    public url: string,
    public redirectUrl: string,
    public status: number = 0
  ) {
    super(`${shortName}`, vscode.TreeItemCollapsibleState.None);
    this.command = {
      title: "Open Site",
      command: "websiteStatus.openWebsite",
      arguments: [ this.redirectUrl ]
    }
  }
  
  updateStatusText(statusText: string): void {
    this.tooltip = statusText;
  }

  updateStatusCode(code: number): void {
    this.status = code;
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
  }
}



export { Status };