
import { USER_ACTIVITY, USER_MAIN_DATA, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../../datas/Datas';
/**
* fetch datas
* @param apiDataToFetch data categories to be fetch from api
* @param mockDataToFetch data categories to be fetch from api
* @param setData set the data in the context
* @param apifetch fetch from api
* @param mockfetch fetch from mock
* @return fetched data
*/
export const apiDataToFetch = () => ["","/activity","/average-sessions","/performance"]
.map((url) => apiFetch(url))

export const mockDataToFetch = () => [USER_MAIN_DATA,USER_ACTIVITY,USER_AVERAGE_SESSIONS,USER_PERFORMANCE]
.map((url) => mockFetch(url))

export const setData = (source, dataArrayContext ) => dataArrayContext
.map((arr, index) => arr(source[index]))

const apiFetch = (apiLink) => {
const data1 = []
  Promise.all([12,18].map( (id) => 
  fetch(`http://localhost:3000/user/${id}${apiLink}`)
  .then(resp => resp.json())
  .then(resp => resp.data)
  .then(res => data1.push(res))
  .then(()=>{document.getElementById("apiError").innerHTML=""})
  .catch(() => {
    document.getElementById("apiError").innerHTML="Erreur Réseau Passez en MOCK setted"}
  )
  ))
  return data1
}

const mockFetch = (url) =>{
  return url
}
