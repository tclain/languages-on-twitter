import {hashHistory} from 'react-router';
export default class HistoryRouter {
    /**
     * @param {string} url - the url to go
     */
    static go(url){
        hashHistory.push(url);
    }
}
