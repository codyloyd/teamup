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
