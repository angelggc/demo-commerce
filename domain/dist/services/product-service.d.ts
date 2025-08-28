import type { Product } from "../entities/product.js";
export interface ProductService {
    findById: (id: string) => Promise<Product | undefined>;
    findAll: () => Promise<Product[]>;
}
//# sourceMappingURL=product-service.d.ts.map