import type { ProductService } from "../services/product-service.js";
export interface GetProductListDeps {
    productService: ProductService;
}
export declare function getProductsList(deps: GetProductListDeps): Promise<import("../index.js").Product[]>;
//# sourceMappingURL=get-product-list.d.ts.map