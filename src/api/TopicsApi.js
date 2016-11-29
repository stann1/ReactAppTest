const topics = [
      {"id": 1, "name": "React"},
      {"id": 2, "name": "Jsx"},
      {"id": 3, "name": "Javascript"},
      {"id": 4, "name": "Programming"}
      ];

class TopicsApi {
    static getAll() {
        return new Promise((resolve, reject) => {
            resolve(Object.assign([], topics));
        })
    }

    static getById(id){
        return new Promise((resolve, reject) => {
            let topic = topics.find((c) => c.id === id);
            if(!topic.length){
                reject(`topic with id ${id} was not found`);
            }
            resolve(Object.assign({}, topic[0]));
        })
    }

    static save(topic){
        return new Promise((resolve, reject) => {
            if(!topic.id){
                topic.id = topics.length + 1;
                topics.push(topic);
            }else{
                const existingIndex = topics.findIndex(c => c.id === topic.id);
                topics.splice(existingIndex, 1, topic);
            }

            resolve(Object.assign({}, topic));
        })
    }
}

export default TopicsApi;