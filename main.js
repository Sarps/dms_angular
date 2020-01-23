const {app, BrowserWindow, screen} = require('electron');
const url = require("url");
const path = require("path");

const touchBar = require("./desktop/touchbar");

let mainWindow;

function createWindow() {

    const { width, height } = screen.getPrimaryDisplay().workAreaSize

    mainWindow = new BrowserWindow({
        width: width - 100,
        height: height - 100,
        webPreferences: {
            nodeIntegration: true
        },
        // titleBarStyle: 'hiddenInset',
    });

    mainWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, `/dist/index.html`),
            protocol: "file:",
            slashes: true
        })
    );

    mainWindow.setTouchBar(touchBar);

    // Open the DevTools.
    mainWindow.webContents.openDevTools()

    mainWindow.on('closed', function () {
        mainWindow = null
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
});

app.on('activate', function () {
    if (mainWindow === null) createWindow()
});
