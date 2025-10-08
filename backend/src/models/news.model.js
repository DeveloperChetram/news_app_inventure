import mongoose from 'mongoose';

const newsSchema = new mongoose.Schema({
    title:{
        type:String,
        
        required:true
    },
    content:{
        type:String,
        required:true
    },
    categoryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'category',
        required:true
    },
    authorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    published:{
        type:Boolean,
        default:false
    },
    likes:{
        type:Map, //used ai because in object there was having issue 
        default:{}
    },

})

export const newsModel = mongoose.model('news', newsSchema)
