import { getProductsList } from "./get-product-list.js";
import { getProduct } from "./get-product.js";
export const domainUseCases = {
    getProduct: {
        useCase: getProduct,
    },
    getProductsList: {
        useCase: getProductsList,
    },
};
export const USE_CASE_NAME = Object.keys(domainUseCases).reduce((acc, key) => {
    acc[key] = key;
    return acc;
}, {});
//# sourceMappingURL=use-cases.js.map