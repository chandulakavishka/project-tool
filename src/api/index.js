import { BASE_URL } from '../constants/BaseURL';
const axios = require('axios');


//Meetings
export const createMeeting = async (body) => {
    return await axios.post(BASE_URL + '/Meeting', body);
};


export const getMeetings = async (id) => {
    return await axios.get(BASE_URL + `/Meeting/id?id=${id}`);
};

export const updateMeeting = async (body) => {
    return await axios.put(BASE_URL + "/Meeting", body);
};


//MeetingNote
export const createMeetingNote = async (body) => {
    return await axios.post(BASE_URL + '/MeetingNote', body);
};

export const getMeetingNote = async (id) => {
    return await axios.get(BASE_URL + '/MeetingNote', {
        params: {
            id: id,
        },
    });
};


//Rating
export const rating = async (body) => {
    return await axios.post(BASE_URL + '/Rating', body);
};

export const updateRating = async (body) => {
    return await axios.put(BASE_URL + "/Rating", body);
};


//SharePoint
export const sharePoint = async (body) => {
    return await axios.post(BASE_URL + '/SharePoint', body);
};

export const updateSharePoint = async (body) => {
    return await axios.put(BASE_URL + "/SharePoint", body);
};


//Projects
export const getProjects = async () => {
    return await axios.get(BASE_URL + '/Projects');
};
