const { app, BrowserWindow } = require('electron')
const { autoUpdater } = require('electron-updater')

app.on('ready', () => {
  // Crea la finestra principale dell'applicazione
  let mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // Carica il contenuto della finestra principale
  mainWindow.loadFile('index.html')

  // Aggiungi il codice per gestire gli aggiornamenti
  autoUpdater.checkForUpdatesAndNotify()

  autoUpdater.on('update-available', () => {
    console.log('Update available')
  })

  autoUpdater.on('update-downloaded', () => {
    console.log('Update downloaded')
    autoUpdater.quitAndInstall()
  })

  autoUpdater.on('error', (err) => {
    console.error('Error in auto-updater:', err)
  })
})