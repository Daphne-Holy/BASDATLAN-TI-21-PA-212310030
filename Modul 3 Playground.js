// Select the database to use.
use("rentalfilm");

// Insert a few documents into the sales collection.
// db.customers.remove(
//     {id:"Jennifer"}
//     )

// db.customer.insert([{
// id : "2",
// First_Name : "Fernanda",
// Last_Name: "Ramos",
// Email : "fernadaramos4@uol.com.br",
// Active: "Y"
// },
// {
// id : "3",
// First_Name : "Mark",
// Last_Name: "Philips",
// Email : "mphilips12@shaw.ca",
// Active: "N"
// },
// {
// id : "4",
// First_Name : "Jennifer",
// Last_Name: "Peterson",
// Email : "jenniferp@rogers.ca",
// Active: "T"
// }])

// db.city.insert([{
//     id : 1,
//     City_Name: "Jakarta"
// },
// {
// id : 2,
// City_Name: "Bogor"
// },
// {
// id : 3,
// City_Name: "Bekasi"
// }])

// db.language.insert([{
//     id: 1,
//     Name: "Indonesian"
// },
// {
//     id: 2,
//     Name: "English",
// },
// {
//     id: 3,
//     Name: "Spanish"
// }])

// db.customer.update({
//     id: "2"
// }, {$set: {First_Name: "Fernandy"}})
// db.customer.update(
//   {
//     id: "4",
//   },
//   { $set: { Last_Name: "Aniston" } }
// );

db.customer.remove({
  id: "2",
});
db.customer.remove({
  id: "4",
});
