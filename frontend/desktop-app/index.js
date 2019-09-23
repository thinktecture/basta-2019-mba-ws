const {app, BrowserWindow, globalShortcut} = require('electron');

let mainWindow = null;

const createWindow = () => {
  const options = {
    width: 1000,
    height: 700,
    title: 'Products App',
    webPreferences: {
      nodeIntegration: false
    }
  };
  mainWindow = new BrowserWindow(options);
  mainWindow.on('closed', () => {
    mainWindow = null;
  });


  mainWindow.loadFile('renderer/index.html');

};


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('will-quit', ()=>{
  globalShortcut.unregisterAll();
});


app.on('ready', () => {

  createWindow();

  globalShortcut.register('CMDORCTRL+SHIFT+D', ()=>{
    if(!mainWindow){
      createWindow();
    }
    mainWindow.focus();
    mainWindow.webContents.toggleDevTools();
  });

});



