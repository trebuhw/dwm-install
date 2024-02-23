#!/bin/bash

# packer="sudo zypper -n install" # Wersja skrócona polecenia
packer="sudo zypper --non-interactive install"

$packer NetworkManager-applet
$packer alacritty
$packer avahi
$packer baobab
$packer bash-completion
$packer bat
$packer brightnessctl
$packer btop
$packer cpuid
$packer cups
$packer curl
$packer dconf-editor
$packer duf
$packer dunst
$packer fastfetch
$packer feh
$packer file-roller
$packer firefox
$packer fish
$packer flameshot
$packer font-manager
$packer galculator 
$packer gcc libX11-devel
$packer gcolor3
$packer gimp
$packer git
$packer gnome-disk-utility
$packer gparted
$packer gzip
$packer harfbuzz-devel
$packer htop
$packer i3lock
$packer kitty
$packer libXft-devel
$packer libXinerama-devel
$packer libreoffice
$packer libreoffice-l10n-pl
$packer lsd
$packer lxappearance
$packer meld
$packer mlocate
$packer neofetch
$packer neovim
$packer numlockx
$packer opi
$packer os-prober
$packer p7zip
$packer papirus-icon-theme
$packer pavucontrol
$packer pdfarranger
$packer picom
$packer polkit
$packer polkit-gnome
$packer ranger
$packer rclone
$packer ripgrep
$packer rofi
$packer rsync
$packer rsync
$packer sensors
$packer starship
$packer sxhkd
$packer sxiv
$packer system-config-printer
$packer thunar
$packer thunar-volman
$packer time
$packer tlp
$packer tree
$packer unrar
$packer unzip
$packer vim
$packer vlc
$packer wget
$packer xclip
$packer xdg-user-dirs
$packer xfce4-notifyd
$packer xinit
$packer xorg-x11-Xvnc           
$packer xorg-x11-Xvnc-module
$packer xorg-x11-driver-video
$packer xorg-x11-essentials
$packer xorg-x11-fonts
$packer xorg-x11-fonts-converted
$packer xorg-x11-fonts-core
$packer xorg-x11-fonts-legacy
$packer xorg-x11-libX11-ccache
$packer xorg-x11-server
$packer xorg-x11-server-Xvfb
$packer xorg-x11-server-extra
$packer xorgproto-devel

#opi google-chrome
#opi subl
#opi trash-cli
#opi github-desktop

# Instalować dopiero po dodaniu repo Nvidia
#$packer kernel-firmware-nvidia
#$packer libnvidia-egl-wayland1
#$$packer nvidia-compute-G06
#$packer nvidia-compute-G06-32bit
#$packer nvidia-driver-G06-kmp-default
#$packer nvidia-gl-G06
#$packer nvidia-gl-G06-32bit
#$packer nvidia-video-G06
#$packer nvidia-video-G06-32bit
#$packer openSUSE-repos-MicroOS-NVIDIA
#$packer openSUSE-repos-Tumbleweed-NVIDIA
