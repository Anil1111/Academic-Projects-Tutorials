## Terminal Commands

`ls / ls -alt` #to list all subdirectories  
`-a` - lists all contents, including hidden files and directories  
`-l` - lists all contents of a directory in long format #Columns: access noOfChildLinks ownerName groupName size timestamp  
`-t` - order files and directories by the time they were last modified  
`ls -1` #to list items vertically stacked  
`pwd` #present working directory  
`mkdir`, `touch`, `cd`  
`cat <<filename>>`#to view the contents of the file in BASH - Bourne Again shell  
`cp sourceFile destFile` #copy contents of sourceFile to destFile  
`cp sourceFile1 sourceFile2 destDir/` #copy multiple files into the destDir/  
`cp -r ../HTTP1/GET ./`  
`cp * destDir/`  
`cp *name.txt destDir/` #* wildcard to select all files in the working directory to be copied & copy *name.txt  
`mv sourceFile1 destDir/` #copy sourceFile into destDir/  
`mv fileName1 fileName2` #renames fileName1 to fileName2  
`rm filename / rm -r dirName` or `rm -rf dirName` #to remove files or list of files recursively ;  
`date` #print the timestamp
`history` #prints the history of the commands executed
`head <<filename>>` #command to print the first ten lines of filename
`env` #prints the environmental settings
`clear` #clears the terminal

`>` Standard output  
`<` Standard Input

`echo "hello" > fileName` #copy the "hello" into fileName;

- `>`takes the standard output of the command on the left, redirects it to right file;
- `>` overwrites all the contents of fileName

`echo "hello" >> fileName / cat fileName1 >> fileName2` #appends "hello" into the exisiting content of fileName; contents of fileName1 are added  
`cat < fileName` #< takes the standard input from the file on the right and inputs it into the program on the left  
`sort fileName | uniq > fileName2` #sorts the contents of fileName alphabetically and then pipes it as argument to uniq function that eliminates adjacent dupplicates and whose value is used as content in fileName2; `|` is the pipe operater that pipes the result of the first command into next  
`grep <<searchText>> fileName` #grep(global regular expression) is used to search for lines that match a pattern;  
`grep -i <<searchText>> fileName` #case insensitive search  
`grep -r <<searchText>> dirName` #check recursively in all the files within the directory and outputs filenames and lines  
`grep -r <<searchText>>` #search in present directory as . represents it  
`grep -l <<searchText>> dirName` #check recursively in all the files within the directory and outputs filenames only  
`grep -v fileName` #outputs all the lines where the fileName does not appear  
`wc <<fileName>>` #command outputs the number of lines, words, and characters in a file
`sed 's/<<searchText>>/<<replaceText>>/g' <<fileName>>` #sed(stream editor) which is used for search and replace in fileName; s stands for substitution, whereas g stands for global

### Bash Commands

#### NANO

`nano <<filename>>` #opens the file in nano text editor  
`nano ~/.bash_profile` #opens the bash profile where you can set the environmental settings and gets saved as a hidden file in user directory  
`Ctrl + O` #for saving the file in nano  
`Ctrl + X` #to exit  
`source ~/.bash_profile` #to implement the settings in bash profile in current terminal session or else restart a fresh terminal session  
To remove nano error: `dos2unix /usr/share/nano/git.nanorc` #execute the command in git-bash by running as admin  
`#comments` #For inserting comments

#### BASH SCRIPTS

use the `./bashScript.sh` to view  
 `~` #represents the home directory  
`chmod +x <<script>>.sh` #provide execute privilege to script  
`./<<scriptname.sh>>` #running a bash scr
