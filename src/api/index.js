/*
 * 
 * This is our API Interface. It allows us to
 * keep our API logic and our Redux Async Actions seperate.
 * 
 * For more info on module interfaces and why we use them, see Erics book 
 * Programming JavaScript Applications, Chapter 4, Interfaces. Or I can try
 * to expalin in the channel
 * 
 */

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

// This is would be a typical function if we were using a 
// standard REST API

export const getProjectById = (id) => {
    return fetch(`/api/project/${id}`)
        .then(handleErrors) // Check for errors and throws error if required
        .then((response) => {
            return response.json();
        });
};


/* 
 * I am not familiar with FB, so this is probably
 * wrong but our getProjectById function might
 * look more like this when we use Firebase.
 */

// import firebase from 'firebase';

// export const getProjectById = (id) => {
//     return firebase.database().ref(`project/${id}`);
// }
