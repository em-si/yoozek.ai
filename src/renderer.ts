/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/latest/tutorial/process-model
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import './index.css';

window.listeners.userMessage((message: string) => {
    const userMessage = document.getElementById('userMessage');
    if (userMessage) {
        userMessage.innerText = message;
        userMessage.style.visibility = 'visible';
    }
})

window.listeners.assistantMessage((message: string) => {
    const container = document.getElementById('assistantMessageContainer');
    const assistantMessage = document.getElementById('assistantMessage');
    if (container && assistantMessage) {
        container.style.visibility = 'visible';
        assistantMessage.innerText = message;
    }
})

window.listeners.showProgressBar((show: boolean) => {
    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
        progressBar.style.display = show ? 'block' : 'none';
    }
})

document.getElementById('clipboardIcon').addEventListener('click', () => {
    const content = document.getElementById('assistantMessage').innerText
    window.listeners.onClipboardClick(content);
})

declare global {
    interface Window {
        listeners: {
            assistantMessage: (callback: (message: string) => void) => void;
            userMessage: (callback: (message: string) => void) => void;
            showProgressBar: (func: (show: boolean) => void) => void;
            onClipboardClick: (content: string) => void;
        };
    }
}
