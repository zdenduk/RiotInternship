$(document).ready(function () {
    let currentButton = 'passiveButton';
    let currentDesc = 'passiveDesc';
    let currentVideo = 'passiveVideo';
    var canvasPassive = document.getElementById('passiveCanvas');
    var canvasPassiveRef = $("#passiveCanvas");
    canvasPassive.width = canvasPassiveRef.width();
    canvasPassive.height = canvasPassiveRef.height();
    var canvasQ = document.getElementById('qCanvas');
    var canvasQRef = $("#qCanvas");
    canvasQ.width = canvasQRef.width();
    canvasQ.height = canvasQRef.height();
    var canvasW = document.getElementById('wCanvas');
    var canvasWRef = $("#wCanvas");
    canvasW.width = canvasWRef.width();
    canvasW.height = canvasWRef.height();
    var canvasE = document.getElementById('eCanvas');
    var canvasERef = $("#eCanvas");
    canvasE.width = canvasERef.width();
    canvasE.height = canvasERef.height();
    var canvasR = document.getElementById('rCanvas');
    var canvasRRef = $("#rCanvas");
    canvasR.width = canvasRRef.width();
    canvasR.height = canvasRRef.height();

    var t = 1;

    createBorder(canvasPassive);

    $('#passiveButton').click(function () {
        buttonclick("10%", 'passiveButton', 'passiveDesc', 'passiveVideo');
        createBorder(canvasPassive);
    });
    $('#QButton').click(function () {
        buttonclick("30%", 'QButton', 'qDesc', 'qVideo');
        createBorder(canvasQ);
    });
    $('#WButton').click(function () {
        buttonclick("50%", 'WButton', 'wDesc', 'wVideo');
        createBorder(canvasW);
    });
    $('#EButton').click(function () {
        buttonclick("70%", 'EButton', 'eDesc', 'eVideo');
        createBorder(canvasE);
    });
    $('#RButton').click(function () {
        buttonclick("90%", 'RButton', 'rDesc', 'rVideo');
        createBorder(canvasR);
    });

    function buttonclick(pos, target, descName, videoName) {
        $(".style__BaselineKnob-sc-1ac4kmt-13").css('left', pos);
        if (currentButton !== target) {
            $("#" + currentButton + " .style__OptionBulletContainer-sc-1ac4kmt-10 .style__Bullet-sc-1ac4kmt-11").css('opacity', 1);
            $("#" + target + " .style__OptionBulletContainer-sc-1ac4kmt-10 .style__Bullet-sc-1ac4kmt-11").css('opacity', 0);

            $("#" + currentButton).removeClass('is-active');
            $("#" + target).addClass('is-active');

            currentButton = target;

            $("#" + currentDesc).removeClass('is-active');
            $("#" + currentDesc).addClass('false');
            $("#" + descName).addClass('is-active');
            currentDesc = descName;

            $("#" + currentVideo).removeClass('is-active');
            $("#" + videoName).addClass('is-active');
            currentVideo = videoName;
        }
    }

    function createBorder(canvas) {
        if (canvas.getContext) {
            var context = canvas.getContext('2d');
            context.lineWidth = 1.2;
            context.strokeStyle = '#d0a85c';

            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(51, 0);
            context.stroke();

            context.beginPath();
            context.moveTo(51, 0);
            context.lineTo(canvas.width, canvas.height - 51);
            context.stroke();

            context.beginPath();
            context.moveTo(canvas.width, canvas.height - 51);
            context.lineTo(canvas.width, canvas.height);
            context.stroke();

            context.beginPath();
            context.moveTo(canvas.width, canvas.height);
            context.lineTo(0, canvas.height);
            context.stroke();

            context.beginPath();
            context.moveTo(0, canvas.height);
            context.lineTo(0, 0);
            context.stroke();
        }
    }
});

