const users = [
        { "id": 1, "username": "Clu", "name": "Clueless idiot", "role":"stormtrooper", "email": "somemail@gmail.com" },
        { "id": 2, "username": "Anne Droid", "name": "Annorexical Android", "role":"helmet polisher", "email": "otheremail@gmail.com" },
    ]

class UsersStore {
    static getAll() {
        return new Promise((resolve, reject) => {
            resolve(Object.assign([], users));
        })
    }

    static getById(id){
        return new Promise((resolve, reject) => {
            let user = users.find((c) => c.id == id); // eslint-disable-line
            if(!user){
                reject(`user with id ${id} was not found`);
            }
            resolve(Object.assign({}, user));
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