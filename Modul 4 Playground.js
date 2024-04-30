use("db_film");

// db.address.insert([
//   {
//     Nama_Produk: "Kulkas",
//     Harga: 10000000,
//     Berat_Produk: 8.9,
//     Rusak: false,
//     Tanggal_Masuk: new Date(),
//     Tag: ["Elektronik", "Perabotan"],
//     Dimensi: {
//       tinggi: 80,
//       panjang: 50,
//       lebar: 20,
//     },
//     Id_Product: ObjectId(),
//   },
// ]);

// db.createCollection("continent", {
//     validator: {
//         $jsonSchema: {
//             bsonType: "object",
//             title: "continent validator",
//             required: ["continent", "last_update"],
//             properties: {
//                 continent: {
//                     bsonType: "string",
//                     description: "continent harus dalam rupa string diisi"
//                 },
//             }
//         }
//     }
// })

// db.continent.insertOne({continent: "Asia", last_update: ISODate: ISODate()});

// db.createCollection("continent", {
//     validator: {
//         $jsonSchema: {
//             bsonType: "object",
//             title: "continent validator",
//             required: ["continent", "last_update"],
//             properties: {
//                 continent: {
//                     bsonType: "string",
//                     description: "continent harus dalam rupa string diisi"
//                 },
//                 last_update: {
//                     bsonType: 'date',
//                     description: 'last_update harus dalam rupa string'
//                 }
//             }
//         }
//     }
// })

// db.continent.insertOne({
//     continent: "Asia", last_update: ISODate()
// })
// db.continent.insertOne({
//   cont: "Asia",
//   last_update: ISODate(),
// });

// db.customers.aggregate({
//     $lookup: {
//         "actors"
//         localField: "id",
//         foreignField: "id",
//         as: "join"
//     }
// })
