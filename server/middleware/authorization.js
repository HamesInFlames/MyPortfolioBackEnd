// Check if signed in user is admin
export const isAdmin = (req, res, next) => {
  if (req.auth.role !== "admin") {
    return res.status(403).json({ error: "Admin resource. Access denied." });
  }
  next();
};

// Check if signed in user is the same as resource user
export const isAuthorized = (req, res, next) => {
  const authorized = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!authorized) {
    return res.status(403).json({ error: "User is not authorized." });
  }
  next();
};
