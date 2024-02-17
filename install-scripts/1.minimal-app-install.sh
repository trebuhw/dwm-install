#!/bin/bash

packer="sudo pacman -S --noconfirm --needed"
#packer="sudo zypper install --no-recommends"

cd ~/ && git clone https://aur.archlinux.org/yay.git
cd ~/yay && makepkg -si && cd ..
# cd ~/ && rm -r yay 

#rm -r ~/yay

sudo pacman -Syyu

## Xorg & DWM

### Programs

$packer xorg-server
$packer xorg-xinit
$packer xorg-xrandr
$packer xorg-xsetroot
$packer xdg-user-dirs
$packer bash-completion
$packer kitty
$packer alacritty
$packer thunar
$packer firefox
$packer git
$packer vim
$packer feh
$packer dunst
$packer btop
$packer fish
$packer starship
$packer flameshot
$packer lsd
$packer neofetch
$packer fastfetch
$packer neovim
$packer ranger
$packer rclone
$packer rsync
$packer tldr
$packer zathura
$packer sxiv
$packer rofi
$packer i3lock
$packer gcolor3
$packer brightnessctl
$packer lm_sensors
$packer picom
$packer polkit
$packer polkit-gnome
$packer cups
$packer sxhkd
$packer bibata-cursor-theme-bin
$packer lxappearance
$packer tlp
$packer ttf-jetbrains-mono-nerd
$packer arc-gtk-theme
$packer papirus-icon-theme
$packer yazi
$packer trash-cli
$packer numlockx
$packer nm-applet
$packer xclip
$packer xfce4-notifyd
yay archlinux-tweak-tool-git
yay google-chrome-stable
yay sublime-text-4

exit 0




