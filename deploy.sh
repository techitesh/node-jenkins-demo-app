-#!/bin/sh     
<<EOF       
 git pull      
 npm install --production      
 pm2 restart all
 exit      
EOF