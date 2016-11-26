const profiles = [
            {"id": 1, "username": "buzz-kill", "password": "*encrypted*", "firstname": "Bai", "lastname":"Pesho", "language": "English(UK)", "phone": "0882345678"}
];

class ProfileStore {
    static getAll() {
        return new Promise((resolve, reject) => {
            resolve(Object.assign([], profiles));
        })
    }

    static getMyProfile(){
        let id = 1;  // Hardcoded for now
        return new Promise((resolve, reject) => {
            let profile = profiles.find((c) => c.id == id);
            if(!profile){
                reject(`profile with id ${id} was not found`);
            }
            resolve(Object.assign({}, profile));
        })
    }

    static save(profile){
        return new Promise((resolve, reject) => {
            if(!profile.id){
                reject(`Profile id was not found! Saving is not possible.`)
            }else{
                const existingIndex = profiles.findIndex(c => c.id === profile.id);
                profiles.splice(existingIndex, 1, profile);
            }

            resolve(Object.assign({}, profile));
        })
    }
}

export default ProfileStore;