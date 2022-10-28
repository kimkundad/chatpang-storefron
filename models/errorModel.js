class ErrorModel extends Error {
  constructor(code, msg) {
    super(code, msg);
    this.code = code;
    this.msg = msg;
    this.name = 'Error';
  }
}

export default ErrorModel;
