import { defineAction } from "astro:actions";
import { db, Product, eq, ProductImage } from "astro:db";
import z from "astro:schema"

const newProduct = {
    id: '',
    description: 'Nueva Descripcion',
    gender: 'men',
    price: 100,
    sizes: 'XS,S,M',
    slug: 'nuevo-producto',
    stock: 5,
    tags: 'shirt,men,nuevo',
    title: 'Nuevo Producto',
    type: 'shirts',
}

export const getProductBySlug = defineAction({
    accept: 'json',
    input: z.string(),
    handler: async (slug) => {

        if (slug === 'new') {
            return {
                product: newProduct,
                images: [],
            }
        }

        const [product] = await db
            .select()
            .from(Product)
            .where(eq(Product.slug, slug));

        if (!product) {
            throw new Error(`Product with ${slug} not found`);
        }

        const images = await db
            .select()
            .from(ProductImage)
            .where(eq(ProductImage.productId, product.id));

        return {
            product: product,
            images: images,
            // images: images.map(i => i.image),
        }
    },
})