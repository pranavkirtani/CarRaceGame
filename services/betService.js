raceApp.service('betService',function(playerService,$rootScope){
    this.resetWinners=function(){
        this.winners=[];
    }
   this.getBettingData = function() {
       
     return this.bets;
      
}

 this.setBettingData = function(bets) {
      
      this.bets=bets;
       $rootScope.$emit("updatedBetData",true)
}
this.setWinner=function(winner){
    if(this.winners){
        this.winners.push(winner)
    }
    else{
        this.winners=[];
        this.winners.push(winner)
    }
    if(this.winners.length>=playerService.getPlayerData().trucks){
        console.log("the winner is "+this.winners[0])
        console.log("list is"+this.winners)
        var player_data=playerService.getPlayerData();
        var final_funds=parseInt(player_data.funds);
        var fund;
        if(!this.bets[this.winners[0]]){
                fund=0;
        }
        else{
            fund=this.bets[this.winners[0]];
        }
        
        final_funds=final_funds+(parseInt(fund)*2);///adding winning
      
        for(var j=1;j<this.winners.length;j++){
            
            if(!this.bets[this.winners[j]]){
                    fund=0
            }
            else{
                fund=this.bets[this.winners[j]];
            }
                final_funds=final_funds-parseInt(fund);
        }
       
        player_data.funds=final_funds;
        console.log("final_funds")
        console.log(final_funds)
        playerService.setPlayerData(player_data);
        $rootScope.$emit("updateFunds", final_funds);
        this.bets=[];
        $rootScope.$emit("updatedBetData",false)
    }
    


        
}

})