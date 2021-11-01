$(document).ready(function () {
    $("#introAnim").addClass("show-nw");
    $("#titleAnim").addClass("show-se");

    var title = $("#titleAnim");
    var canvasNameRef = $("#nameWrapper");
    var canvasName = document.getElementById('nameWrapper');

    if (canvasName.getContext) {
        canvasName.width = canvasNameRef.width();
        canvasName.height = canvasNameRef.height();
        var context = canvasName.getContext('2d');
        context.lineWidth = 2;
        context.strokeStyle = 'rgba(255, 255, 255, 0.2)';

        var t = 1;
        var vertices = [];
        vertices.push({
            x: (canvasName.width - title.width()) / 2,
            y: 0
        });
        vertices.push({
            x: 0,
            y: 0
        });
        vertices.push({
            x: 0,
            y: canvasName.height
        });
        vertices.push({
            x: canvasName.width,
            y: canvasName.height
        });
        vertices.push({
            x: canvasName.width,
            y: 0
        });
        vertices.push({
            x: (canvasName.width - title.width()) / 2 + title.width(),
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

