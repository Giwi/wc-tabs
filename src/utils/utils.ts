export class Utils {
  /**
   *
   * @param value
   * @returns {boolean}
   */
  public static isUndefined(value: any): boolean {
    return value === undefined || value === 'undefined';
  }

  /**
   *
   * @returns {string}
   */
  public static generateId(): string {
    return Math.random().toString(36).substr(2, 10);
  }
}
