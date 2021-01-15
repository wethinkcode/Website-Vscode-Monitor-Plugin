import * as vscode from 'vscode'

export function getTimeOutValue(): number {
    const time = vscode.workspace.getConfiguration('WebsiteStatusUpdater')['Timeout'];
    return +time;
}
