#!/bin/bash


cd ~/dwm-install/files/

cp .vimrc .xinitrc .Xresorces ~/

cp -r ~/dwm-install/files/.config/* ~/.config

cd ~/.config/dwm && make && sudo make clean install
cd ~/.config/dwm/dmenu && make && sudo make clean install
cd ~/.config/dwm/slstatus && make && sudo make clean install
cd ~/.config/dwm/st && make && sudo make clean install

exit 0
