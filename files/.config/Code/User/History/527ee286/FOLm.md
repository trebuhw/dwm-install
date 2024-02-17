## DWM - Arcolinux mod to HW, ST - Luck

### **Install:**

---
```
pacman -S dwm dmenu st slstatus google-chrome archlinux-logout
```
---
```
git clone dwm to ~/.config

cd ~/.config/dwm/st

make
```
---
```
sudo make clean install

cd ~/.config/dwm/

make

sudo make clean install
```
---

```
cd ~/.config/dwm/slstatus

make

sudo make clean install
```
---

#### *dmenu - config is dwm file*
---

### **Keybinding:**

super=alt `ModKey1` - domyslny

super=win `ModKey4` - alternate

super + enter = terminal `st`

super + c = webbrowser `google-chrome-stable`

super + p = launcher `dmenu`

super + q = kill window `pkill`

super + x = logout `archlinux-logout`

---

# **_INSTAL TO PURGE DWM_**

---
```
sudo pacman -S xorg-server xorg-xinit xorg-xrandr xorg-xsetroot firefox git vim ranger
```
---

`cp /etc/X11/xinit/xinitrc .xinitrc`

vim .xinitrc

delate 3 last line to &

#### add to file:

---
```
# Keyboard
setxkbmap pl &

# Display- (chande Virtual-1 to eDP-1 search your display)
# Virtual-1 - is virtual machine display
# eDP-1 - is real display

xrandr --output Virtual-1 --mode 1920x1080 &

# Loop

while true; do
dwm >/dev/null 2>&1
done
```

---

### # DWM

```
exec dwm
```

---

`vim :wq`

---

```
mkdir Downoload

cd Downoload

git clone https://git.suckless.org/dwm

git clone https://git.suckless.org/st

git clone https://git.suckless.org/dmenu

git clone https://git.suckless.org/slstatus
```

---

```
mkdir ~/.config/suckless

cd ~/.suckless

git init
```

---

```
cp ~/Downoload/dwm ~/.config/suckless

cp ~/Downoload/st ~/.config/suckless

cp ~/Downoload/dmenu ~/.config/suckless

cp ~/Downoload/slstaus ~/.config/suckless

```
remowe git file all folders

---

```
cd /dwm ~/.config/suckless

make

sudo make clean install
```

---

```
cd /st ~/.config/suckless

make

sudo make clean install
```

---

```
cd /dmenu ~/.config/suckless

make

sudo make clean install
```

---

```
cd /slstaus ~/.config/suckless

make

sudo make clean install
```

---

```
cd /dwm

startx
```

---

### patch applay:

cd ~/.config/suckless

mkdir patch

downoload patch to ~/.config/suckless/patch

cd ~/.config/suckless/dwm

```
patch < ~/.config/suckless/patch/"your patch"
```

---

### Desktop file ( your choice do dispaly manager)

vim /usr/share/xsessions/dwm.desktop

copy to file:

```
[Desktop Entry]

Encoding=UTF-8

Name=Dwm

Comment=Dynamic window manager

Exec=dwm

Icon=dwm

Type=XSession

```

vim :wq
