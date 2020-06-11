# YARN package manager

## What is YARN

JS package Manager
Faster and reliable alternative to NPM
Works from packages from NPM repository

## Commands

1. `yarn -v` version of Yarn
2. `yarn help` gives different yarn
3. `yarn init -y` to spawn a yarn project with package.json; `-y` flag takes default values for setting up package.json
4. `yarn config set init-license ISC` to set default license to ISC
5. `yarn config get init-license` to get the value of init-license
6. `yarn config delete init-license` to remove the configuration for init-license
7. `yarn add <<packageName>>` install a package as a dependency
8. `yarn install` to install any/all packages explicitly mentioned in the package.json
9. `yarn remove <<packageName>>` to remove a package from dependency
10. `yarn add <<packageName>>@x.xx.x` to install a package having specific version of x.xx.x
11. `yarn add <<packageName>>@x.xx.x -D` to install a package as a dev dependency
12. `yarn outdated` find outdated versions of installed packages
13. `yarn outdated <<packageNAme>>` find the outdated version of specific package
14. `yarn upgrade <<packageName>>` upgrading a specific package
15. `yarn global add <<packageName>>` globally install a package; **Must use global right after yarn**  
16. `yarn global bin` points to location where the global packages are installed
17. `yarn global remove <<packageName>>` remove a package globally
18. `yarn list` lists out all the dependencies and its dependencies
19. `yarn list --depth=0` lists the top level layer of dependencies
20. `yarn list --pattern <<packageName>>` lists a particular package
21. `yarn add <<packageName>> -D` or `--dev` to add a package as a development dependency
22. `yarn check` to check if the yarn.lock file is in sync with node_modules
23. `yarn import` to retrieve the yarn.lock file from the node_modules files
24. `yarn licenses list` to retrive the list of licenses
25. `yarn pack` to zip all packages into a .tgz files 
26. `yarn cache list` lists the packages in cache
27. `yarn cache list --pattern <<packageName>>`  packages in cache
28. `yarn cache clean` cleans the cache
29. `yarn start` or any other script can be run by replacing npm with yarn
