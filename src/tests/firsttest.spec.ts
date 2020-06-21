// import User from '@models/User'
import User from '@models/User'

test('it should be OK', () => {
  const user = new User()

  user.name = 'David'

  expect(user.name).toEqual('David')
})
