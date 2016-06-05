{Pointer} = require "Pointer"

background = new BackgroundLayer backgroundColor: "#333"

helper = new Layer
	width: Screen.width
	height: Screen.height
	
# Setup width of progress bar based on currentTime
progressWidth = 312

# Set up current time and total time
totalTime = 235
currentTime = Utils.modulate(progressWidth, [0, Screen.width], [0, totalTime])

# Animation curve for the progress bar show/hide
progressBarCurve = "ease-in-out"

# Progress bar on bottom of the view
progressBar = new Layer
	y: Align.bottom(90)
	x: Align.left
	width: progressWidth
	height: 100
	backgroundColor: "#86dd34"
	
time = new Layer
	x: Align.center
	y: Align.center
	backgroundColor: "transparent"
	opacity: 0.75
	style:
		"font-size": "100px"
	
# Show the progress bar
progressBarShow = ->
	return progressBar.animate
		properties:
			y: Align.bottom
		curve: progressBarCurve
		time: 0.2

# Hide the progress bar
progressBarHide = ->
	return progressBar.animate
		properties:
			y: Align.bottom(90)
		curve: progressBarCurve
		time: 0.2
		
# Update the progress bar based on tap's x coodinate
progressBarUpdate = (layer, event) ->
	progressBarWidth = Pointer.screen(event, layer).x
	return progressBar.animate
		properties:
			width: progressBarWidth
		time: 0.4
		curve: "ease-out"

# Show the timer
timeShow = ->
	return time.animate
		properties:
			opacity: 0.75
		time: 0.4
		
# Hide the timer
timeHide = ->
	return time.animate
		properties:
			opacity: 0
		time: 0.4

# Change the current number of seconds in m:ss format
timeInMinutesSeconds = (secs) ->
	minutes = Math.floor(secs/60)
	seconds = Math.round(secs % 60)
	seconds = "0#{seconds}" unless seconds > 10
	
	return "#{minutes}:#{seconds}"

# Update the time based on width of the progress bar
timeUpdate = ->
	progressBar.on "change:width", ->
		secs = Utils.modulate(progressBar.width, [0, Screen.width], [0, totalTime])
		time.html = timeInMinutesSeconds(secs)

helper.on Events.TouchStart, ->
	progressBarShow()
	timeShow()

helper.on Events.TouchMove, (event, layer) ->
	progressBarUpdate(layer, event)
	timeUpdate()

helper.on Events.TouchEnd, ->
	progressBarHide()
	timeHide()