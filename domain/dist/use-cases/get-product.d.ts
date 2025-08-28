import type { ProductService } from "../services/product-service.js";
interface GetProductDeps {
    productService: ProductService;
}
interface GetProductPayload {
    id: string;
}
export declare function getProduct(deps: GetProductDeps, payload: GetProductPayload): Promise<import("../index.js").Product | undefined>;
export {};
//# sourceMappingURL=get-product.d.ts.map