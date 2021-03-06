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
    },
    put: (id, params) => {
        return new Promise ((resolve, reject) => {
            Contacts.findByIdAndUpdate(id, params, {new:true})
            .then(data => {
                resolve(id, params)
            })
            .catch(err => {
                reject(err)
            })
        })
    },
    delete: (id) => {
        return new Promise ((resolve, reject) => {
            Contacts.findByIdAndRemove(id)
            .then(data => {
                resolve(id)
            })
            .catch(err => {
                reject(err)
            })
        })
    }
}