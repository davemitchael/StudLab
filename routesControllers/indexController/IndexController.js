const controllers = require("../Includer");
const async = require('async');
const url = require('url');


class IndexController {
    constructor(){}

    static getBasicOptionsForSearch(){
        return new Promise((resolve, reject) => {
            async.parallel({
               typeWork : function (callback) {
                    controllers.TypeWork._find({}, {name: 1}).then(typeWorks => {
                        callback(null,typeWorks);
                    },err=>{callback(err, null);})
                },
               course : function (callback) {
                   controllers.Course._find({}, {course: 1}).then(courses => {
                        callback(null,courses);
                    },err=>{callback(err, null);})
                },
               variant : function (callback) {
                   controllers.Variant._find({}, {variantNumber: 1}).then(variants => {
                        callback(null, variants);
                    },err=>{callback(err, null);})
                }
            },function (err,results) {
                if(err) reject(err);
                resolve(results);
            });

        })
    }

    static getSubjectsByCourse(_course){

        return new Promise((resolve, reject) => {
            controllers.Subject._find({course:_course},{name:1}).then(data=>{
                resolve(data);
            },err=>{reject(err)});
        })

    }

    static getTypeWorks(){
        return new Promise((resolve, reject) => {
            controllers.TypeWork._find().then(types=>{
                resolve(types);
            },err=>{reject(err)})
        })
    }

    static getVariants(){
        return new Promise((resolve, reject) => {
            controllers.Variant._find().then(variants=>{
                resolve(variants);
            },err=>{reject(err)})
        })
    }

    static getCourses(){
        return new Promise((resolve, reject) => {
            controllers.Course._find().then(courses=>{
                resolve(courses);
            },err=>{reject(err)})
        })
    }

}


module.exports = IndexController;