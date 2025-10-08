export const adminMiddleware = (req, res, next)=>{
const {user} = req;
if(user.role !== 'admin'){
    return res.status(403).json({message:"forbidden: admin only"})
}
req.user = user; 
next();
}