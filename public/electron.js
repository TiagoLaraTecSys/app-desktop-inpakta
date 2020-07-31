const { BrowserWindow, app } = require('electron')
const path = require("path")
const isDev = require("electron-is-dev")

function createWindow() {
    //Criando Jnela de navegação

    let win = new BrowserWindow({
        widh: 1024,
        height: 780,
        webPreferences: {
            nodeIntegration: false
        }
    });

    win.loadURL(
        isDev ? "http://localhost:3000" : `file://${path.join(__dirname, "../build/index.html")}`

    );

    win.whenReady().then(createWindow)

    app.on('activate', () => {

        if (BrowserWindow.getAllWindows().length === 0){
            createWindow();
        }
    })
}