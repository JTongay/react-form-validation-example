import { composeValidators, isRequired, verifyMinLength } from './validators';

describe('Validators', () => {
  describe('isRequired', () => {
    it('should pass validation', () => {
      const returnedVal = isRequired('some val');
      expect(returnedVal).toBeUndefined();
    });
    it('should return an error message when validation fails', () => {
      const returnedVal = isRequired('');
      expect(returnedVal).toBe('Required');
    });
  });

  describe('verifyMinLength', () => {
    it('should pass validation', () => {
      const returnedVal = verifyMinLength(5, 'some input')('something');
      expect(returnedVal).toBeUndefined();
    });
    it('should return an error message when validation fails', () => {
      const returnedVal = verifyMinLength(5, 'some input')('yo');
      expect(returnedVal).toBe('some input must be greater than length 5');
    });
  });

  describe('composeValidators', () => {
    it('should pass multiple validations', () => {
      const returnedVal = composeValidators(isRequired, verifyMinLength(5, 'some input'))(
        'howdy there'
      );
      expect(returnedVal).toBeUndefined();
    });
    it('should return the appopriate error message when one occurs', () => {
      const returnedVal = composeValidators(isRequired, verifyMinLength(5, 'some input'))('wat');
      expect(returnedVal).toBe('some input must be greater than length 5');
    });
    it('should return the first error message when multiple are present', () => {
      const returnedVal = composeValidators(isRequired, verifyMinLength(5, 'some input'))('');
      expect(returnedVal).toBe('Required');
    });
  });
});
