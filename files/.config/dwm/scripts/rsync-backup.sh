#!/bin/bash

notify-send "Archiwum / backup - rozpoczęty" ;

archiwum=/run/media/hubert/Archiwum/Linux/Backup/231120_OpenSuse/
fl="-rlpv" # rsync flags
opt="--exclude" # Wykluczone foldery

rsync $fl $opt '.cache' $opt '.gnupg' $opt '.log' $opt '.mozilla' $opt '.npm' $opt '.pki' $opt '.ssh' $opt 'bin' $opt 'Cloud' ~/ $archiwum/Hubert/ ;

notify-send "Archiwum / Backup - zakończony" ;

exit
