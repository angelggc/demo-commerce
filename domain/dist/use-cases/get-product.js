export async function getProduct(deps, payload) {
    if (!payload.id)
        return;
    return await deps.productService.findById(payload.id);
}
//# sourceMappingURL=get-product.js.map