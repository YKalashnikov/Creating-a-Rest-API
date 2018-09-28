const Contacts = require('../models/Contacts')

module.exports = {
    get: (params) => {
        return new Promise ((resolve, reject) => {
            Contacts.find(params)
            .then(data => {
                 resolve(data)
            })
            .catch(err => {
                  reject(err)
            })
        })
    },
    getById: (id) => {
        return new Promise ((resolve, reject) => {
            Contacts.findById(id)
            .then(data => {
                    resolve(data)
            })
            .catch(err => {
                    reject(new Error('Contact '+ id +'was not found'))
                })
        })
    },
    post: (params) => {
        return new Promise ((resolve, reject) => {
            Contacts.create(params)
            .then(data => {
                resolve(data)
            })
            .catch(err => {
                reject(err)
            })
        })
    }
}