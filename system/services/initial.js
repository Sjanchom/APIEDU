import mongoose from 'mongoose';
import {
    AUTO_INCREMENT,
    FIND_TOP_NEWS
} from '../constant';


const isExist = () => {
    return new Promise((resolve, reject) => {
        mongoose.connection.db.listCollections({

        }).next((err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    })
};

const saveData = params => {

    let {
        model,
        list
    } = params;
    let total = list.length;
    let result = [];
    console.log(model.modelName);

    if (AUTO_INCREMENT.indexOf(model.modelName) >= 0) {
        return new Promise((resolve, reject) => {
            let addDocumentAuto = (total, result) => {
                let doc = list.pop();
                model.findOne().sort('-type').exec(function(err, item) {
                    if (err) reject(err);
                    doc.type = item ? item.type + 1 : 0;
                    doc.save((err, saved) => {
                        if (err) reject(err);
                        result.push(saved);
                        if (--total) {
                            addDocumentAuto(total, result);
                        } else {
                            resolve(result);
                        }
                    });
                });
            }
            addDocumentAuto(total, result);
        });
    } else if (FIND_TOP_NEWS.indexOf(model.modelName) >= 0) {
        return new Promise((resolve, reject) => {
            let addDocumentFindTopNews = (total, result) => {
                let doc = list.pop();

                if (doc.topnews) {

                    model.findOne({
                        topnews: true
                    }).exec(function(err, item) {
                        if (err) reject(err);

                        if (item !== null) {
                          console.log(item);
                            item.topnews = false;
                            item.save((err, saveditem) => {
                                if (err) reject(err);
                                doc.save((err, saved) => {
                                    if (err) reject(err);
                                    result.push(saved);
                                    if (--total) {
                                        addDocumentFindTopNews(total, result);
                                    } else {
                                        resolve(result);
                                    }
                                });
                            });
                        } else {

                            doc.save((err, saved) => {
                                if (err) reject(err);
                                result.push(saved);
                                if (--total) {
                                    addDocumentFindTopNews(total, result);
                                } else {
                                    resolve(result);
                                }
                            });
                        }
                    });
                } else {
                    doc.save((err, saved) => {
                        if (err) reject(err);
                        result.push(saved);
                        if (--total) {
                            addDocumentFindTopNews(total, result);
                        } else {
                            resolve(result);
                        }
                    });
                }
            }
            addDocumentFindTopNews(total, result);
        });
    } else {
        return new Promise((resolve, reject) => {
            let addDocument = (total, result) => {
                let doc = list.pop();
                doc.save((err, saved) => {
                    if (err) reject(err);
                    result.push(saved);
                    if (--total) {
                        addDocument(total, result);
                    } else {
                        resolve(result);
                    }
                });
            }
            addDocument(total, result);
        });
    }

}

const removeAll = (model) => {
    console.log("removing ...");
    return new Promise((res, rej) => {
        model.remove({}, (err, success) => {
            if (err) rej(err);
            else {
                res();
            }
        });
    });
}


export function saveToDB(params) {
    let {
        model
    } = params;
    return new Promise((resolve, reject) => {
        isExist().then((result) => {
            return removeAll(model);
        }).then(() => {
            return saveData(params);
        }).then((result) => {
            resolve(JSON.stringify(result));
        }).catch((err) => {
            throw err;
        });
    });
}
