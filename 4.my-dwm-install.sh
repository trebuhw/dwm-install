#!/bin/bash

cd ~/.config/dwm && make && sudo make clean install &&
cd dmemu && make && sudo make clean install && cd ..
#cd ~/.config/dwm/dwmblocks && make && sudo make clean install && cd ~/
cd /slstatus && make && sudo make clean install && cd ..
cd /st && make && sudo make clean install

## Install Suckless slstatus błąd w mojej instalacji
#mkdir ~/.config/dwm/suckles/
#cd ~/.config/dwm/suckles/
#git clone https://git.suckless.org/slstatus
#cd slstatus && make && sudo make clean install

exit 0
