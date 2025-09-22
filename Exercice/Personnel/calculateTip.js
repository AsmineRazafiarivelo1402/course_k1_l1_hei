function calculateTip(facture,service="") {
    let avisServicePourcent=[0,0.05,0.1,0.15,0.2];
    let avisService=["Terrible","Poor","Good","Great","Excellent"];
    service=service.toLowerCase();
     for (let i = 0; i < avisService.length; i++) {
        avisService[i]=avisService[i].toLowerCase()
        
    }   
    if((service==avisService[0])){
        return 0;
    }else if((service==avisService[1])){
        return Math.ceil(facture*avisServicePourcent[1]);
    }else if((service==avisService[2])){
        return Math.ceil(facture*avisServicePourcent[2]);
    }else if((service==avisService[3])){
        return Math.ceil(facture*avisServicePourcent[3]);
    }else if((service==avisService[4])){
        return Math.ceil(facture*avisServicePourcent[4]);
    }else{
        return "Rating not recognised";
    }
    

}

console.log(calculateTip(20, "ExcellEnt"));
console.log(calculateTip(26.95, "goOd"));
console.log(calculateTip(20, "hi"));


