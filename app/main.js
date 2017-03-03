var electron = require('electron');
var BrowserWindow = electron.BrowserWindow;
var app = electron.app;
var ipc = electron.ipcMain;

app.on('ready', () => {
    var appWindow, 
        infoWindow;

    appWindow = new BrowserWindow({
        show: false
    }); // appWindow

    appWindow.loadURL('file://' + __dirname + '/index.html');

    infoWindow = new BrowserWindow({
        width: 400,
        height: 300,
        transparent: true,
        frame: false,
        show: false
    }); // infoWindow

    infoWindow.loadURL('file://' + __dirname + '/info.html');

    appWindow.once('ready-to-show', () => {
        appWindow.show();
        //setTimeout(()=>{
        //     infoWindow.show();
        //     setTimeout(()=>{
        //         infoWindow.hide();
        //     }, 3000);
        // }, 1000);        
    }); // ready-to-show

    ipc.on('closeInfoWindow', (event, arg) => {
        event.returnValue = '';
        inforWindow.hide();
    }); // close info window

});
