import Crypto from 'crypto'

/**
 * Generates a hash for the given string.
 * @param str receive string for encrypt
 * @returns hash string
 */
export const generateHashMd5 = (str: string): string => {
  return Crypto.createHash('md5').update(str).digest('hex')
}
