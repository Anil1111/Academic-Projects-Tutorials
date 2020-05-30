## GIT Commands

`git init` # To initialize a GIT repo  
`git config --global user.name = "<name>"`  
`git config --global user.email = "<email>"`  
`git clone remote_location clone_name` #Cloning a git repository from a remote location  
`git status` #To check the status of the working tree  
`git add .` #To stage the files; ready for commit  
`git commit -m "message"` #To commit  
`git remote -v` #To view the URL of remote file  
`git remote add origin <<url>>` #UsedTogether  
`git push -u origin master` #UsedTogether and enter username and password  
`git rm <filename>` #Removing filename  
`touch <filename>` #Creates new file  
`.gitignore` #Create this file to add the exception list of all the files you do not wish to commit  
`git push origin <<master>>` #To push changes tfrom master / branchName to remote repo  
`git pull <<origin>>`  
`git checkout <branchName>` #Checking out the current branch; default: master  
`git branch <branchname>` #Creating a new branch  
`git branch / git show-branch` #To view the existing branch  
`git branch -d <<brnachName>>` #To delete the branchName  
`git merge <<branchName>>` #To merge the branch to master  
`git diff <<filename>>` #To view changes made to a file #use q to exit the less file  
`set git config --global` #Would appear blank if no differnce found  
`git log` #To view log files  
`git log --oneline --graph`/ `git shortlog` #For better viewing of the log output
`git checkout head <<filename>>` #To retrieve the last commited version of the filename; HEAD refers to the last commit  
`git checkout --<<filename>>` #To retrieve the last commited version of the filename -SAME as above  
`git reset <<last6charsOfLastCommit>>` #to retrieve all the last commit files  
`git reset head <<filename>>` #to remove the file from staging  
`git fetch` & `git merge origin/master` #to fetch and later merge the latest updates into the master branch

### To fix detached Head:

`git branch Temp` #all changes need to be committed  
`git checkout master`  
`git merge Temp`  
`git branch -d Temp`

### Removing unecessary changes from last commit:

`git reset --hard HEAD`  
`git clean -f, git clean -n` #remove all untracked files  
`git clean -d -f, git clean -f -n` #to remove all untracked directories

### Stashing to sideline some conflict changes in master while merging branch:

`git Stash` #to create a stash  
`git stash apply` #to apply the stash  
`git stash show` #to view all available stashes  
`git stash clear` #clear any stash

### For removing already tracked file/folder:

`git rm -r --cached <folder>`  
`git rm --cached <file>`

### Reference error in Master branch

`rm .git/refs/remotes/origin/master`  
`git fetch`  
`git branch --set-upstream-to=origin/master`

### The workflow for Git collaborations typically follows this order:

1. Fetch and merge changes from the remote
2. Create a branch to work on a new project feature
3. Develop the feature on your branch and commit your work
4. Fetch and merge from the remote again (in case new commits were made while you were working)
5. Push your branch up to the remote for review and Merge the accepted branh chages into master

### GIT commit with Vim

1. `git add .`
2. `git commit`
   - it will open up the vim editor where you can enter multiline commit messages
   - use `esc` + `:wq` to save the commit file and press `enter`

---
