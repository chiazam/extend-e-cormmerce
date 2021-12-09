import axios from "axios";

export let shorten_word = function (word, n = 15) {

    let ellipses = "";

    if (word.length > n) {

        ellipses = "...";

    }

    return (word.substr(0, n) + ellipses);

};

export let ajax = (url, callback = () => { }, method = "GET", data = {}) => {

    axios({

        method: method,
        url: url,
        data: data

    }).then((response) => {

        callback({ res: response });

    }).catch((error) => {

        callback({ err: error });

    });

}