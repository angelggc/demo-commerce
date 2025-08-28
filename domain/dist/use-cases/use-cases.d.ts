import { getProductsList } from "./get-product-list.js";
import { getProduct } from "./get-product.js";
export interface UseCaseDeclaration {
    useCase: (deps: any, payload: any) => Promise<unknown>;
}
export declare const domainUseCases: {
    readonly getProduct: {
        readonly useCase: typeof getProduct;
    };
    readonly getProductsList: {
        readonly useCase: typeof getProductsList;
    };
};
export type UseCaseTypes = (typeof domainUseCases)[keyof typeof domainUseCases]["useCase"];
export declare const USE_CASE_NAME: Record<keyof typeof domainUseCases, keyof typeof domainUseCases>;
export type UseCaseName = (typeof USE_CASE_NAME)[keyof typeof USE_CASE_NAME];
export type UseCaseType<TEndpointName extends UseCaseName> = (typeof domainUseCases)[TEndpointName]["useCase"];
//# sourceMappingURL=use-cases.d.ts.map