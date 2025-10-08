export const adminMiddleware = (req, res, next)=>{
const {user} = req;
console.log(user)
if(user.role !== 'admin'){
    return res.status(403).json({message:"forbidden: admin only"})
}
req.user = user; 
next();
}