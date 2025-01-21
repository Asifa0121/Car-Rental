import { type SchemaTypeDefinition } from 'sanity'
import product from "@/sanity/schemaTypes/car"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product],
}
