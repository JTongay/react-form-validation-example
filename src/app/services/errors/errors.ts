// Create your types of errors here and make sure to extend the main Error class.
// Throw these errors in your components and check for them in your error boundaries
export class ServerError extends Error {
  constructor(public error: string) {
    super(error);
  }
}
