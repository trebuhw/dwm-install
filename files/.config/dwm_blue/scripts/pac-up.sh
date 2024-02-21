#!/bin/bash

exec st -e sudo sh -c 'sudo pacman -Syyu; pkill -SIGRTMIN+8 waybar'
