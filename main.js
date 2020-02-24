const {app, BrowserWindow, screen} = require('electron');
const { autoUpdater } = require("electron-updater");
const url = require("url");
const path = require("path");

const touchBar = require("./desktop/touchbar");

let win;

function createWindow() {

    const { width, height } = screen.getPrimaryDisplay().workAreaSize;

    win = new BrowserWindow({
        width: width - 100,
        height: height - 100,
        webPreferences: {
            nodeIntegration: true
        },
        icon: `file://${__dirname}/resources/assets/img/logo.png`
        // titleBarStyle: 'hiddenInset',
    });

    win.loadURL(`file://${__dirname}/resources/index.html`)
        .then( () => autoUpdater.checkForUpdatesAndNotify() );

    win.setTouchBar(touchBar);

    win.on('closed', function () {
        win = null
    });

    win.webContents.openDevTools();
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
});

app.on('activate', function () {
    if (win === null) createWindow()
});
