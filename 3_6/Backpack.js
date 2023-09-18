class Backpack{

    constructor(
        //define parameter
        name,
        volume,
        color,
        pocketNum,
        straphLength,
        lidOpen
        ){
//define proferty

this.name =name;
this.volume = volume;
this.color =color ;
this.pocketNum = pocketNum;

this.straphLength={
    left:lengthLeft,
    right:lengthRight
};
this.lidOpen = lidOpen;
//add method like normal function
toggleLid(lidStatus){
    this.lidOpen = lidStatus;
}
 newStraphLength(lengthLeft,lengthRight) {
    this.straphLength.left = lengthLeft,
    this.straphLength.right = lengthRight
}

        }
        
     
    }

export default Backpack;