require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"DesktopWindow":[function(require,module,exports){
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.DesktopWindow = (function(superClass) {
  extend(DesktopWindow, superClass);

  function DesktopWindow(options) {
    if (options == null) {
      options = {};
    }
    options = _.defaults(options, {
      x: Align.center,
      y: Align.center,
      width: 400,
      height: 300,
      backgroundColor: "#fff",
      titleBar: true,
      title: "",
      style: {
        "border-radius": "3px"
      }
    });
    DesktopWindow.__super__.constructor.call(this, options);
    if (options.titleBar) {
      this.titleBar(options.title);
    }
  }

  DesktopWindow.prototype.titleBar = function(title) {
    var bar, closeButton, fullscreenButton, minimizeButton;
    bar = new Layer({
      parent: this,
      width: this.width,
      height: 22,
      html: "" + title,
      style: {
        "border-bottom": "1px solid #c5c5c5",
        "border-top-left-radius": "3px",
        "border-top-right-radius": "3px",
        "background": "linear-gradient(180deg, #f0f0f0, #d3d3d3)",
        "color": "rgb(79, 79, 79)",
        "font-family": "-apple-system",
        "font-size": "13px",
        "line-height": "22px",
        "text-align": "center"
      }
    });
    bar.on(Events.MouseOver, function(event, layer) {
      layer.parent.draggable.enabled = true;
      return layer.parent.draggable.momentum = false;
    });
    bar.on(Events.MouseUp, function(event, layer) {
      return layer.parent.draggable.enabled = false;
    });
    closeButton = new Layer({
      parent: bar,
      x: 8,
      y: 5,
      height: 12,
      width: 12,
      style: {
        "background-color": "#ff6059",
        "border-radius": "12px",
        "border": "1px solid #e1453f"
      }
    });
    minimizeButton = new Layer({
      parent: bar,
      x: 28,
      y: 5,
      height: 12,
      width: 12,
      style: {
        "background-color": "#ffc12f",
        "border-radius": "12px",
        "border": "1px solid #f4af1a"
      }
    });
    return fullscreenButton = new Layer({
      parent: bar,
      x: 48,
      y: 5,
      height: 12,
      width: 12,
      style: {
        "background-color": "#28ca42",
        "border-radius": "12px",
        "border": "1px solid #10ab24"
      }
    });
  };

  return DesktopWindow;

})(Layer);


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYmxlaWthbXAvZ2l0aHViL2ZyYW1lci1leHBlcmltZW50cy9EZXNrdG9wQXBwLmZyYW1lci9tb2R1bGVzL0Rlc2t0b3BXaW5kb3cuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsSUFBQTs7O0FBQU0sT0FBTyxDQUFDOzs7RUFDQSx1QkFBQyxPQUFEOztNQUFDLFVBQVU7O0lBQ3ZCLE9BQUEsR0FBVSxDQUFDLENBQUMsUUFBRixDQUFXLE9BQVgsRUFDVDtNQUFBLENBQUEsRUFBRyxLQUFLLENBQUMsTUFBVDtNQUNBLENBQUEsRUFBRyxLQUFLLENBQUMsTUFEVDtNQUVBLEtBQUEsRUFBTyxHQUZQO01BR0EsTUFBQSxFQUFRLEdBSFI7TUFJQSxlQUFBLEVBQWlCLE1BSmpCO01BS0EsUUFBQSxFQUFVLElBTFY7TUFNQSxLQUFBLEVBQU8sRUFOUDtNQU9BLEtBQUEsRUFDQztRQUFBLGVBQUEsRUFBaUIsS0FBakI7T0FSRDtLQURTO0lBVVYsK0NBQU0sT0FBTjtJQUVBLElBQTRCLE9BQU8sQ0FBQyxRQUFwQztNQUFBLElBQUMsQ0FBQSxRQUFELENBQVUsT0FBTyxDQUFDLEtBQWxCLEVBQUE7O0VBYlk7OzBCQWViLFFBQUEsR0FBVSxTQUFDLEtBQUQ7QUFDVCxRQUFBO0lBQUEsR0FBQSxHQUFVLElBQUEsS0FBQSxDQUVUO01BQUEsTUFBQSxFQUFRLElBQVI7TUFDQSxLQUFBLEVBQU8sSUFBQyxDQUFDLEtBRFQ7TUFFQSxNQUFBLEVBQVEsRUFGUjtNQUdBLElBQUEsRUFBTSxFQUFBLEdBQUcsS0FIVDtNQUlBLEtBQUEsRUFDQztRQUFBLGVBQUEsRUFBaUIsbUJBQWpCO1FBQ0Esd0JBQUEsRUFBMEIsS0FEMUI7UUFFQSx5QkFBQSxFQUEyQixLQUYzQjtRQUdBLFlBQUEsRUFBYywyQ0FIZDtRQUlBLE9BQUEsRUFBUyxpQkFKVDtRQUtBLGFBQUEsRUFBZSxlQUxmO1FBTUEsV0FBQSxFQUFhLE1BTmI7UUFPQSxhQUFBLEVBQWUsTUFQZjtRQVFBLFlBQUEsRUFBYyxRQVJkO09BTEQ7S0FGUztJQWtCVixHQUFHLENBQUMsRUFBSixDQUFPLE1BQU0sQ0FBQyxTQUFkLEVBQXlCLFNBQUMsS0FBRCxFQUFRLEtBQVI7TUFDeEIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBdkIsR0FBaUM7YUFDakMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBdkIsR0FBa0M7SUFGVixDQUF6QjtJQUlBLEdBQUcsQ0FBQyxFQUFKLENBQU8sTUFBTSxDQUFDLE9BQWQsRUFBdUIsU0FBQyxLQUFELEVBQVEsS0FBUjthQUN0QixLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUF2QixHQUFpQztJQURYLENBQXZCO0lBR0EsV0FBQSxHQUFrQixJQUFBLEtBQUEsQ0FDakI7TUFBQSxNQUFBLEVBQVEsR0FBUjtNQUNBLENBQUEsRUFBRyxDQURIO01BRUEsQ0FBQSxFQUFHLENBRkg7TUFHQSxNQUFBLEVBQVEsRUFIUjtNQUlBLEtBQUEsRUFBTyxFQUpQO01BS0EsS0FBQSxFQUNDO1FBQUEsa0JBQUEsRUFBb0IsU0FBcEI7UUFDQSxlQUFBLEVBQWlCLE1BRGpCO1FBRUEsUUFBQSxFQUFVLG1CQUZWO09BTkQ7S0FEaUI7SUFXbEIsY0FBQSxHQUFxQixJQUFBLEtBQUEsQ0FDcEI7TUFBQSxNQUFBLEVBQVEsR0FBUjtNQUNBLENBQUEsRUFBRyxFQURIO01BRUEsQ0FBQSxFQUFHLENBRkg7TUFHQSxNQUFBLEVBQVEsRUFIUjtNQUlBLEtBQUEsRUFBTyxFQUpQO01BS0EsS0FBQSxFQUNDO1FBQUEsa0JBQUEsRUFBb0IsU0FBcEI7UUFDQSxlQUFBLEVBQWlCLE1BRGpCO1FBRUEsUUFBQSxFQUFVLG1CQUZWO09BTkQ7S0FEb0I7V0FXckIsZ0JBQUEsR0FBdUIsSUFBQSxLQUFBLENBQ3RCO01BQUEsTUFBQSxFQUFRLEdBQVI7TUFDQSxDQUFBLEVBQUcsRUFESDtNQUVBLENBQUEsRUFBRyxDQUZIO01BR0EsTUFBQSxFQUFRLEVBSFI7TUFJQSxLQUFBLEVBQU8sRUFKUDtNQUtBLEtBQUEsRUFDQztRQUFBLGtCQUFBLEVBQW9CLFNBQXBCO1FBQ0EsZUFBQSxFQUFpQixNQURqQjtRQUVBLFFBQUEsRUFBVSxtQkFGVjtPQU5EO0tBRHNCO0VBaERkOzs7O0dBaEJ5QiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjbGFzcyBleHBvcnRzLkRlc2t0b3BXaW5kb3cgZXh0ZW5kcyBMYXllclxuXHRjb25zdHJ1Y3RvcjogKG9wdGlvbnMgPSB7fSkgLT5cblx0XHRvcHRpb25zID0gXy5kZWZhdWx0cyBvcHRpb25zLFxuXHRcdFx0eDogQWxpZ24uY2VudGVyXG5cdFx0XHR5OiBBbGlnbi5jZW50ZXJcblx0XHRcdHdpZHRoOiA0MDBcblx0XHRcdGhlaWdodDogMzAwXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiXG5cdFx0XHR0aXRsZUJhcjogdHJ1ZVxuXHRcdFx0dGl0bGU6IFwiXCJcblx0XHRcdHN0eWxlOlxuXHRcdFx0XHRcImJvcmRlci1yYWRpdXNcIjogXCIzcHhcIlxuXHRcdHN1cGVyIG9wdGlvbnNcblxuXHRcdEB0aXRsZUJhcihvcHRpb25zLnRpdGxlKSBpZiBvcHRpb25zLnRpdGxlQmFyXG5cblx0dGl0bGVCYXI6ICh0aXRsZSkgLT5cblx0XHRiYXIgPSBuZXcgTGF5ZXJcblx0XHRcdCMgU2V0IHRoZSBwYXJlbnQgdG8gdGhlIERlc2t0b3BXaW5kb3cgY29udGFpbmVyXG5cdFx0XHRwYXJlbnQ6IEBcblx0XHRcdHdpZHRoOiBALndpZHRoXG5cdFx0XHRoZWlnaHQ6IDIyXG5cdFx0XHRodG1sOiBcIiN7dGl0bGV9XCJcblx0XHRcdHN0eWxlOlxuXHRcdFx0XHRcImJvcmRlci1ib3R0b21cIjogXCIxcHggc29saWQgI2M1YzVjNVwiXG5cdFx0XHRcdFwiYm9yZGVyLXRvcC1sZWZ0LXJhZGl1c1wiOiBcIjNweFwiXG5cdFx0XHRcdFwiYm9yZGVyLXRvcC1yaWdodC1yYWRpdXNcIjogXCIzcHhcIlxuXHRcdFx0XHRcImJhY2tncm91bmRcIjogXCJsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZjBmMGYwLCAjZDNkM2QzKVwiXG5cdFx0XHRcdFwiY29sb3JcIjogXCJyZ2IoNzksIDc5LCA3OSlcIlxuXHRcdFx0XHRcImZvbnQtZmFtaWx5XCI6IFwiLWFwcGxlLXN5c3RlbVwiXG5cdFx0XHRcdFwiZm9udC1zaXplXCI6IFwiMTNweFwiXG5cdFx0XHRcdFwibGluZS1oZWlnaHRcIjogXCIyMnB4XCJcblx0XHRcdFx0XCJ0ZXh0LWFsaWduXCI6IFwiY2VudGVyXCJcblxuXHRcdCMgTWFrZSB0aGUgd2luZG93IGRyYWdnYWJsZSB3aGVuIHlvdSBjbGljayBvbiB0aGUgdGl0bGUgYmFyXG5cdFx0YmFyLm9uIEV2ZW50cy5Nb3VzZU92ZXIsIChldmVudCwgbGF5ZXIpIC0+XG5cdFx0XHRsYXllci5wYXJlbnQuZHJhZ2dhYmxlLmVuYWJsZWQgPSB0cnVlXG5cdFx0XHRsYXllci5wYXJlbnQuZHJhZ2dhYmxlLm1vbWVudHVtID0gZmFsc2VcblxuXHRcdGJhci5vbiBFdmVudHMuTW91c2VVcCwgKGV2ZW50LCBsYXllcikgLT5cblx0XHRcdGxheWVyLnBhcmVudC5kcmFnZ2FibGUuZW5hYmxlZCA9IGZhbHNlXG5cblx0XHRjbG9zZUJ1dHRvbiA9IG5ldyBMYXllclxuXHRcdFx0cGFyZW50OiBiYXJcblx0XHRcdHg6IDhcblx0XHRcdHk6IDVcblx0XHRcdGhlaWdodDogMTJcblx0XHRcdHdpZHRoOiAxMlxuXHRcdFx0c3R5bGU6XG5cdFx0XHRcdFwiYmFja2dyb3VuZC1jb2xvclwiOiBcIiNmZjYwNTlcIlxuXHRcdFx0XHRcImJvcmRlci1yYWRpdXNcIjogXCIxMnB4XCJcblx0XHRcdFx0XCJib3JkZXJcIjogXCIxcHggc29saWQgI2UxNDUzZlwiXG5cblx0XHRtaW5pbWl6ZUJ1dHRvbiA9IG5ldyBMYXllclxuXHRcdFx0cGFyZW50OiBiYXJcblx0XHRcdHg6IDI4XG5cdFx0XHR5OiA1XG5cdFx0XHRoZWlnaHQ6IDEyXG5cdFx0XHR3aWR0aDogMTJcblx0XHRcdHN0eWxlOlxuXHRcdFx0XHRcImJhY2tncm91bmQtY29sb3JcIjogXCIjZmZjMTJmXCJcblx0XHRcdFx0XCJib3JkZXItcmFkaXVzXCI6IFwiMTJweFwiXG5cdFx0XHRcdFwiYm9yZGVyXCI6IFwiMXB4IHNvbGlkICNmNGFmMWFcIlxuXG5cdFx0ZnVsbHNjcmVlbkJ1dHRvbiA9IG5ldyBMYXllclxuXHRcdFx0cGFyZW50OiBiYXJcblx0XHRcdHg6IDQ4XG5cdFx0XHR5OiA1XG5cdFx0XHRoZWlnaHQ6IDEyXG5cdFx0XHR3aWR0aDogMTJcblx0XHRcdHN0eWxlOlxuXHRcdFx0XHRcImJhY2tncm91bmQtY29sb3JcIjogXCIjMjhjYTQyXCJcblx0XHRcdFx0XCJib3JkZXItcmFkaXVzXCI6IFwiMTJweFwiXG5cdFx0XHRcdFwiYm9yZGVyXCI6IFwiMXB4IHNvbGlkICMxMGFiMjRcIlxuIl19
