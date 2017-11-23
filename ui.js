var path = require('path');
const ipc = require('electron').ipcRenderer;

var sys = require('sys');
var exec = require('child_process').exec;
var child;


function button1(evt) {
  var nodeConsole = require('console');
  var myConsole = new nodeConsole.Console(process.stdout, process.stderr);
  var x = document.getElementById("text-input").value;
  var z = document.getElementById("text-input3").value;
  myConsole.log(x);
  child = exec("ytdl "+ x + ">" + z + ".mp3",function (error, stdout, stderr) {
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });
  child.stdout.on('data', function(data) {
    var nodeConsole = require('console');
    var myConsole = new nodeConsole.Console(process.stdout, process.stderr);
    myConsole.log('\x1b[36m%s\x1b[0m', 'Urcabalurca ' + data.toString()); 
  });

}  

function button2(evt) {
  var nodeConsole = require('console');
  var myConsole = new nodeConsole.Console(process.stdout, process.stderr);
  var y = document.getElementById("text-input2").value;
  var w = document.getElementById("text-input4").value;
  myConsole.log(y);
  child = exec("ytdl "+ y + ">" + w + ".mp4", function (error, stdout, stderr) {
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });
  child.stdout.on('data', function(data) {
    var nodeConsole = require('console');
    var myConsole = new nodeConsole.Console(process.stdout, process.stderr);
    myConsole.log('\x1b[36m%s\x1b[0m', 'Urcabalurca ' + data.toString()); 
  });

} 
    
    document.addEventListener('DOMContentLoaded', function() {
    
      document.getElementById("b1").addEventListener("click", button1);
      document.getElementById("b2").addEventListener("click", button2);
    
    })