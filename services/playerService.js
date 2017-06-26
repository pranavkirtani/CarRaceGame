raceApp.service('playerService',function(){
   this.getPlayerData = function() {
       
      if(this.player){
         return this.player
      }
      else{
          return {name: "Player 1", trucks: 4, funds: "1000"};
      }
      
}

 this.setPlayerData = function(player) {
      
      this.player=player;
      
}

})