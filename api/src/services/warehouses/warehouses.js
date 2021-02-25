import { db } from 'src/lib/db'

export const warehouses = () => {
  return db.warehouse.findMany()
}

export const warehouse = ({ id }) => {
  return db.warehouse.findUnique({
    where: { id },
  })
}

export const createWarehouse = ({ input }) => {
  return db.warehouse.create({
    data: input,
  })
}

export const updateWarehouse = ({ id, input }) => {
  return db.warehouse.update({
    data: input,
    where: { id },
  })
}

export const deleteWarehouse = ({ id }) => {
  return db.warehouse.delete({
    where: { id },
  })
}

export const Warehouse = {
  locations: (_obj, { root }) =>
    db.warehouse.findUnique({ where: { id: root.id } }).locations(),
}
