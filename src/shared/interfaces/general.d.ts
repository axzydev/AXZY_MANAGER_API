/**
 * Interface representing a flexible type.
 * The flexible type can be an object, an array of any type, a nested object, or a nested array.
 * Should be used for any kind of data that can be of any type.
 */
export interface FlexibleType {
    /**
     * The key is a string, and the value can be of any type (unknown), an array of any type (unknown[]),
     * an object of FlexibleType (for nested objects), or an array of FlexibleType (for nested arrays).
     */
    [key: string]: unknown | unknown[] | FlexibleType | FlexibleType[];
  }
  