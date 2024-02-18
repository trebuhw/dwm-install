#!/bin/bash
set -e
##################################################################################
echo "###########################################################################"
echo "##      This script assumes you have the linux kernel running        ##"
echo "###########################################################################"

sudo pacman -S --noconfirm --needed virtualbox
sudo pacman -S --needed --noconfirm virtualbox-host-dkms

echo "###########################################################################"
echo "##      Removing all the messages virtualbox produces         ##"
echo "###########################################################################"
VBoxManage setextradata global GUI/SuppressMessages "all"

echo "###########################################################################"
echo "#########               You have to reboot.                       #########"
echo "###########################################################################"
