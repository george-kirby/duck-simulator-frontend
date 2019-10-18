const BASE_URL = "http://localhost:3000/"

const DUCKS_URL = `${BASE_URL}ducks/`
const USERS_URL = `${BASE_URL}users/`
const AREAS_URL = `${BASE_URL}areas/`

const getDucks = () => fetch(DUCKS_URL).then(resp => resp.json())
const getUsers = () => fetch(USERS_URL).then(resp => resp.json())
const getAreas = () => fetch(AREAS_URL).then(resp => resp.json())

const jsonHeaders = (more = {}) => {
    return {
            "Content-Type": "application/json",
            Accept: "application/json",
            ...more
        }
} 

const patchDuck = (duck, duckData) => {
    return fetch(`${DUCKS_URL}${duck.id}`, {
        method: "PATCH",
        headers: jsonHeaders(),
        body: JSON.stringify({duck: duckData})
    })
    .then(resp => resp.json())
}

export default { getDucks, getUsers, getAreas, patchDuck }