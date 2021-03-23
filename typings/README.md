# Palletized Typings

## Introduction

This directory houses Palletized's type declarations. These interfaces and types are shared between the `api` and `web`-sides; they provide a common source-of-truth with regards to the expected shape of data sent between them.

The shape of these types comes directly from the shape of the models found in `./api/db/schema.prisma`; with `*Id` fields being ignored, due to their repetition under `*.id`.

Declarations for a Prisma-model should be declared as an `interface`. Properties of a model which are **not** models themselves can be `types`.

## Relations

Any `@relation` a model may have is mapped as a property on its interface, with the type of that property being the related model's interface. For example, given the relationship between a Location and Warehouse:

```TypeScript
declare interface IWarehouse {
  id: string
  name: string
  // ...
}

declare interface ILocation {
  id: string
  name: string
  warehouse: IWarehouse
  // ...
}
```
