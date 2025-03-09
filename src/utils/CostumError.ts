export default class CustomError extends Error {
    public code: string;
    public statusCode: number;

    constructor(message: string, code: string, statusCode: number) {
        super(message);
        this.name = this.constructor.name;
        this.code = code;
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
}
