# dwm-install Archlinux

1. **Install scripts:** `00.install.sh`

2. **Reboot (automate)**

3. Run ATT - archlinux-tweak-tool (`pacman - add repo arcolinux`, `add key`)

4. **Install scripts:** `02`

---

5. **Options install scripts:** `07`, `08`, `09`, `10`

---

Scripts `10.ln-github-config` run scripts `2.all.app` after installation -> removes files from `.config` and creates `ln -s` from the repository `$HOME/Documents/GitHub/dwm-install/files/.config`

---

Scripts `11` install only false install scripts `00.install.sh` - (`01`, `02`, `03`, `04`, `05`)
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

 
