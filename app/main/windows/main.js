const { BrowserWindow} = require("electron")
const isDev = require('electron-is-dev')
let win
function create() {
    win = new BrowserWindow({
        width: 600,
        height: 300,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.loadURL('http://localhost:3000')
}

function send (channel, ...args){
    win.webContents.send(channel, ...args)
}

module.exports = {create,send}
