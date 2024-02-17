#!/bin/bash

cd ~/dwm-install/install-scripts && 
sh 1.minimal-app-install.sh && 
sh 3.file-copy.sh && 
sh 4.my-dwm-install.sh && 
sh 5.set-gtkthemes.sh &&

cd ~/.config/dwm/slstatus && make && sudo make clean install

systemctl reboot

