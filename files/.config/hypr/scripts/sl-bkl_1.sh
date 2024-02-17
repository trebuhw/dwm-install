LIGHT=$(brightnessctl -m -d intel_backlight | awk -F, '{print substr($4, 0, length($4)-1)}')

if [ "$LIGHT" -gt 0 ] && [ "$LIGHT" -le 30 ]; then
	printf "󰽧 %s%%" "$LIGHT"
elif [ "$LIGHT" -gt 30 ] && [ "$LIGHT" -le 60 ]; then
	printf "󰽡 %s%%" "$LIGHT"
elif [ "$LIGHT" -gt 60 ] && [ "$LIGHT" -le 90 ]; then
	printf "󰽨 %s%%" "$LIGHT"
else
	printf "󰽢 %s%%" "$LIGHT"
fi

