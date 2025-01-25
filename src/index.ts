import { app, BrowserWindow, clipboard, ipcMain } from 'electron';
import { createAssistantWindow } from "./ui/assistantWindow";
import { useUserMessage } from "./main/hooks/useUserMessage";

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
    app.quit();
}

const createWindow = async (): Promise<void> => {
    // Create the browser window.
    await createAssistantWindow();
    // TODO Tutaj piszecie swój zajebisty kod :D
    useUserMessage((message) => console.log(message));
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
    await createWindow();
    ipcMain.on('clipboard-clicked', (event, message) => {
        clipboard.writeText(message);
    });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
