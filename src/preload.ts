// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import {contextBridge, ipcRenderer} from "electron";


contextBridge.exposeInMainWorld('listeners', {
    assistantMessage: (func: (message: string) => void) => {
        ipcRenderer.on('new-assistant-message-entry', (__, message) => {
            func(message);
        });
    },
    userMessage: (message: string) => {
        ipcRenderer.send('user-message', message);
    },
    showProgressBar: (func: (show: boolean) => void) => {
        ipcRenderer.on('show-progress-bar', (__) => {
            func(true);
        });
        ipcRenderer.on('hide-progress-bar', (__) => {
            func(false);
        });
    },
    onClipboardClick: (content: string) => {
        console.log('clipboard clicked', content);
        ipcRenderer.send('clipboard-clicked', content);
    }
});