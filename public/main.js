const { app, BrowserWindow, Tray, Menu } = require('electron')
var isTray = false;


function createWindow () {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 1500,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    },
    title:"comm.rename",
    tray: true
  })

  //load the index.html from a url
  win.loadURL('http://localhost:3000');
  win.setMenu(null)

  // Open the DevTools.
  // win.webContents.openDevTools()
  win.on('close', (event) => {
    if (!isTray) {
      event.preventDefault();
      win.hide();
      isTray = true;
    }
    else {
      win.close();
    }
  });
  
}

function handleQuit() {
  isTray = true
  if (process.platform !== "darwin") {
      app.quit();
      // win.close();
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() =>{
  createWindow()
  tray = new Tray(__dirname+"/logo192.png")
  const contextMenu = Menu.buildFromTemplate([
    {label: "comm", enabled: false, icon: __dirname+"/logo192.png"},
    {label: "Quit", type: "normal", click: handleQuit}
  ]) 
  tray.setToolTip("comm.rename")
  tray.setContextMenu(contextMenu);
  tray.addListener("click", () => { 
    if (isTray) {
      createWindow()
    }
    isTray = false;
  });
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') {
//     app.quit()
//   }
// })



app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  win.show()
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
