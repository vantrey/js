var getRandomNumber=function(size){
			return Math.floor(Math.random()*size);
		};
		var getDistance=function(event, target) {
			diffX=event.offsetX-target.x;
			diffY=event.offsetY-target.y;
			console.log("offset x y "+event.offsetX+ " "+event.offsetY);
			console.log("target x y "+target.x+" "+target.y);
			return Math.sqrt((diffX*diffX)+(diffY*diffY));
		};
		var getDistanceHint=function(distance) {
			if (distance<10) {
				return "Обожжешься!!!";
			} else if (distance<20) {
				return "Очень горячо!";
			} else if (distance<40) {
				return "Горячо";
			} else if (distance<60) {
				return "Горечее";
			} else if (distance<80) {
				return "Тепло";
			} else if (distance<100) {
				return "Теплее";
			} else if (distance<120) {
				return "Чуть-чуть теплее";
			} else if (distance<140) {
				return "Прохладно";
			} else if (distance<160) {
				return "Холодно";
			} else if (distance<320) {
				return "Очень холодно";
			} else {
				return "Замерзнешь!";
			}
		};
		var colorСlicksPrint=function(clicksPrint) {
			var distance=getDistance(event, target);
			console.log("distance "+distance);
			var distanceHint=getDistanceHint(distance);
			$("#distance").text(distanceHint);
			$("#remainsClicks").empty().append(clicksPrint);
		};
		var width=400;
		var height=400;
		var clicks=0;
		var remainsClicks=16;
		var target={
			x:getRandomNumber(width),
			y:getRandomNumber(height)
		};
		
		$("#map").click(function(event){
			clicks++;
			remainsClicks--;
			var colorClicks={
			manyClicks:"Осталось кликов: many"+remainsClicks,
			fewClicks:"Осталось кликов: <span id=fewClicks>few"+remainsClicks+"</span>",
			fewestClicks:"Осталось кликов: <span id=fewestClicks>fewest"+remainsClicks+"</span>"
		};
			if (remainsClicks<0) {
				$("#game").slideUp(2000);
				setTimeout(function () {alert("Конец игры!");
				}, 2000)
			}  else if (remainsClicks<5) {
				colorСlicksPrint(colorClicks.fewestClicks);
			}  else if (remainsClicks<10) {
				colorСlicksPrint(colorClicks.fewClicks);
			}  else {
				colorСlicksPrint(colorClicks.manyClicks);
			}
			if (distance<5) {
				$("#game").fadeOut(2000);
				setTimeout(function () {$(
					"#congretulationImg").append(
					"<img src='images/WS2k.gif'>");
				}, 2000);
				setTimeout(function () {
					alert("Клад найден! Сделано кликов: "+clicks);
				}, 3000);
			
			} 
		});