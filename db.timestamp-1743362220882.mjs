var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));

// astro:db:astro:db
var astro_db_exports = {};
__reExport(astro_db_exports, virtual_star);
import * as virtual_star from "@astrojs/db/dist/runtime/virtual.js";

// db/config.ts
var User = (0, astro_db_exports.defineTable)({
  columns: {
    id: astro_db_exports.column.text({ primaryKey: true, unique: true }),
    name: astro_db_exports.column.text(),
    email: astro_db_exports.column.text({ unique: true }),
    password: astro_db_exports.column.text(),
    createdAt: astro_db_exports.column.date({ default: /* @__PURE__ */ new Date() }),
    role: astro_db_exports.column.text({ references: () => Role.columns.id })
    // admin, user, super-user
  }
});
var Role = (0, astro_db_exports.defineTable)({
  columns: {
    id: astro_db_exports.column.text({ primaryKey: true }),
    name: astro_db_exports.column.text()
  }
});
var Product = (0, astro_db_exports.defineTable)({
  columns: {
    id: astro_db_exports.column.text({ primaryKey: true }),
    description: astro_db_exports.column.text(),
    gender: astro_db_exports.column.text(),
    price: astro_db_exports.column.number(),
    sizes: astro_db_exports.column.text(),
    slug: astro_db_exports.column.text({ unique: true }),
    stock: astro_db_exports.column.number(),
    tags: astro_db_exports.column.text(),
    title: astro_db_exports.column.text(),
    type: astro_db_exports.column.text(),
    user: astro_db_exports.column.text({ references: () => User.columns.id })
  }
});
var ProductImage = (0, astro_db_exports.defineTable)({
  columns: {
    id: astro_db_exports.column.text({ primaryKey: true }),
    productId: astro_db_exports.column.text({ references: () => Product.columns.id }),
    image: astro_db_exports.column.text()
  }
});
var config_default = (0, astro_db_exports.defineDb)({
  tables: {
    User,
    Role,
    Product,
    ProductImage
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiYXN0cm86ZGI6YXN0cm86ZGIiLCAiZGIvY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgKiBmcm9tIFwiQGFzdHJvanMvZGIvZGlzdC9ydW50aW1lL3ZpcnR1YWwuanNcIiIsICJpbXBvcnQgeyBjb2x1bW4sIGRlZmluZURiLCBkZWZpbmVUYWJsZSB9IGZyb20gJ2FzdHJvOmRiJztcblxuY29uc3QgVXNlciA9IGRlZmluZVRhYmxlKHtcbiAgY29sdW1uczoge1xuICAgIGlkOiBjb2x1bW4udGV4dCh7IHByaW1hcnlLZXk6IHRydWUsIHVuaXF1ZTogdHJ1ZSB9KSxcbiAgICBuYW1lOiBjb2x1bW4udGV4dCgpLFxuICAgIGVtYWlsOiBjb2x1bW4udGV4dCh7IHVuaXF1ZTogdHJ1ZSB9KSxcbiAgICBwYXNzd29yZDogY29sdW1uLnRleHQoKSxcbiAgICBjcmVhdGVkQXQ6IGNvbHVtbi5kYXRlKHsgZGVmYXVsdDogbmV3IERhdGUoKSB9KSxcbiAgICByb2xlOiBjb2x1bW4udGV4dCh7IHJlZmVyZW5jZXM6ICgpPT4gUm9sZS5jb2x1bW5zLmlkIH0pLCAvLyBhZG1pbiwgdXNlciwgc3VwZXItdXNlclxuICB9XG59KVxuXG5jb25zdCBSb2xlID0gZGVmaW5lVGFibGUoe1xuICBjb2x1bW5zOiB7XG4gICAgaWQ6IGNvbHVtbi50ZXh0KHsgcHJpbWFyeUtleTogdHJ1ZSB9KSxcbiAgICBuYW1lOiBjb2x1bW4udGV4dCgpXG4gIH1cbn0pXG5cbmNvbnN0IFByb2R1Y3QgPSBkZWZpbmVUYWJsZSh7XG4gIGNvbHVtbnM6IHtcbiAgICBpZDogY29sdW1uLnRleHQoeyBwcmltYXJ5S2V5OiB0cnVlIH0pLFxuICAgIGRlc2NyaXB0aW9uOiBjb2x1bW4udGV4dCgpLFxuICAgIGdlbmRlcjogY29sdW1uLnRleHQoKSxcbiAgICBwcmljZTogY29sdW1uLm51bWJlcigpLFxuICAgIHNpemVzOiBjb2x1bW4udGV4dCgpLFxuICAgIHNsdWc6IGNvbHVtbi50ZXh0KHsgdW5pcXVlOiB0cnVlIH0pLFxuICAgIHN0b2NrOiBjb2x1bW4ubnVtYmVyKCksXG4gICAgdGFnczogY29sdW1uLnRleHQoKSxcbiAgICB0aXRsZTogY29sdW1uLnRleHQoKSxcbiAgICB0eXBlOiBjb2x1bW4udGV4dCgpLFxuXG4gICAgdXNlcjogY29sdW1uLnRleHQoeyByZWZlcmVuY2VzOiAoKSA9PiBVc2VyLmNvbHVtbnMuaWQgfSlcbiAgfVxufSlcblxuY29uc3QgUHJvZHVjdEltYWdlID0gZGVmaW5lVGFibGUoe1xuICBjb2x1bW5zOiB7XG4gICAgaWQ6IGNvbHVtbi50ZXh0KHsgcHJpbWFyeUtleTogdHJ1ZSB9KSxcbiAgICBwcm9kdWN0SWQ6IGNvbHVtbi50ZXh0KHsgcmVmZXJlbmNlczogKCkgPT4gUHJvZHVjdC5jb2x1bW5zLmlkIH0pLFxuICAgIGltYWdlOiBjb2x1bW4udGV4dCgpLFxuICB9XG59KVxuXG4vLyBodHRwczovL2FzdHJvLmJ1aWxkL2RiL2NvbmZpZ1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lRGIoe1xuICB0YWJsZXM6IHtcbiAgICBVc2VyLFxuICAgIFJvbGUsXG4gICAgUHJvZHVjdCxcbiAgICBQcm9kdWN0SW1hZ2UsXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQSw4QkFBYzs7O0FDRWQsSUFBTSxXQUFPLDhCQUFZO0FBQUEsRUFDdkIsU0FBUztBQUFBLElBQ1AsSUFBSSx3QkFBTyxLQUFLLEVBQUUsWUFBWSxNQUFNLFFBQVEsS0FBSyxDQUFDO0FBQUEsSUFDbEQsTUFBTSx3QkFBTyxLQUFLO0FBQUEsSUFDbEIsT0FBTyx3QkFBTyxLQUFLLEVBQUUsUUFBUSxLQUFLLENBQUM7QUFBQSxJQUNuQyxVQUFVLHdCQUFPLEtBQUs7QUFBQSxJQUN0QixXQUFXLHdCQUFPLEtBQUssRUFBRSxTQUFTLG9CQUFJLEtBQUssRUFBRSxDQUFDO0FBQUEsSUFDOUMsTUFBTSx3QkFBTyxLQUFLLEVBQUUsWUFBWSxNQUFLLEtBQUssUUFBUSxHQUFHLENBQUM7QUFBQTtBQUFBLEVBQ3hEO0FBQ0YsQ0FBQztBQUVELElBQU0sV0FBTyw4QkFBWTtBQUFBLEVBQ3ZCLFNBQVM7QUFBQSxJQUNQLElBQUksd0JBQU8sS0FBSyxFQUFFLFlBQVksS0FBSyxDQUFDO0FBQUEsSUFDcEMsTUFBTSx3QkFBTyxLQUFLO0FBQUEsRUFDcEI7QUFDRixDQUFDO0FBRUQsSUFBTSxjQUFVLDhCQUFZO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsSUFBSSx3QkFBTyxLQUFLLEVBQUUsWUFBWSxLQUFLLENBQUM7QUFBQSxJQUNwQyxhQUFhLHdCQUFPLEtBQUs7QUFBQSxJQUN6QixRQUFRLHdCQUFPLEtBQUs7QUFBQSxJQUNwQixPQUFPLHdCQUFPLE9BQU87QUFBQSxJQUNyQixPQUFPLHdCQUFPLEtBQUs7QUFBQSxJQUNuQixNQUFNLHdCQUFPLEtBQUssRUFBRSxRQUFRLEtBQUssQ0FBQztBQUFBLElBQ2xDLE9BQU8sd0JBQU8sT0FBTztBQUFBLElBQ3JCLE1BQU0sd0JBQU8sS0FBSztBQUFBLElBQ2xCLE9BQU8sd0JBQU8sS0FBSztBQUFBLElBQ25CLE1BQU0sd0JBQU8sS0FBSztBQUFBLElBRWxCLE1BQU0sd0JBQU8sS0FBSyxFQUFFLFlBQVksTUFBTSxLQUFLLFFBQVEsR0FBRyxDQUFDO0FBQUEsRUFDekQ7QUFDRixDQUFDO0FBRUQsSUFBTSxtQkFBZSw4QkFBWTtBQUFBLEVBQy9CLFNBQVM7QUFBQSxJQUNQLElBQUksd0JBQU8sS0FBSyxFQUFFLFlBQVksS0FBSyxDQUFDO0FBQUEsSUFDcEMsV0FBVyx3QkFBTyxLQUFLLEVBQUUsWUFBWSxNQUFNLFFBQVEsUUFBUSxHQUFHLENBQUM7QUFBQSxJQUMvRCxPQUFPLHdCQUFPLEtBQUs7QUFBQSxFQUNyQjtBQUNGLENBQUM7QUFHRCxJQUFPLHFCQUFRLDJCQUFTO0FBQUEsRUFDdEIsUUFBUTtBQUFBLElBQ047QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
