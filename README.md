# dwm-install Archlinux

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

1. **Install scripts:** `0.install.sh`

2. **Reboot (automate)**

3. Run ATT - archlinux-tweak-tool (`pacman - add repo arcolinux`, `add key`)

4. **Install scripts:** `2`

---

5. **Options install scripts:** `7`, `8`

---

Scripts `10.ln-github-config` run scripts `2.all.app` after installation -> removes files from `.config` and creates `ln -s` from the repository `$HOME/Documents/GitHub/dwm-install/files/.config`

---

Scripts `9` install only false install scripts `0.install.sh` - (`1`, `2`, `3`, `4`, `5`)
this is the original repository Suckless

 
