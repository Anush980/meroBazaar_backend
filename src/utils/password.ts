import bcrypt from "bcrypt";

/*  Hash the plain password */
export const hashedPassword = async (password:string): Promise<string>=>{
    return bcrypt.hash(password,10);
};

// compare the plain password with hashed one 
export const comparePassword = async(
    password:string,
    hashedPassword:string
): Promise<boolean> =>{
    return bcrypt.compare(password,hashedPassword)
};