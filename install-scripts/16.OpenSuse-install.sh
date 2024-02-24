#!/bin/bash

# packer="sudo zypper -n install" # Wersja skrócona polecenia
packer="sudo zypper --non-interactive install --no-recommends"

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
$packer gcc
$packer libX11-devel
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
$packer mako
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
$packer rclone
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


## OPI APP
#opi google-chrome
#opi trash-cli
#opi subl

# OPI APP
echo 1 | opi google-chrome | echo 1
echo 1 | opi trash-cli | echo 1
echo 1 | opi subl | echo 1

# Install GitHub Desktop
sudo rpm --import https://rpm.packages.shiftkey.dev/gpg.key
sudo sh -c 'echo -e "[shiftkey-packages]\nname=GitHub Desktop\nbaseurl=https://rpm.packages.shiftkey.dev/rpm/\nenabled=1\ngpgcheck=1\nrepo_gpgcheck=1\ngpgkey=https://rpm.packages.shiftkey.dev/gpg.key" > /etc/zypp/repos.d/shiftkey-packages.repo'
sudo sh -c 'echo -e "[mwt-packages]\nname=GitHub Desktop\nbaseurl=https://mirror.mwt.me/shiftkey-desktop/rpm\nenabled=1\ngpgcheck=1\nrepo_gpgcheck=1\ngpgkey=https://mirror.mwt.me/shiftkey-desktop/gpgkey" > /etc/zypp/repos.d/mwt-packages.repo'
sudo zypper refresh && $packer github-desktop

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

# File Coopy
sudo cp /etc/tlp.conf /etc/tlp.conf.bak
sudo cp ~/dwm-install/files/etc/tlp.conf /etc
sudo cp -r ~/dwm-install/files/usr/share/rofi /usr/share
sudo cp -r ~/dwm-install/files/usr/share/xsesesions/dwm.desktop /usr/share/xsesesions
sudo cp -r ~/dwm-install/files/etc/X11/xorg.conf.d /etc/X11


cp ~/dwm-install/files/.vimrc ~/
cp ~/dwm-install/files/.xinitrc ~/
cp ~/dwm-install/files/.Xresources ~/
cp ~/dwm-install/files/.background ~/
cp ~/dwm-install/files/.bash_history ~/
cp ~/dwm-install/files/.bashrc ~/

cp -r ~/dwm-install/files/.icons ~/
cp -r ~/dwm-install/files/.config/* ~/.config

sudo chsh $USER -s /usr/bin/fish


# Install May DWM
cd ~/.config/dwm && make && sudo make clean install && cd ~
cd ~/.config/dwm/dmenu && make && sudo make clean install && cd ~
cd ~/.config/dwm/slstatus && make && sudo make clean install && cd ~
cd ~/.config/dwm/st && make && sudo make clean install


# JetBrainsMonoNerd Fonts
mkdir JetBrainsMonoNerd
git clone https://github.com/JetBrains/JetBrainsMono.git
sudo mkdir -r usr/share/fonts/JetBrainsMonoNerd
sudo cp -r JetBrainsMono/fonts/* /usr/share/fonts/JetBrainsMonoNerd
sudo fc-cache -fv

# Binata Cursors
git clone https://github.com/ful1e5/Bibata_Cursor.git
sudo cp -r Bibata_Cursor /usr/share/icons

# Catppucin Moch themes
sudo cp -r ~/dwm-install/files/usr/share/themes/Catppuccin-Mocha-Standard-Blue-Dark /usr/share/themes

## Set GTK Themes, Icons, Cursor and Fonts
THEME='Catppuccin-Mocha-Standard-Blue-Dark'
ICONS='Papirus-Dark'
FONT='JetBrainsMono Nerd Font 10'
CURSOR='Bibata-Modern-Ice'

SCHEMA='gsettings set org.gnome.desktop.interface'

apply_themes() {
	${SCHEMA} gtk-theme "$THEME"
	${SCHEMA} icon-theme "$ICONS"
	${SCHEMA} cursor-theme "$CURSOR"
	${SCHEMA} font-name "$FONT"
}

apply_themes

cd ~/.config/dwm/slstatus && rm config.h && make && sudo make clean install

systemctl reboot
