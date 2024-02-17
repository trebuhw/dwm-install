#!/bin/bash

cd ~/.config/suckless/dmenu && make && sudo make clean install && cd ~/
cd ~/.config/suckless/dwm && make && sudo make clean install && cd ~/
#cd ~/.config/dwm/dwmblocks && make && sudo make clean install && cd ~/
cd ~/.config/dwm/slstatus && make && sudo make clean install && cd ~/
cd ~/.config/dwm/st && make && sudo make clean install && cd ~/

## Install Suckless slstatus błąd w mojej instalacji
#mkdir ~/.config/dwm/suckles/
#cd ~/.config/dwm/suckles/
#git clone https://git.suckless.org/slstatus
#cd slstatus && make && sudo make clean install

exit 0
