import StudentModel from "../models/Students.js";

class StudentController {
    static createDoc = async (req, res) => {
        try {
            const { name, age, fees } = req.body
            const doc = new StudentModel({
                name: name,
                age: age,
                fees: fees
            })

            const result = await doc.save()
            res.status(201).send(result)
        } catch (error) {

        }
    }
    static getAllDoc = async (req, res) => {
        try {
            const result = await StudentModel.find()
            // console.log('StudentModel', StudentModel)
            res.send(result)
        } catch (error) {
            console.log(error)
        }
        // res.send("getAllDoc")
    }
    static getSingleDocById = async (req, res) => {
        try {
            const result = await StudentModel.findById(req.params.id)
            console.log('StudentModel', StudentModel)
            res.send(result)
        } catch (error) {
            console.log(error)
        }
    }
    static updateDocById = async (req, res) => {
        try {
            const result = await StudentModel.findByIdAndUpdate(req.params.id, req.body)
            // console.log('StudentModel', StudentModel)
            res.send(result)
        } catch (error) {
            console.log(error)
        }
    }
    static deleteDocById = async (req, res) => {
        try {
            const result = await StudentModel.findByIdAndDelete(req.params.id)
            // console.log('StudentModel', StudentModel)
            res.status(204).end(result)
        } catch (error) {
            console.log(error)
        }
    }
}

export default StudentController