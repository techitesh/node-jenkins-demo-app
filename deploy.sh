-#!/bin/sh     
<<EOF       
 cd /root/node-jenkins-demo-app
 git pull      
 npm install --production      
 pm2 restart all
 exit      
EOF