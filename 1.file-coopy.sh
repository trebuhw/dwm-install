#!/bin/bash


sudo cp ~/dwm-install/files/etc/pacman.conf /etc
sudo cp ~/dwm-install/files/etc/tlp.conf /etc
sudo cp ~/dwm-install/files/etc/pacman.d/arcolinux-mirrorlist /etc/pacman.d
sudo cp -r ~/dwm-install/files/usr/share/* /usr/share

sudo pacman -Syyu

cp ~/dwm-install/files/.vimrc ~/
cp ~/dwm-install/files/.xinitrc ~/
cp ~/dwm-install/files/.Xresources ~/
cp ~/dwm-install/files/.background ~/
cp ~/dwm-install/files/.bash_history ~/
cp ~/dwm-install/files/.bashrc ~/

cp -r ~/dwm-install/files/.config/dwm/.icons ~/
cp -r ~/dwm-install/files/.config/* ~/.config
rm -r ~/dwm-install/files/.config/suckless
cp -r ~/dwm-install/files/.config/suckless/* ~/.config

sudo chsh hubert -s /bin/fish

exit 0
