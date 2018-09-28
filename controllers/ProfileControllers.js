const Profile = require('../models/Profile')

module.exports = {
    get: (params) => {
        return new Promise ((resolve, reject) => {
            Profile.find(params)
            .then(data=>{
                 resolve(data)
            })
            .catch(err=>{
                  reject(err)
            })
        })
    },
    getById:(id) => {
        return new Promise ((resolve,reject)=>{
            Profile.findById(id)
            .then(data=> {
                    resolve(data)
            })
                .catch(err=> {
                    reject(err)
                })
        })
    },
    post: (params) => {
        return new Promise ((resolve, reject) => {
            Profile.create(params)
            .then(data => {
                resolve(data)
            })
            .catch(err => {
                reject(err)
            })
        })
    }
}