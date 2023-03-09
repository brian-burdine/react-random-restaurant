import axios from "axios";

export default async function getData (url) {
    let response = await axios.get(url);
    return response.data;
}