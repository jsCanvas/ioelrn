const { app, BrowserWindow,ipcMain  } = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win,mainWin;

function createWindow () {
  // 创建浏览器窗口。
  win = new BrowserWindow({ width: 400, height: 489 })

  // 然后加载应用的 index.html。
  win.loadFile(__dirname+'/index.html')
// D:\wordspace\react-3d-web5\
  // win.loadURL('http://localhost:3000/user/set')

  // 打开开发者工具
  // win.webContents.openDevTools()

  // 当 window 被关闭，这个事件会被触发。
  win.on('closed', () => {
    // 取消引用 window 对象，如果你的应用支持多窗口的话，
    // 通常会把多个 window 对象存放在一个数组里面，
    // 与此同时，你应该删除相应的元素。
    win = null
  })
}

function createMainWindow () {
  // 创建浏览器窗口。
  mainWin = new BrowserWindow({ width: 800, height: 689 })

  // 然后加载应用的 index.html。
  mainWin.loadFile(__dirname+'/upload.html')
// D:\wordspace\react-3d-web5\
  // win.loadURL('http://localhost:3000/user/set')

  // 打开开发者工具
  mainWin.webContents.openDevTools()

  // 当 window 被关闭，这个事件会被触发。
  mainWin.on('closed', () => {
    // 取消引用 window 对象，如果你的应用支持多窗口的话，
    // 通常会把多个 window 对象存放在一个数组里面，
    // 与此同时，你应该删除相应的元素。
    mainWin = null
  });
  
  win.close();
}

// Electron 会在初始化后并准备
// 创建浏览器窗口时，调用这个函数。
// 部分 API 在 ready 事件触发后才能使用。
app.on('ready', createWindow)

// 当全部窗口关闭时退出。
app.on('window-all-closed', () => {
  // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
  // 否则绝大部分应用及其菜单栏会保持激活。
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // 在macOS上，当单击dock图标并且没有其他窗口打开时，
  // 通常在应用程序中重新创建一个窗口。
  if (win === null) {
    createWindow()
  }
})

// 在这个文件中，你可以续写应用剩下主进程代码。
// 也可以拆分成几个文件，然后用 require 导入。
ipcMain.on('asynchronous-message', (event, arg) => {
  console.log(arg)
  event.sender.send('asynchronous-reply', 'pong')
})

ipcMain.on('synchronous-message', (event, arg) => {
  console.log(arg)
  event.returnValue = 'pong'
})
//监听与渲染进程的通信
ipcMain.on('reqaction', (event, arg) => {
  switch(arg){
    case 'open':
      win.hide();
      createMainWindow();
      break;
    case 'up':
      setTimeout(()=>{
        console.log('dsd');
        event.sender.send('ok', 'pong')
        // ipcMain.sendSync('ok','111');
      },1000);
      break;  
    case 'exit':
      //做点其它操作：比如记录窗口大小、位置等，下次启动时自动使用这些设置；不过因为这里（主进程）无法访问localStorage，这些数据需要使用其它的方式来保存和加载，这里就不作演示了。这里推荐一个相关的工具类库，可以使用它在主进程中保存加载配置数据：https://github.com/sindresorhus/electron-store
      //...
      safeExit=true;
      app.quit();//退出程序
      break;
  }
});