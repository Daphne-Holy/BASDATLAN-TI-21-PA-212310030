//

// Select the database to use.
use('rentalfilm');

// db.customer.update({id: 2}, {$set :{Last_Name: "Grant"}});
// db.customer.remove({id: 2})
// db.customer.deleteOne({AddressColumn: 1});
// db.film.deleteMany({Length: 90})
// db.customer.find().limit(2)
// db.customer.find().limit(2).skip(2)
// db.customer.createIndex({"country" : 1})
// db.customer.createIndex({"Negara": 1}, {unique: true})
// db.film.createIndex({"LanguageID" : 1}, {sparse: true})
// db.customer.createIndex({"last_update" : 1}, {expireAfterSeconds: 60})
// db.customer.createIndex({"AddressId" : 1}, {v: 1})
// db.film.createIndex({Title: "text"}, {weights: {Title: 5}})
// db.customer.createIndex({Email: "text"}, {default_language: "english"})
// db.customer.createIndex({First_Name: "text"}, {language_override: "spanish"})
// db.film.aggregate([{$group: {
//   _id: null,
//   length: {
//     $sum: '$length'}
// }}])
// db.film.aggregate([{$group: {
//   _id: null,
//   Length: {
//     $avg: '$Length'}
// }}])
// db.film.aggregate([{$group: {
//   _id: null,
//   Length: {
//     $avg: '$Length'}
// }}])
// db.film.aggregate([{$group: {
//   _id: null,
//   Length: {
//     $min: '$Length'}
// }}])
// db.film.aggregate([{$group: {
//   _id: null,
//   Length: {
//     $max: '$Length'}
// // }}])
// db.film.updateOne({id: 1}, {$push: {results: 100}})
// db.film.updateOne({id: 1}, {$addToSet: {results: 200}})
// db.customer.aggregate({$group: {_id: null, first: {$first: '$$ROOT'}}});
// db.customer.aggregate([{$group: {_id: null, first: {$last: '$$ROOT'}}}]);
// db.film.aggregate([{$project: {"Last_Update": 0}}]);
// db.film.aggregate([{$project: {"Last_Update" : 0}}, {$match: {Title: "Sucker Punch"}}]);

// db.customer.aggregate([{$group: { _id: '$Active'}}]);
// db.customer.aggregate([{$sort: {Last_Name: 1}}]);
// db.customer.aggregate([{$limit: 2}]);


//Soal No. 1
// db.actor.createIndex({"country" : 1})
// db.actor.createIndex({"country" : 1}, {unique: true})
// db.actor.createIndex({"FilmID": 1}, {sparse: true})
// db.actor.createIndex({"Last_Update" : 1}, {expireAfterSeconds : 60})
// db.actor.createIndex({"CategoryID" : 1}, {v: 1})
// db.actor.createIndex({Title : "text"}, {weights: {Title: 5}})
// db.actor.createIndex({Agent: "text"}, {default_language: "english"})
// db.actor.createIndex({First_Name: "text"}, {language_override: "spanish"})

//Soal No. 2
// db.film.aggregate([{$group: {_id: null, length: {$sum: 'Length'}}}]);
// db.film.aggregate([{$group: {_id: null, length: {$avg: 'Length'}}}]);
// db.film.aggregate([{$group: {_id: null, length: {$min: 'Length'}}}]);
// db.film.aggregate([{$group: {_id: null, length: {$max: 'Length'}}}]);
// db.film.updateOne([{$group: {id: 1, length: {$push: {Rate: 5 }}}}]);
// db.film.updateOne([{$group: {id: 2, length: {$addToSet: {Rate: 5 }}}}]);
// db.film.aggregate({$group: {_id: null, first: {$first: '$$ROOT'}}});
// db.film.aggregate([{$group: {_id: null, first: {$last: '$$ROOT'}}}]);



//Soal No. 3
// db.actor.aggregate([{
//     $project: {
//       "Last_Update" : 0
//     }
// }])

// db.actor.aggregate([{$project: {"Last_Update": 0}}, {$match: {
//   Last_Name: "Jon"
// }}]);

// db.actor.aggregate([{$group: {_id: '$Active'}}])

// db.actor.aggregate([{$sort: {Last_Name: 1}}]);
// db.actor.aggregate([{$limit: 2}])

// db.actor.aggregate([{$unwind: {path: '$First_Name'}}]);



//Soal No. 4
// db.customer.aggregate([
//     {$match : {Active: "Y"}},
//     {$sort : {First_Name: -1}},
//     {$limit : 1}
//   ])
