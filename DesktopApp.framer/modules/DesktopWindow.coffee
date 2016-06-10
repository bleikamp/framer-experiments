class exports.DesktopWindow extends Layer
	constructor: (options = {}) ->
		options = _.defaults options,
			x: Align.center
			y: Align.center
			width: 400
			height: 300
			backgroundColor: "#fff"
			titleBar: true
			title: ""
			style:
				"border-radius": "3px"
		super options

		@titleBar(options.title) if options.titleBar

	titleBar: (title) ->
		bar = new Layer
			# Set the parent to the DesktopWindow container
			parent: @
			width: @.width
			height: 22
			html: "#{title}"
			style:
				"border-bottom": "1px solid #c5c5c5"
				"border-top-left-radius": "3px"
				"border-top-right-radius": "3px"
				"background": "linear-gradient(180deg, #f0f0f0, #d3d3d3)"
				"color": "rgb(79, 79, 79)"
				"font-family": "-apple-system"
				"font-size": "13px"
				"line-height": "22px"
				"text-align": "center"

		# Make the window draggable when you click on the title bar
		bar.on Events.MouseOver, (event, layer) ->
			layer.parent.draggable.enabled = true
			layer.parent.draggable.momentum = false

		bar.on Events.MouseUp, (event, layer) ->
			layer.parent.draggable.enabled = false

		closeButton = new Layer
			parent: bar
			x: 8
			y: 5
			height: 12
			width: 12
			style:
				"background-color": "#ff6059"
				"border-radius": "12px"
				"border": "1px solid #e1453f"

		minimizeButton = new Layer
			parent: bar
			x: 28
			y: 5
			height: 12
			width: 12
			style:
				"background-color": "#ffc12f"
				"border-radius": "12px"
				"border": "1px solid #f4af1a"

		fullscreenButton = new Layer
			parent: bar
			x: 48
			y: 5
			height: 12
			width: 12
			style:
				"background-color": "#28ca42"
				"border-radius": "12px"
				"border": "1px solid #10ab24"
