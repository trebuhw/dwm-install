#!/bin/bash

# Lista repozytoriów do dodania
repozytoria=(
  "https://aur.archlinux.org/yay"
  "https://github.com/archlinux/paru.git"
  "https://github.com/dolphin-emu/dolphin.git"
)

# Aktualizacja kluczy
pacman -Sy

# Dodawanie repozytoriów
for repo in "${repozytoria[@]}"; do
  echo -e "[${repo}]\nSigLevel = Optional TrustAll" >> /etc/pacman.conf
done

# Odświeżanie bazy danych pakietów
pacman -Syu

# Komunikat o zakończeniu
echo "Skrypt zakończył działanie. Pamiętaj o zainstalowaniu pakietów z nowo dodanych repozytoriów."
