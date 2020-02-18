function logistic(args){
  let loads = Number(args[0]);
  let totalTonne = 0;
  let van = 0;
  let truck = 0;
  let train = 0;
  let percentVan = 0;
  let percentTruck = 0;
  let percentTrain = 0;

  for(let i = 1; i <= loads; i++){
    let currentTonne = args[i];
    totalTonne += currentTonne;
    if(currentTonne <= 3){
      van += args[i];
    } else if(currentTonne <= 11){
      truck += args[i];
    } else if(currentTonne > 11){
      train += args[i];
    } 
  }
  percentVan = (van / totalTonne) * 100;
  percentTruck = (truck / totalTonne) * 100;
  percentTrain = (train / totalTonne) * 100;

  console.log("Average price per tonne = " + (((van * 200) + (truck * 175) + (train * 120)) / totalTonne).toFixed(2));
  console.log(percentVan.toFixed(2) + "% of the load with Van");
  console.log(percentTruck.toFixed(2) + "% of the load with Truck");
  console.log(percentTrain.toFixed(2) + "% of the load with Train");
  
}
logistic([5,2,10,20,1,7]);