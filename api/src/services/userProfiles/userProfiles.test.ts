import {
  userProfiles,
  userProfile,
  createUserProfile,
  updateUserProfile,
  deleteUserProfile,
} from './userProfiles'

describe('userProfiles', () => {
  scenario('returns all userProfiles', async (scenario) => {
    const result = await userProfiles()

    expect(result.length).toEqual(Object.keys(scenario.userProfile).length)
  })

  scenario('returns a single userProfile', async (scenario) => {
    const result = await userProfile({ id: scenario.userProfile.one.id })

    expect(result).toEqual(scenario.userProfile.one)
  })

  scenario('creates a userProfile', async (scenario) => {
    const result = await createUserProfile({
      input: {
        id: 'String',
        defaultWarehouseId: 'scenario.userProfile.two.defaultWarehouseId',
      },
    })

    expect(result.id).toEqual('String')
    expect(result.defaultWarehouseId).toEqual(
      'scenario.userProfile.two.defaultWarehouseId'
    )
  })

  scenario('updates a userProfile', async (scenario) => {
    const original = await userProfile({ id: scenario.userProfile.one.id })
    const result = await updateUserProfile({
      id: original.id,
      input: { id: 'String2' },
    })

    expect(result.id).toEqual('String2')
  })

  scenario('deletes a userProfile', async (scenario) => {
    const original = await deleteUserProfile({
      id: scenario.userProfile.one.id,
    })
    const result = await userProfile({ id: original.id })

    expect(result).toEqual(null)
  })
})
