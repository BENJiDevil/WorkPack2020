#WorkPack2020
Work envoriment for Frontend develop + Modx Revo (CMF) in one pack :) 
##Needed
    — server
    — node js
    — npm
##Using
    — use npm install
    — check settings gulpfile.js
    — Front:
      - check css settings src/css/_parts/_settings.sass
      - check css libs src/css/_parts/_plugins.sass
      - check js libs src/js/common.js
      - use gulp front_build for work / gulp front_release for release
    — ModxRevo:
      - check settings in src/modx/updsite/config.php
      - check settings in src/modx/updsite/resolvers/01_setup.php (packages)
      - use gulp modx_install (for create main files)
      - unzip modx archive
      - cd to setup folder and use php index.php --installmode=new
      - cd to updsite folder and use index.php
      - use modx_build to work with tpls