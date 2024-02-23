#!/bin/bash

# packer="sudo zypper -n install" # Wersja skrócona polecenia
packer="sudo zypper --non-interactive install"

$packer xorg-x11-driver-video
$packer xorg-x11-essentials
$packer xorg-x11-fonts
$packer xorg-x11-fonts-converted
$packer xorg-x11-fonts-core
$packer xorg-x11-fonts-legacy
$packer xorg-x11-libX11-ccache
$packer xorg-x11-server
$packer xorg-x11-server-extra
$packer xorg-x11-server-Xvfb
$packer xorg-x11-Xvnc           
$packer xorg-11-Xvnc-module
$packer xorgproto-devel
$packer xinit
$packer xdg-user-dirs
$packer gcc libX11-devel
$packer libXft-devel
$packer libXinerama-devel
$packer harfbuzz-devel
$packer alacritty
$packer bat
$packer bash-completion
$packer brightnessctl
$packer btop
$packer cups
$packer fastfetch
$packer feh
$packer file-roller
$packer firefox
$packer fish
$packer flameshot
$packer gcolor3
$packer git
$packer gzip
$packer i3lock
$packer kitty
$packer sensors
$packer lsd
$packer lxappearance
$packer neofetch
$packer neovim
$packer NetworkManager-applet
$packer numlockx
$packer os-prober
$packer p7zip
$packer papirus-icon-theme
$packer picom
$packer polkit
$packer polkit-gnome
$packer ranger
$packer rclone
$packer rofi
$packer rsync
$packer starship
$packer sxhkd
$packer sxiv
$packer thunar
$packer thunar-volman
$packer tlp
$packer unrar
$packer unzip
$packer vim
$packer xclip
$packer kernel-firmware-nvidia
$packer libnvidia-egl-wayland1


# Instalować dopiero po dodaniu repo Nvidia
#$packer nvidia-compute-G06
#$packer nvidia-compute-G06-32bit
#$packer nvidia-driver-G06-kmp-default
#$packer nvidia-gl-G06
#$packer nvidia-gl-G06-32bit
#$packer nvidia-video-G06
#$packer nvidia-video-G06-32bit
#$packer openSUSE-repos-MicroOS-NVIDIA
#$packer openSUSE-repos-Tumbleweed-NVIDIA
