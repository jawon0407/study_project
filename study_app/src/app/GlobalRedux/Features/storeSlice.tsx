"use client"

import { createSlice } from "@reduxjs/toolkit"

// import { 
//     loadStoreList , loadStore , uploadStore , removeStore , likeStore , unlikeStore ,
//     uploadComment , likeComment , unlikeComment , removeComment 
// } from "../api/action"

const initialState = {
    store: null,
    storeList : [],
    singleStore : null,
    imagePaths : [],
    //store 상태관리
    loadStoreListLoading : false,
    loadStoreListDone : false,
    loadStoreListError : null,
    loadStoreLoading : false, 
    loadStoreDone : false,
    loadStoreError : null,
    uploadStoreLoading : false,
    uploadStoreDone : false,
    uploadStoreError : null,
    likeStoreLoading : false,
    likeStoreDone : false,
    likeStoreError : null,
    unlikeStoreLoading : false,
    unlikeStoreDone : false,
    unlikeStoreError : null,
    removeStoreLoading : false,
    removeStoreDone : false,
    removeStoreError : null,
    //comment 상태관리
    uploadCommentLoading : false,
    uploadCommentDone : false,
    uploadCommentError : null,
    likeCommentLoading : false,
    likeCommentDone : false,
    likeCommentError : null,
    unlikeCommentLoading : false,
    unlikeCommentDone : false,
    unlikeCommentError : null,
    removeCommentLoading : false,
    removeCommentDone : false,
    removeCommentError : null,
}

export const storeSlice = createSlice({
    name : "store",
    initialState,
    reducers : {},
    extraReducers : (builder) => builder
    .addCase("loadStoreList", (state, action) => {
        state.loadStoreListLoading = true
        state.loadStoreListDone = false
        state.loadStoreListError = null
    })
})