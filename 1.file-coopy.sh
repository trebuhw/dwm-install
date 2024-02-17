#!/bin/bash


sudo cp ~/dwm-install/files/etc/pacman.conf /etc
sudo cp ~/dwm-install/files/etc/tlp.conf /etc
sudo cp ~/dwm-install/files/etc/pacman.d/arcolinux-mirrorlist /etc/pacman.d
sudo cp ~/dwm-install/files/usr/share/* /usr

sudo pacman -Syyu

cp ~/dwm-install/files/.vimrc ~/
cp ~/dwm-install/files/.xinitrc ~/
cp ~/dwm-install/files/.Xresources ~/
cp ~/dwm-install/files/.config/dwm/.icons ~/

cp -r ~/dwm-install/files/.config/* ~/.config

cd ~/.config/dwm && make && sudo make clean install
cd ~/.config/dwm/dmenu && make && sudo make clean install
cd ~/.config/dwm/slstatus && make && sudo make clean install
cd ~/.config/dwm/st && make && sudo make clean install

exit 0
