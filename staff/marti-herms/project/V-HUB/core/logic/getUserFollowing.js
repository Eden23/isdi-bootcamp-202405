import { User } from '../data/models.js'

import { validate, errors } from 'com'

const { NotFoundError, SystemError } = errors

export default (userId, targetUserId) => {
    validate.string(userId, 'userId')
    validate.string(targetUserId, 'targetUserId')

    return User.findById(userId).lean()
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user)
                throw new NotFoundError('user not found')

            return User.findById(targetUserId).lean()
                .catch(error => { throw new SystemError(error.message) })
                .then(user => {
                    if (!user) throw new NotFoundError('targetUser not found')

                    return User.find({ _id: { $in: user.following } })
                        .catch(error => { throw new SystemError(error.message) })
                        .then(users => {
                            const promises = users.map(user => {
                                user.id = user._id.toString()

                                delete user._id

                                delete user.password

                                return user
                            })

                            return Promise.all(promises)
                        })
                })
        })
}