import axios from "axios"
import { api, API_URL } from "../../config/api"
import { ADD_TO_FAVORITE_FAILURE, ADD_TO_FAVORITE_REQUEST, ADD_TO_FAVORITE_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./Action_Type"

//http://localhost:3002/auth/signup
export const registerUser = (reqData) => async(dispatch) => {
    dispatch({type:REGISTER_REQUEST})
    try {
        const {data} = await axios.post(`${API_URL}/auth/signup`, reqData.userData)
        if(data.jwt){
            localStorage.setItem("jwt",data.jwt);
        }
        if(data.role=== "ROLE_RESTAURANT_OWNER"){
            reqData.navigate("/admin/resturants")
        }else{
            reqData.navigate("/")
        }
        dispatch({type:REGISTER_SUCCESS,payload:data.jwt})
        console.log("REGISTER_SUCCESS", data)
    } catch (error) {
        dispatch({type:REGISTER_FAILURE, payload:error})
        console.log("error",error)
    }
}

export const loginUser = (reqData) => async(dispatch) => {
    dispatch({type:LOGIN_REQUEST})
    try {
        const {data} = await axios.post(`${API_URL}/auth/signin`, reqData.userData)
        if(data.jwt){
            localStorage.setItem("jwt",data.jwt);
        }
        if(data.role=== "ROLE_RESTAURANT_OWNER"){
            reqData.navigate("/admin/resturants")
        }else{
            reqData.navigate("/")
        }
        dispatch({type:LOGIN_SUCCESS,payload:data.jwt})
        console.log("LOGIN_SUCCESS", data)
    } catch (error) {
        dispatch({type:LOGIN_FAILURE, payload:error})
        console.log("error",error)
    }
}

export const getUser = (jwt) => async(dispatch) => {
    dispatch({type:GET_USER_REQUEST})
    try {
        const {data} = await api.get(`/api/users/profile`, {
            headers:{
                Authorization: `Bearer ${jwt}`
            }
        })
        
        dispatch({type:GET_USER_SUCCESS,payload:data})
        console.log("User profile", data)
    } catch (error) {
        dispatch({type:GET_USER_FAILURE, payload:error})
        console.log("error",error)
    }
}


export const addToFavourite = ({jwt, resturantId}) => async(dispatch) => {
    dispatch({type:ADD_TO_FAVORITE_REQUEST})
    try {
        ///api/resturants/1/add-favourites
        console.log("resturantId cmons",resturantId)
        const {data} = await api.put(`/api/resturants/${resturantId}/add-favourites`,{}, {
            headers:{
                Authorization: `Bearer ${jwt}`
            }
        })
        
        dispatch({type:ADD_TO_FAVORITE_SUCCESS,payload:data})
        console.log("added to favourite", data)
    } catch (error) {
        dispatch({type:ADD_TO_FAVORITE_FAILURE, payload:error})
        console.log("error",error)
    }
}

export const logout = () => async(dispatch) => {
    
    try {
        localStorage.clear()
        
        dispatch({type:LOGOUT})
        console.log("log out succcess")
    } catch (error) {
        console.log("error",error)
    }
}
