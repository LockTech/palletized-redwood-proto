import { UserInputError } from '@redwoodjs/api'
import { db } from 'src/lib/db'
import { throwIfNameIsReserved } from 'src/lib/error'

const WAREHOUSE_NAME_MAX_LEN = 75

export const warehouses = () => {
  return db.warehouse.findMany()
}

export const warehouse = ({ id }) => {
  return db.warehouse.findUnique({
    where: { id },
  })
}

export const createWarehouse = async ({ input }: { input: IWarehouse }) => {
  throwIfNameIsReserved(input.name, 'Warehouse')

  if (input.name.length > WAREHOUSE_NAME_MAX_LEN) {
    throw new UserInputError(
      `Warehouse names can be no longer than ${WAREHOUSE_NAME_MAX_LEN} characters.`,
      {
        messages: {
          Name: [`is ${input.name.length} characters long.`],
        },
      }
    )
  }

  input.id = input.name.replaceAll(' ', '-').toLowerCase()

  try {
    return await db.warehouse.create({
      data: input,
    })
  } catch (err) {
    console.log(err.code)
    console.log(err.meta)
    throw new UserInputError('test', {
      messages: {
        email: ['wow'],
      },
    })
  }
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
