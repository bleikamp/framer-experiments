{DesktopWindow} = require "DesktopWindow"

# Use desktop cursor
document.body.style.cursor = "auto"

background = new BackgroundLayer image: "images/wallpaper.jpg"

dw = new DesktopWindow
	title: "My New Application"
	width: 500
	height: 500