const {app, BrowserWindow} = require('electron');
const ipc = require('electron').ipcMain;

app.on('window-all-closed', () => {
  app.quit()
})

app.on('ready', () => {

	var ui = new BrowserWindow({
		height: 350,
		width: 500,
		resizable: false
	});
	ui.loadURL('file://' + __dirname + '/ui.html');

	ui.on('closed', () => {
  		app.quit()
	})


});