function goOnDateWithJohnny(tableau=[[]]) {
    let predents=[]
    for (let i = 0; i < tableau.length; i++) {
       
         
        let [nom,age,longueur,yeux,cheuveux,taille,pays] =  tableau[i]
      if((age>=20 && age<=26) && (longueur>=165 && longueur<=175) && (yeux=="bleu" || yeux=="vert") &&  (cheuveux!="rousses") && (taille=="S" || taille=="M" || taille=="S") && (pays=="Allemagne")){
         predents.push(tableau[i]) 
      }
       
       
        
        
    }
   return predents
}  
console.log( goOnDateWithJohnny (
    [
    ["Sofia", 25, 167, "bleu", "brune", "M", "Allemagne"],
    ["Jeanne", 27, 169, "vert", "rousse", "S", "Allemagne"],
    ["Karlota", 23, 166, "noir", "noir", "L", "Italie"],
    ["Zoe", 23, 165, "bleu", "blonde", "S", "Allemagne"]
    ]
    ));
