
/**
 * Gerate Custom Error
 * @param {*} status 
 * @param {*} msg 
 * @returns 
 */

export const createError = (status, msg) => {
    const err = new Error();
    err.status = status
    err.message = msg;
    return err;
}
