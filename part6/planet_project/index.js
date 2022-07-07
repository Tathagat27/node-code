const {parse} = require('csv-parse');
const fs = require('fs');


const HabitablePlanets = [];

function isHabitablePlanet(planet){
    return planet['koi_disposition'] === 'CONFIRMED'
    && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
    && planet['koi_prad'] < 1.6;
}

fs.createReadStream('kepler_data.csv')
    .pipe(parse({
        comment: '#',
        columns: true,
    }))
    .on('data', (data) => {
        if(isHabitablePlanet(data))
        HabitablePlanets.push(data);
    })
    .on('end', () => {
        console.log(HabitablePlanets.map((planet) => {
            return planet['kepler_name'];
        }));
        console.log(`${HabitablePlanets.length} Habitable planets are found !!!`);
    })
    .on('error', (err) => {
        console.log(err);
    });

// parse();