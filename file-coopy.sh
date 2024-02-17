#!/bin/bash


cd ~/dwm-install/files/

cp .vimrc .xinitrc .Xresorces ~/

cp -r ~/dwm-install/files/.config/* ~/.config

cd etc && sudo cp pacman.conf tlp.conf /etc

cd pacman.d && sudo cp arcolinux-mirrorlist /etc/pacman.d

cp ~/dwm-install/files/.config/dwm/.icons ~/

sudo cp ~/dwm-install/files/.config/dwm/usr/share/* /usr


cd ~/.config/dwm && make && sudo make clean install
cd ~/.config/dwm/dmenu && make && sudo make clean install
cd ~/.config/dwm/slstatus && make && sudo make clean install
cd ~/.config/dwm/st && make && sudo make clean install

exit 0
