import register from "./user.service.js"
export const createUserAndAddress = (req,res) => {
    const result = register()
    return result
}