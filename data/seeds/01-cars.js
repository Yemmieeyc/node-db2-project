// STRETCH
const cars = [{
    vin: '3VWLL7AJ9BM053541',
    make: 'toyota',
    model: 'camry',
    milage: '20000',
    title: 'clean',
    transmission: 'manual',
},
{
    vin: 'JH4DB1640MS004246',
    make: 'toyota',
    model: 'corolla',
    milage: '203300',
    title: 'salvage',
    transmission: 'manual',
},
{
    vin: 'WBA3A5C57CF256651',
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