
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('wlink-helper.helloWorld', () => {

		vscode.window.showInformationMessage('Hello World from wlink-helper!');
	});

	context.subscriptions.push(disposable);
}


export function deactivate() {}
