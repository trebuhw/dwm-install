#!/bin/bash


#sudo cp ~/dwm-install/files/etc/pacman.conf /etc
sudo cp ~/dwm-install/files/etc/tlp.conf /etc
#sudo cp ~/dwm-install/files/etc/pacman.d/arcolinux-mirrorlist /etc/pacman.d
sudo cp -r ~/dwm-install/files/usr/share/* /usr/share

#sudo pacman-key --init
#sudo pacman-key --refresh-keys
#sudo pacman -Sy archlinux-keyring

sudo pacman -Syyu


cp ~/dwm-install/files/.vimrc ~/
cp ~/dwm-install/files/.xinitrc ~/
cp ~/dwm-install/files/.Xresources ~/
cp ~/dwm-install/files/.background ~/
cp ~/dwm-install/files/.bash_history ~/
cp ~/dwm-install/files/.bashrc ~/

cp -r ~/dwm-install/files/.config/.icons ~/
cp -r ~/dwm-install/files/.config/* ~/.config
rm -r ~/dwm-install/files/.config/dwm
cp -r ~/dwm-install/files/.config/dwm/* ~/.config

sudo chsh hubert -s /bin/fish

exit 0
