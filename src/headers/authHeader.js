function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    const header = {};

    if (user && user.token) {
        header["Authorization"] = `Bearer ${user.token}`;
    }
}

export default authHeader;