$(document).ready(function () {
    var canvasVideoRef = $("#videoWrapper");
    var canvasVideo = document.getElementById('videoWrapper');

    if (canvasVideo.getContext) {
        canvasVideoRef.width(canvasVideoRef.width() * 0.975).height(canvasVideoRef.height() * 1.05);
        canvasVideoRef.css('left', canvasVideoRef.width() * 0.0125);
        canvasVideoRef.css('top', -canvasVideoRef.height() * 0.025);
        canvasVideo.width = canvasVideoRef.width();
        canvasVideo.height = canvasVideoRef.height();
        context = canvasVideo.getContext('2d');
        context.lineWidth = 2;
        context.strokeStyle = 'rgba(255, 255, 255, 0.2)';

        var t = 1;
        var vertices = [];
        vertices.push({
            x: 0,
            y: 0
        });
        vertices.push({
            x: 0,
            y: canvasVideo.height
        });
        vertices.push({
            x: canvasVideo.width,
            y: canvasVideo.height
        });
        vertices.push({
            x: canvasVideo.width,
            y: canvasVideo.height * 1 / 10
        });
        vertices.push({
            x: canvasVideo.width * 19 / 20,
            y: 0
        });
        vertices.push({
            x: -10,
            y: 0
        });
        var points = calcWaypoints(vertices);
        animate(points);
    }

    function calcWaypoints(vertices) {
        var waypoints = [];
        for (var i = 1; i < vertices.length; i++) {
            var pt0 = vertices[i - 1];
            var pt1 = vertices[i];
            var dx = pt1.x - pt0.x;
            var dy = pt1.y - pt0.y;
            for (var j = 0; j < 100; j++) {
                var x = pt0.x + dx * j / 100;
                var y = pt0.y + dy * j / 100;
                waypoints.push({
                    x: x,
                    y: y
                });
            }
        }
        return (waypoints);
    }

    function animate() {
        if (t < points.length - 1) {
            requestAnimationFrame(animate);
        }
        // draw a line segment from the last waypoint
        // to the current waypoint
        context.beginPath();
        context.moveTo(points[t - 1].x, points[t - 1].y);
        context.lineTo(points[t].x, points[t].y);
        context.stroke();
        // increment "t" to get the next waypoint
        t++;
    }
});

