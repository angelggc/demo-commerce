import { describe, expect, test } from "vitest";
import { MockedProductService } from "../services/mocks/mock-product-service.js";
import { getProductsList } from "./get-product-list.js";
describe("getProductList", async () => {
    const productService = new MockedProductService([
        { id: "1", name: "test1", price: 10 },
        { id: "2", name: "test2", price: 20 },
        { id: "3", name: "test3", price: 30 },
    ]);
    test("Should return a array of products", async () => {
        const result = await getProductsList({ productService });
        expect(result).toHaveLength(3);
    });
});
//# sourceMappingURL=get-product-list.spec.js.map