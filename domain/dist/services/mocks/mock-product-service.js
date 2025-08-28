export class MockedProductService {
    products = [];
    constructor(products) {
        this.products = products;
    }
    async findById(id) {
        return this.products.find((p) => p.id == id);
    }
    async findAll() {
        return this.products;
    }
}
//# sourceMappingURL=mock-product-service.js.map