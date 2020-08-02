
const { BrowserWindow, app } = require('electron')
const path = require("path")
const isDev = require("electron-is-dev")

function createWindow(){
    // Criando uma janela de navegação.

    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences:{
            nodeIntegration: false
        }
    });

    win.loadURL(
        isDev ? "http://localhost:3000" : `file://${path.join(__dirname, "../build/index.html")}`
        );

    //Abrindo ferramentas de desenvolvedor
    win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

//Sair quando todas as janelas forem fechadas
app.on('window-all-closed', () =>{

    if (process.platform !== 'darwin'){
        app.quit();
    }
});

app.on('activate', () => {
    //Abrir a janela da aplicação quando clicar no ícone na paleta

    if (BrowserWindow.getAllWindows().length === 0){
        createWindow()
    }
})