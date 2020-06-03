## VSCode Shortcuts

### VSCode Settings and Pages
- `Ctrl + K + Ctrl + S` #opens keybindings page
- `Ctrl + K Z` #Open Zen mode to concentrate on coding
    - Uncheck from settings `Zen Mode: Hide Line Numbers`
- `Alt + Q` Manual keybinding to the command pallet - Emmet: Wrap individual lines with abbreviation
- `Shift + Ctrl + P` Open up the command pallet in VSCode
    - Remove the `>` symbol and you are at the _search files_ command pallette
    - type `@` keyword and you can list out all the entities in the file
- `Ctrl + P / Ctrl + E` #To open file from the VScode workbench
    - After doing `Ctrl + E`, select the file to open, and press `Ctrl + Right` #split the file to the right
- `Ctrl + '+'` #To increase/decrease the font size of the VSCode
- `Ctrl + ,` #access default settings of VSCode
- `Ctrl + Shift + M` to open the problems tab

### Syntax Support
Generic
- `Ctrl + Space` #Code completion
- `Ctrl + .` Provide quick fix by intellisense
- `Alt + Shift + F` Use formatter to format the page (User settings can be found in settings.JSON)
- `Shift + Alt + A` #to insert block comment
- `Double click new tab` to remove the file preview mode of all new unedited tabs

HTML
- Select the lines you wish to enclose with HTML then`Ctrl + Shift + P` and type `wrap` and then enter the `html tag`
CSS
- `Alt+Shift+F` Format CSS/SCSS code in VSCode
Node
- `Ctrl +Alt + N` To run the JS code using inbuilt node and output in console; using the Code runner extension
- `Ctrl + Shift + B` #Run build task

### Toggling Windows
- `Ctrl + B` #toggle on/off sidebar
- `Shift + Ctrl + E` #focussing on sidebar
- `Shift + Ctrl + N` #new VSCode window
- `Ctrl + Tab` #Change File Tabs
- `Ctrl + W` #close active sheet/window
- `Ctrl + K   Rt Arrow/Left Arrow` To toggle between the editor groups
- `Ctrl + Shift + Tab` to toggle between the editor groups
- `Alt + Left/ Alt + Right` #Move between files
- `Ctrl + \` #to toggle split screen
- `Ctrl + K V` to open preview mode of the MD file to the right

### Text Selection
- `Ctrl + K ;` Select all the contents inside a ` , ' , "
- `Ctrl + K [` Select all the contetns inside a square braket
- `Ctrl + K Shift + '(' / '<' /  '{'` Select all the contetns inside a parenthesis, angle brackets and curly brackets
- `Ctrl + D` #select next match 
- `Ctrl + U` #de-select match

### Text Formatting
- `Alt + UpArrow / Alt + DownArrow` #For moving a line in VSCode
- `Shift + Alt + UpArrow / Shift + Alt + DownArrow` #For copying a line either up or down
  - `Shift + Alt + Right` #for selecting the corresponding data
  - `Shift + Alt + Left` #for shrinking the selected data
- `CTrl + L` select the entire line

### Text Movement
- `Ctrl + Home` #to go the start of file     
    `Ctrl + End` #to go to the end of file
- `Shift + Ctrl + K` #to remove line
- `Ctrl+ Enter` #to insert line from between the line   
    `Ctrl + Enter` #from a file in sidebar will toggle split screen
- `Shift + Ctrl + \` #shift to matching brackets
- `Fn + Left Arrow / Rt Arrow` go to start/end of the line
- `Ctrl+F2` / `Alt + Select lines Randomly` Select Multilines in VSCode
- `Shift + Alt + (drag mouse)` Column box selection
- `Alt + Click` #add cursor to select specific points
- `Ctrl + Right/left` #move along the line faster by moving by words

### Navigation and Code Explanation
- `Alt + #` where # is a number to select individual tabs in VSCode 
- `Ctrl + SHift + ;` to toggle breadcrumbs and then use `arrow keys` to navigate and later `space / enter` to view the contents
- `Ctrl + Hover on Function` to view the function definition
- `CTrl + Shift + o` #go to a function or entity withing the page
- `F2` on the element you wish to refactor #will refactor all intances within the file and across all files wherever it is referenced
- `Ctrl + Alt + Click` to view the definiton on the side pane
- ``Alt+ ` `` peek the definition inline
- `Select keyword + F2` to rename the function; press `enter` / `Shift + Enter` to priview the chages before accepting the change; do it twice for entering the update


### Folding blocks
- `Ctrl + K Ctrl + 0` fold all code
- `Ctrl + K Ctl + J` unfold all code
- `Ctrl + Shift + [ or ] ` fold or unfload a block code
- `Ctrl + K Ctrl + ]` unfold recursively
- `Ctrl + K  and Ctrl + -` Collapses all files on the Explorer window


### Integrated Terminal
- `code fileName.ext` opens the file in a new tab in VSCode 
- `Alt + /` **Custom** to go to next terminal
- `Alt + '` **Custom** to kill current terminal
- `CTrl + / + Shift` or `Ctrl + /` to clear the terminal; Command: `workbench.action.terminal.clear`;
- ``Shift + Ctrl + `` #create new terminal

### Chrome DevTools
- `Alt + Click on HTML` _tag to collapse all content in Chrome Developer tools \*\*Chrome Dev Tools_

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
    **Java Decompiler** - _David Gileadi_
    **XML** - _RedHat_
17. **Auto-Open Markdown Preview** - _hnw_  
18. **Path Intellisense** - _Christian Kohler_
19. **TSLint** - _Microsoft_
20. **Numbered Bookmarks** - _Alessandro Fragnani_
21. **Paste JSON As Code** - _quicktype_
22. **Git Lens** - 
23. **Bracket Pair Colorizer 2** - _CoeenradS_
24. **Angular Snippets(Version 9)** - _John Papa_
25. **Angular Language Service** - _Angular_
26. **npm** - _egamma_
27. **EditorConfig for VS Code** - _EditorConfig_
28. **nx console** - _nrwl_
29. **Quick and Simple Text Selection** - _David Bankier_ #for providing some shortcuts for easy text selection


---
## VSCode settings

1. **Set git-bash as default terminal**:   
Press `Ctrl+Shift+P` and enter `terminal.integrated.shell.windows` in search bar, there add the path to the git-bash: `C:\Program Files\Git\bin\bashe.exe`
2. `File --> AutoSave` set autosave on 

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