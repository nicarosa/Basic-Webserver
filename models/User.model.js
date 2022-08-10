const User = {
    email: {
        type: string,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: string,
        required: true
    }
}

module.exports = User;