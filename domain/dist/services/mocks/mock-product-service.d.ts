import type { Product } from "../../entities/product.js";
import type { ProductService } from "../product-service.js";
export declare class MockedProductService implements ProductService {
    products: Product[];
    constructor(products: Product[]);
    findById(id: string): Promise<Product | undefined>;
    findAll(): Promise<Product[]>;
}
//# sourceMappingURL=mock-product-service.d.ts.map