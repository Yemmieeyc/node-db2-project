// STRETCH
const cars = [{
    vin: '1234567891234',
    make: 'toyota',
    model: 'camry',
    milage: '20000',
    title: 'clean',
    transmission: 'manual',
},
{
    vin: '1234567891234',
    make: 'toyota',
    model: 'corolla',
    milage: '203300',
    title: 'salvage',
    transmission: 'manual',
},
{
    vin: '1234567891234',
    make: 'Benz',
    model: 'c300',
    milage: '203900',
    
},
]
// exports.seed = function(knex){
//     return knex('cars')
//     .truncate().then(()=> {
//         return knex('cars').insert(cars)
//     })
    
// }
exports.seed = async function(knex){
    await knex('cars').truncate()
    await knex ('cars').insert(cars)
}