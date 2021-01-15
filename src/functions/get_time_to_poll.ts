import * as vscode from 'vscode'

export function getTimeToPoll(): number {
    const time = vscode.workspace.getConfiguration('WebsiteStatusUpdater')['PollingTime'];
    return +time;
}
