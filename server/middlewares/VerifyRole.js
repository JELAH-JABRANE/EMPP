export const VerifyRole = (Requiredrole) => {
  return (req, res, next) => {
    const { role } = req.user;

    if(Requiredrole != role){
      res.status(403).json({mesage : 'not allowed '});
    }

    next();
  };
};
