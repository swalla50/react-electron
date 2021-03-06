const { app, BrowserWindow } = require('electron')

const path = require('path')
const isDev = require('electron-is-dev');
const { Menu } = require('@mui/material');

require('@electron/remote/main').initialize()

function createWindow() {

  const nativeImage = require('electron').nativeImage;
    var image = nativeImage.createFromPath(__dirname + '/icon.ico');
    image.setTemplateImage(true);
  // Create the browser window.
  const win = new BrowserWindow({
    width: 900,
    height: 700,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    },
    icon: image
  })

  app.setBadgeCount(19)
  

  win.loadURL('http://localhost:3000')
}

app.on('ready', createWindow)


// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})


app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})