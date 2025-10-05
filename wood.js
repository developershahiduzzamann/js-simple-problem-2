function woodQuentity(chairQuentity, tableQuentity, bedQuentity){
    const parChairWood = 5;
    const parTableWood = 15;
    const perBedWood = 60;

    const totalChairWood = parChairWood * chairQuentity;
    const totalTableWood = parTableWood * tableQuentity;
    const totalBedWood = perBedWood * bedQuentity;
    const total = totalChairWood + totalTableWood + totalBedWood;
      return total;

}

const wood = woodQuentity(1, 1, 4);
console.log('wood needed', wood);