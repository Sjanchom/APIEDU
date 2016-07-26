import WelcomeText from '../../../models/Welcometext';
import mongoose from 'mongoose';


const listOfWelcomeText = [
    new WelcomeText({
        imgpath: 'index/welcome/1.jpg',
        detail: 'ข้อความที่ 1 ',
        title: 'หัวข้อที่ 1 '
    }),
    new WelcomeText({
        imgpath: 'index/welcome/2.jpg',
        detail: 'ข้อความที่ 2 ',
        title: 'หัวข้อที่ 2 '
    }),
    new WelcomeText({
        imgpath: 'index/welcome/1.jpg',
        detail: 'ข้อความที่ 3 ',
        title: 'หัวข้อที่ 3 '
    })
];

const isExist = () => {
    return new Promise((resolve, reject) => {
        mongoose.connection.db.listCollections({

        }).next((err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    })
};

const saveWelcomeText = (total,result) => {
    console.log("in save");

    //if (total) {


        return new Promise((resolve, reject) => {

          let addRow = (total,result) => {
            let image = listOfWelcomeText.pop();
            image.save((err, saved) => {
                if (err) reject(err);
                   result.push(saved);
                   console.log("BEFORE : " +saved);
                  if(--total){

                    addRow(total,result);
                  }else{
                    resolve(result);
                  }
            });
          }
          addRow(total,result);
        });

    //}
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


function saveAll(total, result, callback) {


    isExist().then((result) => {
        return removeAll(WelcomeText);
    }).then(() => {
        return saveWelcomeText(total,result);
    }).then((result) => {

        callback(JSON.stringify(result));
    }).catch((err) => {
        throw err;
    });


}


export default class Home {
    constructor(opts) {
        this.opts = opts;
    }

    invoke(params, callback) {
        saveAll(listOfWelcomeText.length, [], function(r) {
            console.log(r);
            callback(r);
        });
    }


}
