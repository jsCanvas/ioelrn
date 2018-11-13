// import { ipcRenderer, remote } from 'electron';

var remote = require('electron').remote;
var ipcRenderer = require('electron').ipcRenderer;
var store = require('./redux');

// import { connect } from 'react-redux'
// import { addTodo } from '../actions'
// var import { createStore } from 'redux';
try {
    // var electron = require('electron');
    // 
    const {
        Menu,
        MenuItem,
        dialog
    } = remote;

    window.electron = {
        sendUp: function () {
            // ipcRenderer.sendSync('reqaction', 'up');
            ipcRenderer.send('asynchronous-message', 'ping')
        },
        onOk: function (callback) {
            ipcRenderer.on('ok', (event, arg) => {
                callback(arg);
            });
        }
    };
    ipcRenderer.on('asynchronous-reply', (event, arg) => {
            // alert(arg);
            console.log(arg);
            store.dispatch({type:'INCREMENT',data:arg});
    });
    
    
   
//    module.exports = connect()(rege);
    // console.log(connect()(rege));
} catch (e) {}