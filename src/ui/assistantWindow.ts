import {app, BrowserWindow} from 'electron';

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

// Zmienna przechowująca referencję do okna
let progressWindow: BrowserWindow | null = null;

// Tworzenie okna paska postępu
const createAssistantWindow = (): void => {
    if (progressWindow) {
        progressWindow.show()
        progressWindow.focus(); // Jeśli okno istnieje, skup się na nim
        return;
    }

    progressWindow = new BrowserWindow({
        width: 600,
        height: 300,
        vibrancy: 'popover',
        backgroundMaterial: 'acrylic',
        webPreferences: {
            preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
        }
    });
    //progressWindow.setWindowButtonVisibility(false)
    progressWindow.webContents.openDevTools()

    // HTML treść okna
    progressWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
};

const setUserMessage = (message: string): void => {
    if (progressWindow) {
        progressWindow.webContents.send('new-user-message', message)
        setTimeout(() => {
            progressWindow?.webContents?.scrollToBottom()
        }, 500)
    }
}

const setAssistantMessage = (message: string): void => {
    if (progressWindow) {
        progressWindow.webContents.send('new-assistant-message', message)
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
})

// Eksport funkcji
export {createAssistantWindow, setUserMessage, setAssistantMessage, showProgressBar, hideProgressBar};
