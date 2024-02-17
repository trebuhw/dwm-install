#!/bin/bash
sudo pacman -S  firefox git vim
#packer="sudo pacman -S --noconfirm --needed"
packer="sudo zypper install --no-recommends"

$packer xorg-server
$packer xorg-xinit
$packer xorg-xrandr
$packer xorg-xsetroot
$packer xdg-user-dirs
$packer bash-completion
$packer kitty
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
#$packer github-desktop
#$packer google-chrome
$packer lsd
$packer neofetch
$packer fastfetch
$packer neovim
#$packer pdfarranger
$packer ranger
$packer rclone
$packer rsync
$packer tldr
$packer zathura
$packer sxiv
$packer rofi
$packer i3lock
$packer i3color
$packer gcolor2

exit 0




