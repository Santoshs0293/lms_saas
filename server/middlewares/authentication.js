// Middleware for Admin authentication
module.exports.adminAuthentication = (req, res, next) => {
    if (req.user.role !== "Admin") {
        return res.status(401).json({
            err: "Access Denied"
        });
    }
    next();
};

// Middleware for Student authentication
module.exports.studentAuthentication = (req, res, next) => {
    if (req.user.role !== "Student") {
        return res.status(401).json({
            err: "Access Denied"
        });
    }
    next();
};

// Middleware for Teacher authentication
module.exports.teacherAuthentication = (req, res, next) => {
    if (req.user.role !== "Teacher") {
        return res.status(401).json({
            err: "Access Denied"
        });
    }
    next();
};

// Middleware for Principal authentication
module.exports.principalAuthentication = (req, res, next) => {
    if (req.user.role !== "Principal") {
        return res.status(401).json({
            err: "Access Denied"
        });
    }
    next();
};

// Middleware for allowing access to Teacher, Student, Admin, and Principal
module.exports.allAuthentication = (req, res, next) => {
    const allowedRoles = ["Teacher", "Student", "Admin", "Principal"];
    if (!allowedRoles.includes(req.user.role)) {
        return res.status(401).json({
            err: "Access Denied"
        });
    }
    next();
};
