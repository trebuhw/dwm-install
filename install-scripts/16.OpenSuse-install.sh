#!/bin/bash

# packer="sudo zypper -n install" # Wersja skrócona polecenia
packer="sudo zypper --non-interactive install --no-recommends"

$packer\
NetworkManager-applet\
alacritty\
avahi\
baobab\
bash-completion\
bat\
brightnessctl\
btop\
cpuid\
cups\
curl\
dconf-editor\
duf\
dunst\
fastfetch\
feh\
file-roller\
firefox\
fish\
flameshot\
font-manager\
galculator\
gcc\
libX11-devel\
gcolor3\
gimp\
git\
gnome-disk-utility\
gparted\
gzip\
harfbuzz-devel\
htop\
i3lock\
kitty\
libXft-devel\
libXinerama-devel\
libreoffice\
libreoffice-l10n-pl\
lsd\
lxappearance\
mako\
meld\
mlocate\
neofetch\
neovim\
numlockx\
opi\
os-prober\
p7zip\
papirus-icon-theme\
pavucontrol\
pdfarranger\
picom\
polkit\
polkit-gnome\
ranger\
rclone\
ripgrep\
rofi\
rclone\
rsync\
sensors\
starship\
sxhkd\
sxiv\
system-config-printer\
thunar\
thunar-volman\
time\
tlp\
tree\
unrar\
unzip\
vim\
vlc\
wget\
xclip\
xdg-user-dirs\
xfce4-notifyd\
xinit\
xorg-x11-Xvnc\
xorg-x11-Xvnc-module\
xorg-x11-driver-video\
xorg-x11-essentials\
xorg-x11-fonts\
xorg-x11-fonts-converted\
xorg-x11-fonts-core\
xorg-x11-fonts-legacy\
xorg-x11-libX11-ccache\
xorg-x11-server\
xorg-x11-server-Xvfb\
xorg-x11-server-extra\
xorgproto-devel\


## OPI APP
opi google-chrome
opi trash-cli
opi subl

# OPI APP
#echo 1 | opi google-chrome | echo 1
#echo 1 | opi trash-cli | echo 1
#echo 1 | opi subl | echo 1

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
