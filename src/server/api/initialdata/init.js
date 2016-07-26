import WelcomeText from '../../../models/Welcometext';
import ImageType from '../../../models/ImageType';
import News from '../../../models/News';
import * as CONSTANT from '../../../../system/constant';
import * as Services from '../../../../system/services/initial'


export default class Home {
    constructor(opts) {
        this.opts = opts;
        this.listOfResult = [];
    }

    invoke(params, callback) {
        let mResult = [];
        Services.saveToDB({
            model: WelcomeText,
            list: CONSTANT.LIST_WELCOME_TEXT
        }).then((result) => {
            mResult.push(result);
            return Services.saveToDB({
                model: ImageType,
                list: CONSTANT.IMAGE_TYPE
            });
        }).then((result) => {
            mResult.push(result);
            return Services.saveToDB({
                model: News,
                list: CONSTANT.NEWS_DETAIL
            });
        }).then((result) => {
            mResult.push(result);
            callback(JSON.stringify(mResult));
        }).catch((err) => {
            throw err;
        });
    }
}
