import * as assert from 'assert';
import { Status } from '../../class/Status';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import { getStatus } from '../../StatusHandler/get_status';

suite('Extension Test Suite', () => {
	assert.strictEqual(getStatus('https://google.com'), 200);
	assert.strictEqual(getStatus('https://127.0.0.1'), 500);
});

suite('Status Class Tests', () => {
	const status = new Status("shortName", "url", "redirectUrl");
	assert.strictEqual(status.shortName, "shortName");
	assert.strictEqual(status.url, "url");
	assert.strictEqual(status.redirectUrl, "redirectUrl");
	
	assert.strictEqual(status.status, 0);
	status.updateStatusCode(3);
	assert.strictEqual(status.status, 3);

	assert.strictEqual(status.tooltip, "");
	status.updateStatusText("Text");
	assert.strictEqual(status.tooltip, "Text");
})