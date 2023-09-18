const backPack = {

    name:'Parvez',
    volume:29,
    color:"software",
    pocketNum:20,
    straphLength:{left:26,right:26},
    lidOpen:false,
    toggleLid:function(lidStatus){
        this.lidOpen = lidStatus
    },
    newStraphLength:function(lengthLeft,lengthRight){
        this.straphLength.left = lengthLeft
        this.straphLength.right = lengthRight
    }

    
}
console.log('The backpack obeject is:', backPack);
console.log('The pocket value is:', backPack.pocketNum);
console.log('Backpack left befor:', backPack.straphLength.left);
backPack.newStraphLength(20,30)
console.log('Backpack left after:', backPack.straphLength.left);