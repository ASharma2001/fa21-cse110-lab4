let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2,
}

for(const key in statistics) {
    const carCount = statistics[key];
    if(key.charAt(0) === 'r' || carCount % 2 !== 0) {
        console.log(key, ": ", carCount);
    }
}