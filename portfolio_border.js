$(document).ready(function () {
    var canvasPort = document.getElementById('portfolioWrapper');

    if (canvasPort.getContext) {
        var context = canvasPort.getContext('2d');
        context.lineWidth =4;
        context.strokeStyle = 'rgb(8, 215, 247)';

        context.beginPath();
        context.moveTo(Math.round(canvasPort.width + 5), 0);
        context.lineTo(Math.round(canvasPort.width / 10), 0);
        context.lineTo(0, Math.round(canvasPort.height * 3 / 10));
        context.lineTo(0, canvasPort.height);
        context.lineTo(Math.round(canvasPort.width * 9 / 10), canvasPort.height);
        context.lineTo(canvasPort.width, Math.round(canvasPort.height * 7 / 10));
        context.lineTo(canvasPort.width, 0);
        context.closePath();
        context.stroke();
        context.fillStyle = "rgba(0,0,0,0.4)";
        context.fill();
    }

});

