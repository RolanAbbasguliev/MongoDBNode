const { MongoClient } = require('mongodb');
const dotenv = require('dotenv').config();

const uri = process.env.URI;


const client = new MongoClient(uri);

async function createCollection() {
    try {
        await client.db().createCollection("Discount");
        await client.db().createCollection("Company");

        await client.db().createCollection("Spliter");

        await client.db().createCollection("Order");
        await client.db().createCollection("Payment");
        await client.db().createCollection("Product");
        await client.db().createCollection("StatusOrder");

    } catch (e) {
        console.log(e);
    }
}

async function insertCollections() {
    try {
        const discount = client.db().collection("Discount");
        discount.insertMany([{
            points: 19,
        }, {
            points: 10,
        },]);


        const company = client.db().collection("Company");
        company.insertMany([{
            tin: "424FSF331DAVVL:TIN",
            contract: "424FSF331DAVVL:CONTRACT",
            name: "Yansex",
            address: "Mayakovka 24",
            phone: "+79216666666",
            city: "Moscow",
            discount: {
                points: 19,
            },

        }, {
            tin: "1FKSFS331DFEVL:TIN",
            contract: "1FKSFS331DFEVL:CONTRACT",
            name: "Apple",
            address: "Silikon Valley 213",
            phone: "+79994441333",
            city: "California",
        },
        {
            tin: "994FSA331DFFVVL:TIN",
            contract: "994FSA331DFFVVL:CONTRACT",
            name: "DNP",
            address: "Baker St 14",
            phone: "+793166966616",
            city: "London",
            discount: {
                points: 10,
            },
        }, {
            tin: "1F4SFKD3318FEVL:TIN",
            contract: "1F4SFKD3318FEVL:CONTRACT",
            name: "Ozon",
            address: "Kiprin 18",
            phone: "+79394941323",
            city: "Kipr",
        },
        {
            tin: "4884OESFK31DAVVL:TIN",
            contract: "4884OESFK31DAVVL:CONTRACT",
            name: "Norton",
            address: "Laskov St 1",
            phone: "+79211693666",
            city: "Saratov",
        }, {
            tin: "1F2S4S331DIEVL:TIN",
            contract: "1F2S4S331DIEVL:CONTRACT",
            name: "Tinkoff",
            address: "Krimskay 88",
            phone: "+79394441333",
            city: "New York",
        },
        {
            tin: "9D424SA3F1DKFVVL:TIN",
            contract: "9D424SA3F1DKFVVL:CONTRACT",
            name: "MailRu",
            address: "Black Window St 66",
            phone: "+795163966116",
            city: "Compton",
            discount: {
                points: 19,
            },
        }, {
            tin: "1F8SEKD3998FEVL:TIN",
            contract: "1F8SEKD3998FEVL:CONTRACT",
            name: "Sber",
            address: "Lartovo 9",
            phone: "+79194981343",
            city: "Spb",
        },

        {
            tin: "494D8SF3391DAVVL:TIN",
            contract: "494D8SF3391DAVVL:CONTRACT",
            name: "Vagner",
            address: "Krimskaya 12",
            phone: "+79996666666",
            city: "Samara",
        }, {
            tin: "1FK2F833KDFEFL:TIN",
            contract: "1FK2F833KDFEFL:CONTRACT",
            name: "Microsoft",
            address: "Karko Rf 31",
            phone: "+79139441333",
            city: "Tblisi",
        },
        {
            tin: "914FFLA9314FMFVL:TIN",
            contract: "914FFLA9314FMFVL:CONTRACT",
            name: "Aliev VM",
            address: "Aliev St 4",
            phone: "+792166264611",
            city: "Baku",
        }, {
            tin: "1F4SDK83911FEVL:TIN",
            contract: "1F4SDK83911FEVL:CONTRACT",
            name: "GitLab",
            address: "Kievskaya 1",
            phone: "+71394931383",
            city: "Kiev",
        },
        {
            tin: "48KF4O48FK3113AVVL:TIN",
            contract: "48KF4O48FK3113AVVL:CONTRACT",
            name: "FACEIT",
            address: "Lon tour St 7",
            phone: "+79281693166",
            city: "Paris",
        }, {
            tin: "1F2KKK3113IE4L:TIN",
            contract: "1F2KKK3113IE4L:CONTRACT",
            name: "Supreme",
            address: "Gudaft 138",
            phone: "+79894441333",
            city: "Berlin",
        },
        {
            tin: "11124S53FLDKEFFL:TIN",
            contract: "11124S53FLDKEFFL:CONTRACT",
            name: "LouisViton",
            address: "Long Beach 6",
            phone: "+715163466116",
            city: "Miami beach",
        },]);

        const product = client.db().collection("Product");
        product.insertMany([{
            weight: 8740,
            amount: 1399940,
            description: "Mobiles",
        }, {
            weight: 1340,
            amount: 143940,
            description: "Apples",
        }, {
            weight: 9740,
            amount: 153940,
            description: "Pineapples",
        },
        {
            weight: 87404193,
            amount: 1990,
            description: "Cars",
        }, {
            weight: 1740,
            amount: 3940,
            description: "Knifes",
        }, {
            weight: 399,
            amount: 5402,
            description: "Tomatos",
        },
        {
            weight: 140,
            amount: 349139,
            description: "Trees",
        }, {
            weight: 442,
            amount: 132980,
            description: "T-Shirt",
        }, {
            weight: 110,
            amount: 1330,
            description: "Jeans",
        },
        {
            weight: 893740,
            amount: 499940,
            description: "Iron",
        }, {
            weight: 1719340,
            amount: 5933940,
            description: "Oil",
        }, {
            weight: 491494,
            amount: 1940,
            description: "Gun",
        },
        {
            weight: 1710,
            amount: 139940,
            description: "Tea",
        }, {
            weight: 80,
            amount: 5,
            description: "Juice",
        }, {
            weight: 340,
            amount: 10,
            description: "Esig",
        },]);

        const order = client.db().collection("Order");
        order.insertMany([
            {
                price: 484189539,
                comments: "VDa Pls",
                products: [{
                    weight: 8740,
                    amount: 1399940,
                    description: "Mobiles",
                },],
                status: [{
                    orderExprected: new Date(2023, 0, 2, 0, 0, 4, 12),
                    orderReceved: new Date(2023, 0, 1, 0, 0, 4, 0),
                },],
                payment: [{
                    value: 13142545,
                    paymentType: "CARD",
                    currency: "AM DOLLAR",
                },],
                spliter: 1,
            },
            {
                price: 131349,
                comments: "VsDADa Pls",
                products: [{
                    weight: 1340,
                    amount: 143940,
                    description: "Apples",
                },],
                status: [{
                    orderExprected: new Date(2023, 1, 6, 0, 2, 4, 16),
                    orderReceved: new Date(2023, 1, 5, 0, 2, 4, 0),
                },],
                payment: [{
                    value: 194145,
                    paymentType: "CARD",
                    currency: "AM DOLLAR",
                },],
            },
            {
                price: 13149,
                comments: "VDDAFa Pls",
                products: [{
                    weight: 9740,
                    amount: 153940,
                    description: "Pineapples",
                },],
                status: [{
                    orderExprected: new Date(2023, 2, 5, 0, 8, 4, 9),
                    orderReceved: new Date(2023, 2, 5, 0, 8, 4, 9),
                },],
                payment: [{
                    value: 29348138,
                    paymentType: "CARD",
                    currency: "RUB",
                },],
            },
            {
                price: 192958,
                comments: "VDa FKls",
                products: [{
                    weight: 87404193,
                    amount: 1990,
                    description: "Cars",
                },],
                status: [{
                    orderExprected: new Date(2023, 3, 19, 0, 2, 4, 1),
                    orderReceved: new Date(2023, 3, 18, 0, 1, 4, 1),
                },],
                payment: [{
                    value: 12995139,
                    paymentType: "CARD",
                    currency: "AM DOLLAR",
                },],
            },
            {
                price: 14885,
                comments: "VDa PlDF",
                products: [{
                    weight: 1740,
                    amount: 3940,
                    description: "Knifes",
                },],
                status: [{
                    orderExprected: new Date(2023, 2, 13, 0, 4, 4, 9),
                    orderReceved: new Date(2023, 2, 12, 0, 4, 4, 9),
                },],
                payment: [{
                    value: 3143495,
                    paymentType: "CASH",
                    currency: "AM DOLLAR",
                },],

            },
            {
                price: 14249,
                comments: "VDAD KGls",
                products: [{
                    weight: 399,
                    amount: 5402,
                    description: "Tomatos",
                },],
                status: [{
                    orderExprected: new Date(2023, 0, 2, 0, 1, 1, 1),
                    orderReceved: new Date(2023, 0, 1, 0, 1, 1, 1),
                },],
                payment: [{
                    value: 24692492,
                    paymentType: "CARD",
                    currency: "AM DOLLAR",
                },],
            },
            {
                price: 9149,
                comments: "fDK fsls",
                products: [{
                    weight: 140,
                    amount: 349139,
                    description: "Trees",
                },],
                status: [{
                    orderExprected: new Date(2023, 1, 4, 0, 2, 6, 12),
                    orderReceved: new Date(2023, 1, 2, 0, 2, 2, 0),
                },],
                payment: [{
                    value: 2459952,
                    paymentType: "CARD",
                    currency: "AM DOLLAR",
                },],
            },
            {
                price: 9105813,
                comments: "VDa KDFIDFs",
                products: [{
                    weight: 442,
                    amount: 132980,
                    description: "T-Shirt",
                },],
                status: [{
                    orderExprected: new Date(2023, 2, 1, 0, 4, 4, 9),
                    orderReceved: new Date(2023, 2, 1, 0, 4, 4, 9),
                },],
                payment: [{
                    value: 1394395,
                    paymentType: "CASH",
                    currency: "RUB",
                },],
            },
            {
                price: 1939538,
                comments: "VLASDK fsRIs",
                products: [{
                    weight: 110,
                    amount: 1330,
                    description: "Jeans",
                },],
                status: [{
                    orderExprected: new Date(2023, 3, 12, 0, 4, 4, 1),
                    orderReceved: new Date(2023, 3, 12, 0, 4, 4, 1),
                },],
                payment: [{
                    value: 4939539,
                    paymentType: "CARD",
                    currency: "AM DOLLAR",
                },],
            },
            {
                price: 7591449,
                comments: "VKDF ASiR ls",
                products: [{
                    weight: 893740,
                    amount: 499940,
                    description: "Iron",
                },],
                status: [{
                    orderExprected: new Date(2023, 2, 11, 0, 1, 4, 9),
                    orderReceved: new Date(2023, 2, 14, 0, 4, 4, 9),
                },],
                payment: [{
                    value: 139495,
                    paymentType: "CARD",
                    currency: "AM DOLLAR",
                },],
            },
            {
                price: 94299419,
                comments: "LRwoa LDKSls KDF",
                products: [{
                    weight: 1719340,
                    amount: 5933940,
                    description: "Oil",
                },],
                status: [{
                    orderExprected: new Date(2023, 0, 4, 0, 5, 4, 35),
                    orderReceved: new Date(2023, 0, 1, 0, 5, 4, 45),
                },],
                payment: [{
                    value: 542324,
                    paymentType: "CASH",
                    currency: "AM DOLLAR",
                },],
            },
            {
                price: 249294,
                comments: "Oep AEleq Iels",
                products: [{
                    weight: 491494,
                    amount: 1940,
                    description: "Gun",
                },],
                status: [{
                    orderExprected: new Date(2023, 1, 3, 0, 2, 6, 31),
                    orderReceved: new Date(2023, 1, 5, 0, 2, 4, 31),
                },],
                payment: [{
                    value: 5449005,
                    paymentType: "CARD",
                    currency: "AM DOLLAR",
                },],
            },
            {
                price: 4882141,
                comments: "OEe eokFKls",
                products: [{
                    weight: 1710,
                    amount: 139940,
                    description: "Tea",
                },],
                status: [{
                    orderExprected: new Date(2023, 2, 4, 0, 9, 3, 9),
                    orderReceved: new Date(2023, 2, 2, 0, 5, 3, 9),
                },],
                payment: [{
                    value: 6485924,
                    paymentType: "CARD",
                    currency: "AZN",
                },],
            },
            {
                price: 191384,
                comments: "VDLFR ADFkOR",
                products: [{
                    weight: 80,
                    amount: 5,
                    description: "Juice",
                },],
                status: [{
                    orderExprected: new Date(2023, 0, 14, 0, 0, 4, 1),
                    orderReceved: new Date(2023, 0, 14, 0, 1, 4, 1),
                },],
                payment: [{
                    value: 69492492,
                    paymentType: "CARD",
                    currency: "AM DOLLAR",
                },],
            },
            {
                price: 1414885,
                comments: "FLDV ISJFe Pls",
                products: [{
                    weight: 340,
                    amount: 10,
                    description: "Esig",
                },],
                status: [{
                    orderExprected: new Date(2023, 0, 12, 0, 4, 2, 41),
                    orderReceved: new Date(2023, 0, 12, 0, 4, 2, 41),
                },],
                payment: [{
                    value: 259699524,
                    paymentType: "CARD",
                    currency: "AM DOLLAR",
                },],
            },
        ]);

        const payment = client.db().collection("Payment");
        payment.insertMany([{
            value: 13142545,
            paymentType: "CARD",
            currency: "AM DOLLAR",

        },
        {
            value: 194145,
            paymentType: "CARD",
            currency: "AM DOLLAR",

        },
        {
            value: 29348138,
            paymentType: "CARD",
            currency: "RUB",

        },
        {
            value: 12995139,
            paymentType: "CARD",
            currency: "AM DOLLAR",

        },
        {
            value: 3143495,
            paymentType: "CASH",
            currency: "AM DOLLAR",

        },

        {
            value: 24692492,
            paymentType: "CARD",
            currency: "AM DOLLAR",

        },
        {
            value: 2459952,
            paymentType: "CARD",
            currency: "AM DOLLAR",

        },
        {
            value: 1394395,
            paymentType: "CASH",
            currency: "RUB",

        },
        {
            value: 4939539,
            paymentType: "CARD",
            currency: "AM DOLLAR",

        },
        {
            value: 139495,
            paymentType: "CARD",
            currency: "AM DOLLAR",

        },

        {
            value: 542324,
            paymentType: "CASH",
            currency: "AM DOLLAR",

        },
        {
            value: 5449005,
            paymentType: "CARD",
            currency: "AM DOLLAR",

        },
        {
            value: 6485924,
            paymentType: "CARD",
            currency: "AZN",

        },
        {
            value: 69492492,
            paymentType: "CARD",
            currency: "AM DOLLAR",

        },
        {
            value: 259699524,
            paymentType: "CARD",
            currency: "AM DOLLAR",

        },]);

        const statusOrder = client.db().collection("StatusOrder");
        statusOrder.insertMany([{
            orderExprected: new Date(2023, 0, 2, 0, 0, 4, 12),
            orderReceved: new Date(2023, 0, 1, 0, 0, 4, 0),
        },
        {
            orderExprected: new Date(2023, 1, 6, 0, 2, 4, 16),
            orderReceved: new Date(2023, 1, 5, 0, 2, 4, 0),
        },
        {
            orderExprected: new Date(2023, 2, 5, 0, 8, 4, 9),
            orderReceved: new Date(2023, 2, 5, 0, 8, 4, 9),
        },
        {
            orderExprected: new Date(2023, 3, 19, 0, 2, 4, 1),
            orderReceved: new Date(2023, 3, 18, 0, 1, 4, 1),
        },
        {
            orderExprected: new Date(2023, 2, 13, 0, 4, 4, 9),
            orderReceved: new Date(2023, 2, 12, 0, 4, 4, 9),
        },
        {
            orderExprected: new Date(2023, 0, 2, 0, 1, 1, 1),
            orderReceved: new Date(2023, 0, 1, 0, 1, 1, 1),
        },
        {
            orderExprected: new Date(2023, 1, 4, 0, 2, 6, 12),
            orderReceved: new Date(2023, 1, 2, 0, 2, 2, 0),
        },
        {
            orderExprected: new Date(2023, 2, 1, 0, 4, 4, 9),
            orderReceved: new Date(2023, 2, 1, 0, 4, 4, 9),
        },
        {
            orderExprected: new Date(2023, 3, 12, 0, 4, 4, 1),
            orderReceved: new Date(2023, 3, 12, 0, 4, 4, 1),
        },
        {
            orderExprected: new Date(2023, 2, 11, 0, 1, 4, 9),
            orderReceved: new Date(2023, 2, 14, 0, 4, 4, 9),
        },
        {
            orderExprected: new Date(2023, 0, 4, 0, 5, 4, 35),
            orderReceved: new Date(2023, 0, 1, 0, 5, 4, 45),
        },
        {
            orderExprected: new Date(2023, 1, 3, 0, 2, 6, 31),
            orderReceved: new Date(2023, 1, 5, 0, 2, 4, 31),
        },
        {
            orderExprected: new Date(2023, 2, 4, 0, 9, 3, 9),
            orderReceved: new Date(2023, 2, 2, 0, 5, 3, 9),
        },
        {
            orderExprected: new Date(2023, 0, 14, 0, 0, 4, 1),
            orderReceved: new Date(2023, 0, 14, 0, 1, 4, 1),
        },
        {
            orderExprected: new Date(2023, 0, 12, 0, 4, 2, 41),
            orderReceved: new Date(2023, 0, 12, 0, 4, 2, 41),
        },]);

        const spliter = client.db().collection("Spliter");
        spliter.insertMany([{
            order: [{
                price: 484189539,
                comments: "VDa Pls",
                products: [{
                    weight: 8740,
                    amount: 1399940,
                    description: "Mobiles",
                },],
                status: [{
                    orderExprected: new Date(2023, 0, 2, 0, 0, 4, 12),
                    orderReceved: new Date(2023, 0, 1, 0, 0, 4, 0),
                },],
                payment: [{
                    value: 13142545,
                    paymentType: "CARD",
                    currency: "AM DOLLAR",
                },],
                spliter: 1,
            },
            {
                price: 131349,
                comments: "VsDADa Pls",
                products: [{
                    weight: 1340,
                    amount: 143940,
                    description: "Apples",
                },],
                status: [{
                    orderExprected: new Date(2023, 1, 6, 0, 2, 4, 16),
                    orderReceved: new Date(2023, 1, 5, 0, 2, 4, 0),
                },],
                payment: [{
                    value: 194145,
                    paymentType: "CARD",
                    currency: "AM DOLLAR",
                },],
            },],

            company: [{
                tin: "424FSF331DAVVL:TIN",
                contract: "424FSF331DAVVL:CONTRACT",
                name: "Yansex",
                address: "Mayakovka 24",
                phone: "+79216666666",
                city: "Moscow",
                discount: {
                    points: 19,
                },

            }, {
                tin: "1FKSFS331DFEVL:TIN",
                contract: "1FKSFS331DFEVL:CONTRACT",
                name: "Apple",
                address: "Silikon Valley 213",
                phone: "+79994441333",
                city: "California",
            },]
        },
        {
            order: [{
                price: 13149,
                comments: "VDDAFa Pls",
                products: [{
                    weight: 9740,
                    amount: 153940,
                    description: "Pineapples",
                },],
                status: [{
                    orderExprected: new Date(2023, 2, 5, 0, 8, 4, 9),
                    orderReceved: new Date(2023, 2, 5, 0, 8, 4, 9),
                },],
                payment: [{
                    value: 29348138,
                    paymentType: "CARD",
                    currency: "RUB",
                },],
            },],
            company: [{
                tin: "4884OESFK31DAVVL:TIN",
                contract: "4884OESFK31DAVVL:CONTRACT",
                name: "Norton",
                address: "Laskov St 1",
                phone: "+79211693666",
                city: "Saratov",
            }, {
                tin: "1F2S4S331DIEVL:TIN",
                contract: "1F2S4S331DIEVL:CONTRACT",
                name: "Tinkoff",
                address: "Krimskay 88",
                phone: "+79394441333",
                city: "New York",
            },],
        }
        ]);


    } catch (e) {
        console.log(e);
    }
}

async function main() {
    try {
        const connect = await client.connect();

        // const createCollection = await createCollection();
        // const insertCollection = await insertCollections();


        const order = client.db().collection("Order");
        const orderNormal = await order.find(
            {
                $and: [
                    {
                        price: { $lt: 20000 }
                    },
                    {
                        "products.weight": { $lt: 400 }
                    }
                ]
            }
        );

        const orderNormalInfo = await orderNormal.explain('executionStats');
        console.log("NORMAL FIND");
        console.log("DOCS LISTED:", orderNormalInfo.executionStats.executionStages.docsExamined + '\n');

        const orderNormalArray = await orderNormal.toArray();

        for (let i = 0; i < orderNormalArray.length; i++) {
            console.log("ID: ", orderNormalArray[i]._id);
            console.log("PRICE: ", orderNormalArray[i].price);
            console.log("PRODUCT WEIGHT: ", orderNormalArray[i].products[0].weight);
            console.log("\n");
        }


        const createIndex = await order.createIndex({ price: 1, "product.weight": 2 },);
        const orderIndex = await order.find(
            {
                $and: [
                    {
                        price: { $lt: 20000 }
                    },
                    {
                        "products.weight": { $lt: 400 }
                    }
                ]
            }
        );

        const orderIndexInfo = await orderIndex.explain('executionStats');
        console.log("INDEX FIND");
        console.log("DOCS LISTED:", orderIndexInfo.executionStats.executionStages.docsExamined + '\n');

        const orderIndexArray = await orderIndex.toArray();

        for (let i = 0; i < orderIndexArray.length; i++) {
            console.log("ID: ", orderIndexArray[i]._id);
            console.log("PRICE: ", orderIndexArray[i].price);
            console.log("PRODUCT WEIGHT: ", orderIndexArray[i].products[0].weight);
            console.log("\n");
        }
        console.log(await order.indexes());

        order.dropIndex({ price: 1, "product.weight": 2 });

        //Вывод всех компаний и сплитера у которых одинаковое поле tin

        const view = await client.db().collection('Spliter').aggregate([
            { $match: { "company.tin": "4884OESFK31DAVVL:TIN" } },
            { $lookup: { from: "Company", localField: "tin", foreignField: "company.tin", as: "Company" } },
            {
                $project: {
                    company: { $filter: { input: "$company", as: "company", cond: { $eq: ['$$company.tin', '4884OESFK31DAVVL:TIN'] } } },
                    "splitet.company.tin": '4884OESFK31DAVVL:TIN'
                }
            }
        ]).toArray();

        console.log(view[0]);

    } catch (e) {
        console.log("ERROR", e);
    } finally {
        const close = await client.close();
    }
}

main();

