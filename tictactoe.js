//TODO: This AI player was design to be unbeatable(according to the tutorial). Make a "Stupid" , "Smart" and "Genious" level AI.  
$(document).ready(function() {

    var spacesTaken = [false, false, false, false, false, false, false, false, false];
    var takenBy = [];
    var bestMove;
	var difficulty = 2;
	var total = 0; document.getElementById("total").innerHTML = total;
	var pWinCount = 0; document.getElementById("pWinCount").innerHTML = pWinCount;
	var cpuWinCount = 0; document.getElementById("cpuWinCount").innerHTML = cpuWinCount;
	var drawCount = 0; document.getElementById("drawCount").innerHTML = drawCount;
	var priority = true;

    function Game(){
    }

   
    Game.prototype.toArray = function(space, user){
        spacesTaken[space] = true;
        if(user){
            takenBy[space] = 'O';
        }
        else if(!user){
            takenBy[space] = 'X';
        }
    };

    Game.prototype.draw = function(space, isUser){
        if(isUser){
            switch(space){
                case 1:
                    $('div.ox1.o').show("fast");
                    break;
                case 2:
                    $('div.ox2.o').show("fast");
                    break;
                case 3:
                    $('div.ox3.o').show("fast");
                    break;
                case 4:
                    $('div.ox4.o').show("fast");
                    break;
                case 5:
                    $('div.ox5.o').show("fast");
                    break;
                case 6:
                    $('div.ox6.o').show("fast");
                    break;
                case 7:
                    $('div.ox7.o').show("fast");
                    break;
                case 8:
                    $('div.ox8.o').show("fast");
                    break;
                case 9:
                    $('div.ox9.o').show("fast");
                    break;
            }
        } 
        
        if(!isUser){
            switch(space){
                case 1:
                    $('div.ox1.x').show("fast");
                    break;
                case 2:
                    $('div.ox2.x').show("fast");
                    break;
                case 3:
                    $('div.ox3.x').show("fast");
                    break;
                case 4:
                    $('div.ox4.x').show("fast");
                    break;
                case 5:
                    $('div.ox5.x').show("fast");
                    break;
                case 6:
                    $('div.ox6.x').show("fast");
                    break;
                case 7:
                    $('div.ox7.x').show("fast");
                    break;
                case 8:
                    $('div.ox8.x').show("fast");
                    break;
                case 9:
                    $('div.ox9.x').show("fast");
                    break;
            }
        }
    };

    Game.prototype.checkWin = function(){
		
        if(takenBy[0] == 'X' && takenBy[1] == 'X' && takenBy[2] == 'X'){
            return "X";
        }
        else if (takenBy[3] == 'X' && takenBy[4] == 'X' && takenBy[5] == 'X'){
            return "X";
        }
        else if (takenBy[6] == 'X' && takenBy[7] == 'X' && takenBy[8] == 'X'){
            return "X";
        }
    
        if(takenBy[0] == 'X' && takenBy[3] == 'X' && takenBy[6] == 'X'){
            return "X";
        }
        else if (takenBy[1] == 'X' && takenBy[4] == 'X' && takenBy[7] == 'X'){
            return "X";
        }
        else if (takenBy[2] == 'X' && takenBy[5] == 'X' && takenBy[8] == 'X'){
            return "X";
        }
    
        if(takenBy[0] == 'X' && takenBy[4] == 'X' && takenBy[8] == 'X'){
            return "X";
        }
        else if (takenBy[2] == 'X' && takenBy[4] == 'X' && takenBy[6] == 'X'){
            return "X";
        }
     
        if(takenBy[0] == 'O' && takenBy[1] == 'O' && takenBy[2] == 'O'){
            return "O";
        }
        else if (takenBy[3] == 'O' && takenBy[4] == 'O' && takenBy[5] == 'O'){
            return "O";
        }
        else if (takenBy[6] == 'O' && takenBy[7] == 'O' && takenBy[8] == 'O'){
            return "O";
        }
    
        if(takenBy[0] == 'O' && takenBy[3] == 'O' && takenBy[6] == 'O'){
            return "O";
        }
        else if (takenBy[1] == 'O' && takenBy[4] == 'O' && takenBy[7] == 'O'){
            return "O";
        }
        else if (takenBy[2] == 'O' && takenBy[5] == 'O' && takenBy[8] == 'O'){
            return "O";
        }
    
        if(takenBy[0] == 'O' && takenBy[4] == 'O' && takenBy[8] == 'O'){
            return "O";
        }
        else if (takenBy[2] == 'O' && takenBy[4] == 'O' && takenBy[6] == 'O'){
            return "O";
        }
    
        var isAdraw = true;
        for(var i = 0; i < spacesTaken.length; i++){
            if(spacesTaken[i] === false){
                isAdraw = false;
            }
        }
        if(isAdraw){
            return "draw";
        }
    
        return "neither";
    };

    Game.prototype.doMove = function(space, isUser){
	  
      if(isUser){
			match.draw(space, true);
            match.toArray(space-1, true);
			match.check();
            match.cpuMove();
        }
        else if(!isUser){
			match.draw(space, false);
            match.toArray(space-1, false);
        }
        
        match.check();
    };

    Game.prototype.exit = function(){
        spacesTaken = [false, false, false, false, false, false, false, false, false];
		takenBy = [];
		total++;
		document.getElementById('total').innerHTML = (total);
		$('div.x').hide("fast");
		$('div.o').hide("fast");
		match.goFirstOrSecond();
	    $(document).reload();
		
		window.onload = function() {
    for (var i = 1; i < 10; i++) {
        document.getElementById('txt1').innerHTML = i;
    }
}
    };
	
	Game.prototype.goFirstOrSecond = function(){
	
		if(priority == false){
			priority = true;
			match.cpuMove();
			return;
		} else {
			alert("Go first!");
			priority = false;
			return;
		}
	};

    Game.prototype.check = function(){

        var won = match.checkWin();
		
        if(won == 'X' || won == 'x'){
			cpuWinCount++;
			document.getElementById('cpuWinCount').innerHTML = (cpuWinCount);
            alert("CPU win "+(cpuWinCount)+" time(s).");
            match.exit();
            return;
        }
        else if(won == 'O' || won == 'o'){
			pWinCount++;
			document.getElementById('pWinCount').innerHTML = (pWinCount);
            alert("You win "+(pWinCount)+" time(s).");
            match.exit();
            return;
        }
        else if(won == "draw"){
			drawCount++;
			document.getElementById('drawCount').innerHTML = (drawCount);
            alert("Draw "+(drawCount)+" time(s).");
            match.exit();
            return;
        }
    };
    
    Game.prototype.cpuMove = function(){
		var tempMove = 10;
        for(var i=0; i < spacesTaken.length; i++){
            if(spacesTaken[i] === false){
                bestMove = i + 1;
            }
        }
		
		if(difficulty > 2){
			if(spacesTaken[6] == false && spacesTaken[8] == false){
				bestMove = 7;
			}
		}
		
        if(spacesTaken[4] === false){
            bestMove = 5;
        }

		if(difficulty > 1){
			tempMove = match.canWin('O', true);
			if(tempMove != 10){
				bestMove = tempMove + 1;			
			}
			
			tempMove = match.canWin('X', false);
			if(tempMove != 10){
				bestMove = tempMove + 1;			
			}
		}

		match.draw(bestMove, false);
        match.doMove(bestMove, false);
    };
	
	Game.prototype.canWin = function(winningChar, isUser){
		var winPossible;
		var winningMove = 10;
		for(var i = 0; i < 8; i++){
			if(spacesTaken[i] === false){
				var priorValue = takenBy[i];
				match.toArray(i, isUser);
				winPossible = match.checkWin();
				if(winPossible == winningChar){
					winningMove = i;
					spacesTaken[i] = false;
					takenBy[i] = priorValue;
					return i;
				}
				spacesTaken[i] = false;
				takenBy[i] = priorValue;
			}
		}
		return 10;
	};

    var match = new Game();

    $('div.x').hide("fast");
    $('div.o').hide("fast");
    
    match.goFirstOrSecond();
    
    $('div.s1').click(function(){
        match.doMove(1, true);
    });
    $('div.s2').click(function(){
        match.doMove(2, true);  
    });
    $('div.s3').click(function(){
        match.doMove(3, true);   
    });
    $('div.s4').click(function(){
        match.doMove(4, true);  
    });
    $('div.s5').click(function(){
        match.doMove(5, true);     
    });
    $('div.s6').click(function(){
        match.doMove(6, true); 
    });
    $('div.s7').click(function(){
        match.doMove(7, true);     
    });
    $('div.s8').click(function(){
        match.doMove(8, true);     
    });
    $('div.s9').click(function(){
        match.doMove(9, true);    
    });
});