import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import { getStatus } from '../../curler/get_status';

suite('Extension Test Suite', () => {
	assert.strictEqual(getStatus('https://google.com'), 200);
});
