import * as vscode from 'vscode';
import * as path from 'path';


class Status extends vscode.TreeItem {
  constructor(
    public shortName: String,
    public status: number,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState
  ) {
    super(`${shortName}`, collapsibleState);
    this.tooltip = `${this.status}`;
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