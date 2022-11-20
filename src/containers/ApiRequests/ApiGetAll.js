import axios from "axios";

export const findAllEquipments = async()=>{
    return (await axios.get(`http://localhost:8080/web/lab/v1/`)).data;
}

export const findEqupmentById = async(id)=>{
    return (await axios.get(`http://localhost:8080/web/lab/v1/${id}`)).data;
}

export const findEqupmentByType = async(type)=>{
    return (await axios.get(`http://localhost:8080/web/lab/v1/type/${type}`)).data;
}
export const findEqupmentByColor = async(color)=>{
    return (await axios.get(`http://localhost:8080/web/lab/v1/color/${color}`)).data;
}