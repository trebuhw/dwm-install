# dwm-install Archlinux

1.**Install Archlinux:**

- Download archlinux, do `archinstall`, do `minimal install`, install `git, vim, kitty, firefox`. Restart.

- Log in,

- run `pacman -Syyu`

- `git clone http://github.com/trebuhw/dwm-install.git`

- cd `~/dwm-install.git`

2. **Install scripts:** `00.install.sh`

- he installs `(01.minimal-app-install.sh`, `03.file-copy.sh`, `04.my-dwm-install.sh`, `05.set-gtkthemes-arc.sh`)

- remove "#" `00.install.sh` if you want to install immediately `07-install-bluetooth.sh`, `08-install-cups.sh`, `09.install-virtualbox.sh`  

---

3. **Reboot (automate)**

---

4. **Start DWM**

- log in, 

- run startx 

- run ATT - archlinux-tweak-tool (`pacman - add repo arcolinux`, `add key`) - needed to download the remaining programs from the arcolinux repository without building via yay

---

5. **Install scripts:** 

`02.all-app-install.sh` 

---

6. **Options install scripts:** 

`07-install-bluetooth.sh`, 

`08-install-cups.sh`, 

`09.install-virtualbox.sh`, 

`10.ln-github-config.sh`

---

- If you want to manage files via your github add files to the repository do ln -s giving your path

- Scripts `10.ln-github-config` run scripts `2.all.app` after installation -> removes files from `.config` and creates `ln -s` from the repository `$HOME/Documents/GitHub/dwm-install/files/.config`

---

Scripts ``10.ln-github-config.sh`
` install only false install scripts `00.install.sh` - (`01`, `02`, `03`, `04`, `05`)
this is the original repository Suckless

### **Keybindings:**

- `super=win` `ModKey4` - default
- `super + enter` = terminal `kitty`
- `super + c` = web browser `google-chrome-stable`
- `super + s` = editor `sublime-text-4`
- `super + d` = launcher `dmenu`
- `super + p` = launcher `dmenu - powermenu`
- `alt + d` = launcher `rofi -show drun`
- `alt + shift+ d` = launcher `rofi -show run`
- `super + q` = kill window `pkill`
- `super + shift + q` = reload `dwm`

### **Theme:**

`lxappearance` - `set your choise`

- `GTK` - `Adwaita, arc-theme, dracula`
- `Cursors` - `Adwaita, Bibata-Modern-Ice, Dracula-cursors`
- `Icons` - `Adwaita, Papirus, Dracula`
- `Fonts` - `JetBrainsMono Nerd Font 10`

 
