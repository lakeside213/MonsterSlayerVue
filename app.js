new Vue({
    el: "#app",
    data:{
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        gameLog: []
    },
    methods: {
         startGame() {
            this.gameIsRunning =true;
            this.playerHealth = 100;
        },
        attack(){
            var damage =this.calDamage(3,10)
           this.monsterHealth -=damage;
           this.gameLog.unshift({
               isPlayer:true,
               text: `Player commits ${damage} on the monster`
           })
           if(this.checkWin()){
                return;
           }
           this.monsterAttack(5,12)

        },
        spAttack(){
            var damage =this.calDamage(10,20)
            this.monsterHealth -=damage;
            this.gameLog.unshift({
                isPlayer:true,
                text: `Player commits ${damage} on the monster`
            })
           if(this.checkWin()){
                return;
           }
           
           this.monsterAttack(5,12)

        },
        monsterAttack(min,max){
            var damage = this.calDamage(min,max);
            this.playerHealth -= damage; 
           this.checkWin();
           this.gameLog.unshift({
            isPlayer:false,
            text: `Monster commits ${damage} on the player`
        })
        },
        heal(){

            if(this.playerHealth <= 90){
                this.playerHealth += 10
            }else{
                this.playerHealth = 100
            }
            this.monsterAttack(5,12);
        },
        giveUp(){
            this.gameIsRunning = false;
        },
        calDamage(min,max){
            return Math.max(Math.floor(Math.random() * max) + 1,min);
        },
        checkWin(){
           if(this.monsterHealth <= 0 || this.playerHealth <= 0  ){
               if(confirm("Do you want a new game")){
                    this.startGame();
                    
               }
               else{
                   this.gameIsRunning = false;
               }
               return true;
           }
        return false;
        }
    }
});