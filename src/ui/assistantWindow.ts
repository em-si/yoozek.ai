import {app, BrowserWindow, globalShortcut} from 'electron';

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

// Zmienna przechowująca referencję do okna
let progressWindow: BrowserWindow | null = null;

// Tworzenie okna paska postępu
const createAssistantWindow = async (): Promise<void> => {
    if (progressWindow) {
        progressWindow.show()
        progressWindow.focus(); // Jeśli okno istnieje, skup się na nim
        return;
    }

    progressWindow = new BrowserWindow({
        width: 800,
        height: 800,
        vibrancy: 'popover',
        backgroundMaterial: 'acrylic',
        webPreferences: {
            preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
        }
    });

    // HTML treść okna
    await progressWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

    globalShortcut.register('F12', () => {
        progressWindow?.webContents.toggleDevTools(); // Toggles DevTools on F12 key press
    });

};

const setUserMessage = (message: string): void => {
    if (progressWindow) {
        progressWindow.webContents.send('new-user-message-entry', message)
        setTimeout(() => {
            progressWindow?.webContents?.scrollToBottom()
        }, 500)
    }
}

const setAssistantMessage = (message: string): void => {
    if (progressWindow) {
        progressWindow.webContents.send('new-assistant-message-entry', message)
        progressWindow.webContents.scrollToBottom()
    }
}

const showProgressBar = () => {
    if (progressWindow) {
        progressWindow.webContents.send('show-progress-bar')
    }
}

const hideProgressBar = () => {
    if (progressWindow) {
        progressWindow.webContents.send('hide-progress-bar')
    }
}

app.on('window-all-closed', () => {
    progressWindow = null
    globalShortcut.unregister('F12');

})

// Eksport funkcji
export {createAssistantWindow, setUserMessage, setAssistantMessage, showProgressBar, hideProgressBar};
