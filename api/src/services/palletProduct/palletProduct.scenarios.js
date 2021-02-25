export const standard = defineScenario({
  palletProduct: {
    one: {
      updatedAt: '2021-02-25T23:26:17Z',
      pallet: {
        create: {
          name: 'String',
          updatedAt: '2021-02-25T23:26:17Z',
          location: {
            create: {
              name: 'String',
              warehouse: {
                create: {
                  name: 'String2167919',
                  updatedAt: '2021-02-25T23:26:17Z',
                },
              },
            },
          },

          order: {
            create: { name: 'String', updatedAt: '2021-02-25T23:26:17Z' },
          },
        },
      },

      product: { create: { name: 'String9882712' } },
    },

    two: {
      updatedAt: '2021-02-25T23:26:18Z',
      pallet: {
        create: {
          name: 'String',
          updatedAt: '2021-02-25T23:26:18Z',
          location: {
            create: {
              name: 'String',
              warehouse: {
                create: {
                  name: 'String5683815',
                  updatedAt: '2021-02-25T23:26:18Z',
                },
              },
            },
          },

          order: {
            create: { name: 'String', updatedAt: '2021-02-25T23:26:18Z' },
          },
        },
      },

      product: { create: { name: 'String7056805' } },
    },
  },
})
