import ExtendableError from 'es6-error';

export default class APIError extends ExtendableError {
  status: number;

  constructor(status: number, ...args: any) {
    super(...args);

    this.status = status;
  }
}
