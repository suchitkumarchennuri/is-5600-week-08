const { mockDb, mockProducts } = require('./db.mock');
const { list } = require('../products');

// Mock the db module to use our mockDb
jest.mock('../db', () => mockDb);

describe('Product Module', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('list', () => {
        it('should list products', async () => {
            const products = await list();
            expect(products.length).toBe(2); // Ensure there are two products
            expect(products[0].description).toBe('Product 1'); // Validate first product
            expect(products[1].description).toBe('Product 2'); // Validate second product

            // Verify the mock function was called
            expect(mockDb.getProducts).toHaveBeenCalledTimes(1);
        });
    });
});
