const users = [
        { "id": 1, "username": "Clu", "name": "Clueless idiot", "role":"stormtrooper" },
        { "id": 2, "username": "Anne Droid", "name": "Annorexical Android", "role":"helmet polisher" },
    ]

class UsersStore {
    static getAll() {
        return new Promise((resolve, reject) => {
            resolve(Object.assign([], users));
        })
    }

    static getById(id){
        return new Promise((resolve, reject) => {
            let user = users.find((c) => c.id === id);
            if(!user.length){
                reject(`user with id ${id} was not found`);
            }
            resolve(Object.assign({}, user[0]));
        })
    }

    static save(user){
        return new Promise((resolve, reject) => {
            if(!user.id){
                user.id = users.length + 1;
                users.push(user);
            }else{
                const existingIndex = users.findIndex(c => c.id === user.id);
                users.splice(existingIndex, 1, user);
            }

            resolve(Object.assign({}, user));
        })
    }
}

export default UsersStore;