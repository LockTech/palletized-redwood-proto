import { db } from 'src/lib/db'

export const locations = () => {
  return db.location.findMany()
}

export const location = ({ id }) => {
  return db.location.findUnique({
    where: { id },
  })
}

export const createLocation = ({ input }) => {
  return db.location.create({
    data: input,
  })
}

export const updateLocation = ({ id, input }) => {
  return db.location.update({
    data: input,
    where: { id },
  })
}

export const deleteLocation = ({ id }) => {
  return db.location.delete({
    where: { id },
  })
}

export const Location = {
  warehouse: (_obj, { root }) =>
    db.location.findUnique({ where: { id: root.id } }).warehouse(),
  pallets: (_obj, { root }) =>
    db.location.findUnique({ where: { id: root.id } }).pallets(),
}
