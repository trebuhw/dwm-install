if status is-interactive
    # Commands to run in interactive sessions can go here
end

set fish_greeting
starship init fish | source
set -gx EDITOR nvim
set -Ux FZF_DEFAULT_OPTS "--color=fg:#f8f8f2,bg:#282a36,hl:#bd93f9 --color=fg+:#f8f8f2,bg+:#44475a,hl+:#bd93f9 --color=info:#ffb86c,prompt:#50fa7b,pointer:#ff79c6 --color=marker:#ff79c6,spinner:#ffb86c,header:#6272a4"
set -gx QT_QPA_PLATFORMTHEME qt5ct
set -gx PATH $PATH ~/.local/bin
fish_add_path ~/.local/bin
fish_add_path ~/.config/hypr/scripts
fish_add_path ~/.config/dwm/scripts

### ALIASES ###

# Aliases
if [ -f $HOME/.config/fish/alias.fish ]
source $HOME/.config/fish/alias.fish

end
