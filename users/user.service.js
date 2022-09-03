import conn from'../models/connection.js'
import User from'../models/user.model.js'
import ShippingAddress from'../models/address.model.js'
const  register = async () => {

    const session = await conn.startSession();
    let user;
    let shippingAddress;
    try {
        session.startTransaction();                    
        user = await User.create([
            { 
                name: 'Van Helsing' 
            }
        ], { session });
        console.log({user})

        shippingAddress = await ShippingAddress.create([
            {
                address: 'Transylvania',
                // postCode:1213,
                user_id: user.id
            }
        ], { session });
        console.log({shippingAddress})
        await session.commitTransaction();
        console.log('success');
        return {user,shippingAddress};
    } catch (error) {
        console.log(error);
        await session.abortTransaction();
    }
    session.endSession();
    
}

export default register


// // autometic transaction rollback
// const register = async () => {

//     try {
//         const session = await conn.startSession();                                   
//         await session.withTransaction(async () => { 
    
//             const user = await User.create([
//                 { 
//                     name: 'Van Helsing' 
//                 }
//             ], { session });
    
//             await ShippingAddress.create([
//                 {
//                     address: 'Transylvania',
//                     user_id: user.id
//                 }
//             ], { session });
    
//             return user;
//         });
//         session.endSession();

//         console.log('success');
//     } catch (error) {
//         console.log('error');
//     }
// }