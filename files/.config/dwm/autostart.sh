#!/bin/bash

function run {
 if ! pgrep $1 ;
  then
    $@&
  fi
}
run $HOME/.screenlayout/1.sh
#run "dex $HOME/.config/autostart/arcolinux-welcome-app.desktop"
run "xrandr --output Virtual-1 --mode 1920x1080 --pos 0x0 --rotate normal"
#run "xrandr --output VGA-1 --primary --mode 1360x768 --pos 0x0 --rotate normal"
#run "xrandr --output HDMI2 --mode 1920x1080 --pos 1920x0 --rotate normal --output HDMI1 --primary --mode 1920x1080 --pos 0x0 --rotate normal --output VIRTUAL1 --off"
#run xrandr --output eDP-1 --primary --mode 1368x768 --pos 0x0 --rotate normal --output DP-1 --off --output HDMI-1 --off --output DP-2 --off --output HDMI-2 --off
#run xrandr --output LVDS1 --mode 1366x768 --output DP3 --mode 1920x1080 --right-of LVDS1
#run xrandr --output DVI-I-0 --right-of HDMI-0 --auto
#run xrandr --output DVI-1 --right-of DVI-0 --auto
#run xrandr --output DVI-D-1 --right-of DVI-I-1 --auto
#run xrandr --output HDMI2 --right-of HDMI1 --auto
#autorandr horizontal

run setxkbmap pl &
xrdb ~/.Xresources &
run nm-applet &
run ~/.config/dwm/scripts/rclone.sh &
#run "pamac-tray" &
#run "variety" &
#run "xfce4-power-manager" &
#run "blueberry-tray" &
run /usr/libexec/xfce4/notifyd/xfce4-notifyd & #OpenSuse
# run /usr/lib/xfce4/notifyd/xfce4-notifyd & Arch
#run "/usr/lib/polkit-gnome/polkit-gnome-authentication-agent-1" & # Archlinux authentication
run /usr/libexec/polkit-gnome-authentication-agent-1 & # OpenSuse authentication
picom -b  --config ~/.config/dwm/picom.conf &
run numlockx on &
#run "volumeicon" &
run slstatus &
sxhkd -c ~/.config/dwm/sxhkd/sxhkdrc &
#run "nitrogen --restore" &
feh --bg-fill $HOME/.background.jpg &
# feh --bg-fill $HOME/.config/dwm/bg/sea.jpg &
