const comments = [
        { "id": 1, "author": "Clu", "body": "Just say no!", "avatarUrl":"images/default-avatar.png" },
        { "id": 2, "author": "Ann Droid", "body": "This is ridiculous...", "avatarUrl":"images/default-avatar.png" }
    ];


class CommentsStore {
    static getAll() {
        return new Promise((resolve, reject) => {
            resolve(Object.assign([], comments));
        })
    }

    static getById(id){
        return new Promise((resolve, reject) => {
            let comment = comments.find((c) => c.id === id);
            if(!comment.length){
                reject(`Comment with id ${id} was not found`);
            }
            resolve(Object.assign({}, comment[0]));
        })
    }

    static save(comment){
        return new Promise((resolve, reject) => {
            if(!comment.id){
                comment.id = comments.length + 1;
                comments.push(comment);
            }else{
                const existingIndex = comments.findIndex(c => c.id === comment.id);
                comments.splice(existingIndex, 1, comment);
            }

            resolve(Object.assign({}, comment));
        })
    }
}

export default CommentsStore;