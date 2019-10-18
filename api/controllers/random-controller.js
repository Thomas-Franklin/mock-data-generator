const faker = require('faker');

exports.random = async (req, res) => {

	return res.status(200).json({
		address: {
            zip_code: faker.address.zipCode(),
            city: faker.address.city(),
            street_name: faker.address.streetName(),
            street_address: faker.address.streetAddress(false),
            county: faker.address.county(),
            country: faker.address.country(),
            country_code: faker.address.countryCode(),
            state: faker.address.state(true),
            lat: faker.address.latitude(),
            long: faker.address.longitude()
        },
        commerce: {
            color: faker.commerce.color(),
            department: faker.commerce.department(),
            product_name: faker.commerce.productName(),
            price: faker.commerce.price(1, 100, 2, "£"),
            product_adjective: faker.commerce.productAdjective(),
            product: faker.commerce.product()
        },
        company: {
            company_name: faker.company.companyName(2),
            catch_phrase: faker.company.catchPhrase()
        },
        date: {
            past: faker.date.past(),
            future: faker.date.future(),
            recent: faker.date.recent(),
            month: faker.date.month(),
            weekday: faker.date.weekday()
        },
        bank_account: {
            account: faker.finance.account(10),
            account_name: faker.finance.accountName(),
            balance: faker.finance.amount(1, 30000, 2, "£"),
            iban: faker.finance.iban(true),
            bic: faker.finance.bic()
        },
        transactions: faker.helpers.createTransaction(),
        user: faker.helpers.userCard()
	});
};