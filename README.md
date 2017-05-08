# HeartStrong

## Table of Contents

1. [Software](#1-software)
2. [Hardware](#2-hardware)
3. [Get Started](#3-get-started)
4. [Backend using Firebase](#4-backend-using-firebase)

### 1. Software
Any text editor like Sublime, Brackets would work (if you use Sublime we recommend Babel - http://www.storybench.org/install-babel-packages-sublime-text-3/)
 - Mac users need [Xcode](https://developer.apple.com/xcode/) to run the emulator
 - Window users need [Android studio](https://developer.android.com/studio/index.html)
 
### 2. Hardwareee
We used simulators in xcode and android studio but to run on a device, you need an IOS or android.
- IOS - https://facebook.github.io/react-native/docs/running-on-device.html (you might run into some errors - google the errors)
- Android – as long as you have your phone plugged into your computer when you run – react-native run-android – and you enable [USB debugging](https://developer.android.com/training/basics/firstapp/running-app.html) it will run on your phone.
 
 
To start follow this guide to set up your environment to run react native - https://facebook.github.io/react-native/docs/getting-started.html
 
To Run (first time)
Commands in italics should be run on your Terminal or any CLI.

Installing React Native on your System:
Install dependencies first, by following directions on the link provided which depends on the platform you’re developing on
https://facebook.github.io/react-native/docs/getting-started.html
‘npm install -g react-native-cli’

After you have react-native set up, ‘cd’ into your home directory or wherever you want this project to be saved. 
 ‘git clone https://github.com/wuTims/heart-strong.git’
 it will make a new directory called heart-strong
  ‘cd heart-strong’
 ‘npm install’
 ‘npm start’
  run ‘react-native run-android’ or ‘react-native run-ios’
Android studio emulator must be running or build will fail
 IOS will automatically open xcode simulator
After the first time:
 Run ‘react-native run-android’ or ‘react-native run-ios’
For emulators - shortcut 
Windows: ctrl+m and ‘reload’
  IOS: cmd+r
 If a new library was add (npm install react-native-new-package --save) you need to restart your packager (for windows) or restart your simulator (for mac - not just reload).
When you push to master and teammates pull, they would also need to run ‘npm install react-native-new-package’ or they will have an error saying module was not found.
To Edit
Open project folder in your text editor. All component JavaScript files are under the folder app. Edit if you change something in index.android.js don’t forget to edit index.ios.js (and vice versa) to have it also run on the other platform.
