import { ADD_ARTICLE } from "../constants/action-types";

export const addArticle = (article) => {
    console.log(" In Add Article under .actions/index.js...");
    return ({type: ADD_ARTICLE, payload: article});
}