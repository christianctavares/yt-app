import axios from 'axios';

const KEY = 'AIzaSyDO_2GK1FjGxVccdCZclx9HL7sz-C5BJlI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResult: 5,
        key: KEY
    }
});