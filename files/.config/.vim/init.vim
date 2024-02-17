set number
set autoindent
set tabstop=4
set shiftwidth=4
set smarttab
set softtabstop=4
set mouse=a
set clipboard=unnamedplus
set hidden
set encoding=UTF-8
syntax on

call plug#begin('~/.config/nvim/plugged')
Plug 'Mofiqul/dracula.nvim'
Plug 'https://github.com/preservim/nerdtree' " NerdTree
Plug 'https://github.com/tpope/vim-commentary' " Comment Out With gcc & Uncomment With gcgc
Plug 'https://github.com/ap/vim-css-color' " CSS Color Preview
Plug 'https://github.com/ryanoasis/vim-devicons' " Developer Icons
Plug 'https://github.com/vim-airline/vim-airline' " Status Bar
Plug 'https://github.com/vim-airline/vim-airline-themes' " Collection Of Themes
"""" Run This First! - curl -sL install-node.vercel.app/lts | sudo bash - To Install Nodejs 
Plug 'neoclide/coc.nvim', {'branch': 'release'} " Code Completion
" Run These Commands To Setup Language Servers (Can Be Ran Space Seperated As One Command)
" :CocInstall coc-sh
" :CocInstall coc-clangd
" :CocInstall coc-html
" :CocInstall coc-tsserver
" :CocInstall coc-json
" :CocInstall coc-pyright
" :CocInstall coc-css
" :CocInstall coc-go
call plug#end()

nnoremap <C-f>		:NERDTreeToggle<CR>
nnoremap <C-n>		:vnew<CR>
nnoremap <C-t>		:tabe<CR>
nnoremap <PageUp>   :bprevious<CR>
nnoremap <PageDown> :bnext<CR>
inoremap <silent><expr> <cr> pumvisible() ? coc#_select_confirm()
                              \: "\<C-g>u\<CR>\<c-r>=coc#on_enter()\<CR>"

let g:airline#extensions#tabline#enabled = 1
" let g:airline_powerline_fonts = 1

if !exists('g:airline_symbols')
    let g:airline_symbols = {}
endif

" unicode symbols
" let g:airline_left_sep = '»'
" let g:airline_left_sep = '▶'
" let g:airline_right_sep = '«'
" let g:airline_right_sep = '◀'
" let g:airline_symbols.linenr = '␊'
" let g:airline_symbols.linenr = '␤'
" let g:airline_symbols.linenr = '¶'
" let g:airline_symbols.branch = '⎇'
" let g:airline_symbols.paste = 'ρ'
" let g:airline_symbols.paste = 'Þ'
" let g:airline_symbols.paste = '∥'
" let g:airline_symbols.whitespace = 'Ξ'

" airline symbols
" let g:airline_left_sep = ''
" let g:airline_left_alt_sep = ''
" let g:airline_right_sep = ''
" let g:airline_right_alt_sep = ''
" let g:airline_symbols.branch = ''
" let g:airline_symbols.readonly = ''
" let g:airline_symbols.linenr = ''

let g:airline_theme = 'base16_dracula'
colorscheme dracula
