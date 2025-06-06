const { app, autoUpdater, dialog } = require('electron');
const path = require('path');

function initAutoUpdater() {
  const server = 'https://update.electronjs.org';
  const feed = `${server}/your-username/ratepay/latest/darwin/${app.getVersion()}`;

  autoUpdater.setFeedURL({ url: feed });

  autoUpdater.on('update-downloaded', () => {
    dialog.showMessageBox({
      title: 'Aggiornamento disponibile',
      message: 'Un nuovo aggiornamento è stato scaricato. Vuoi riavviare l\'applicazione per installarlo?'
    }).then(result => {
      if (result.response === 0) autoUpdater.quitAndInstall();
    });
  });

  autoUpdater.on('error', message => {
    console.error('Errore durante l\'aggiornamento:', message);
  });

  // Controlla gli aggiornamenti all'avvio dell'applicazione
  autoUpdater.checkForUpdates();
}

module.exports = initAutoUpdater;