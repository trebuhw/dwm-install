#!/bin/bash

exec st -e sudo sh -c 'yay -Syyu; pkill -SIGRTMIN+8 waybar'
