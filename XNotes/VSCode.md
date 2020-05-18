## VSCode Shortcuts

1. `Alt+Shift+F` Format CSS/SCSS code in VSCode
2. `Ctrl+F2` / `Alt + Select lines Randomly` Select Multilines in VSCode
3. `Alt + Q` Manual keybinding to the command pallet - Emmet: Wrap individual lines with abbreviation
4. `Ctrl + Shift + P` Open up the command pallet in VSCode
5. `Alt + Shift + F` Use formatter to format the page (User settings can be found in settings.JSON)
6. `Alt + Click on HTML` tag to collapse all content in Chrome Developer tools \*\*Chrome Dev Tools
7. `Ctrl +Alt + N` = To run the JS code using inbuilt node and output in console; using the Code runner extension
8. Command: `workbench.action.terminal.clear`; Keybindings: `Ctrl + K; When: terminalFocus`
9. `Ctrl + P / Ctrl + E` #To open file from the VScode workbench
10. `Ctrl + Shift + B` #Run build task

---

## VSCode Extensions

1. **GIT History** - _Don Jayamanne_ - Useful for working with GIT source control
2. **Beautify css/sass/scss/less** - _michelemelluso_ - Code beautifier and syntax recommendation (OPTIONAL)
3. **Beautify** - _HookyQR_ - Code formatter
4. **Bootstrap 4, Font awesome 4, Font Awesome 5 Free & Pro snippets** - _Ashok Koyi_ - Bootstrap 4 & Font Awesome code recommendation
5. **Open in browser** - _TechER_ - Opening default browser from VSCode
6. **Live Sass Compiler** - _Ritwick Dey_ - Watching Sass files and automatic transpiling of SCSS to CSS
7. **Live Server** - _Ritwick Dey_ - Starting up web pages in browser
8. **Code Runner** - _Jun Han_ - Running JS code live
9. **Node.js Extension Pack** - _Wade Anderson_ - Node JS support
10. **ESLint** - _Dirk baeumer_
11. **Visual Studio IntelliCode** - _Microsoft_
12. **Prettier** - _Code formatter_ - Esben Peterson
13. **Debugger for Chrome** - Debugging
14. **SQLite** - _alexcvzz_ #for querying sqlite databases
15. **vscode-icons** - _vscode icons team_ #for great folder icons - To toggle Ctrl+Shift+P -> Activate vscode icons
16. **Java Extension Pack** - _Microsoft_  
    **Spring Boot tools** - _Pivotal_  
    **Spring Boot Dashboard** - _Microsoft_  
    **Tomcat for Java** - _Wei Shen_  
    **Spring Initializr Java Support** - _Microsoft_  
    **Checkstyle for Java** - _ShengChen_  
17. **Auto-Open Markdown Preview** - _hnw_  
18. **Path Intellisense** - _Christian Kohler_
19. **TSLint** - _Microsoft_

---

## VSCOde launch.json Code snippets

### Normal launching of webapp

```json
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "Debug in Chrome",
      "url": "http://localhost:5500/",
      "webRoot": "${workspaceFolder}"
    }
  ]
```

### Launching of WebApp testing with webdriver IO
```json
  "version": "0.2.0",
  "configurations": [
    {
      "name": "run select spec",
      "type": "node",
      "request": "launch",
      "args": ["wdio.conf.js"],
      "cwd": "${workspaceFolder}/TESTING/CakeBar/",
      "autoAttachChildProcesses": true,
      "program": "${workspaceRoot}/TESTING/CakeBar/node_modules/@wdio/cli/bin/wdio.js",
      "console": "integratedTerminal"
    }
  ]  
```

### Run java application
```json
    {
      "type": "java",
      "name": "CodeLens (Launch) - Fortune",
      "request": "launch",
      "mainClass": "Sample.Fortune",
      "projectName": "Frontend_Examples_4892d113"
    }
```

---
## VSCode TS tasks.json snippets

### Build and watch TS compilation 
```json
  "tasks": [
    {
      "type": "typescript",
      "tsconfig": "Typescript/Sample/UsingTS/tsconfig.json",
      "problemMatcher": [
        "$tsc"
      ],
      "group": {
        "kind": "build",
        "isDefault": true
      },
      "label": "tsc: build - Typescript/Sample/UsingTS/tsconfig.json"
    },
    {
      "type": "typescript",
      "tsconfig": "Typescript/Sample/UsingTS/tsconfig.json",
      "option": "watch",
      "problemMatcher": [
        "$tsc-watch"
      ],
      "group": {
        "kind": "test",
        "isDefault": true
      },
      "label": "tsc: watch - Typescript/Sample/UsingTS/tsconfig.json"
    }
  ]
```


---