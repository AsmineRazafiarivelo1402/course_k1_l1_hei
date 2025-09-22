export function gameWinners(gamerA=[], gamerB=[]) {
     let gamerApoint = 0
    gamerApoint=gamerA[0]
     let gamerBpoint=0
     gamerBpoint=gamerB[0]
    if(!gamerA || gamerA.length==0 || !gamerB || gamerB.length==0){
        return "none"
    }else {
       if(gamerA[1]=="yes"){
        gamerApoint = gamerApoint + 150
       }else if(gamerB[1]=="yes"){
         gamerBpoint = gamerBpoint + 150
       }
    }

    if (gamerApoint>gamerBpoint) {
        return "team 1 wins!"
    }else   if (gamerApoint<gamerBpoint) {
        return "team 2 wins!"
    }else   if (gamerApoint==gamerBpoint) {
        return "draw!"
    }
}