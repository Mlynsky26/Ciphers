import { Utils } from '../Utils';

export class TrithemiusCipher {

  private static chars = [
    'A', 'Ą', 'B', 'C', 'Ć', 'D', 'E',
    'Ę', 'F', 'G', 'H', 'I', 'J', 'K',
    'L', 'Ł', 'M', 'N', 'Ń', 'O', 'Ó',
    'P', 'Q', 'R', 'S', 'Ś', 'T', 'U',
    'V', 'W', 'X', 'Y', 'Z', 'Ź', 'Ż'
  ]

  public static encode(input: string, key: string): string {
    return TrithemiusCipher.mapText(input, key, 1);
  }

  public static decode(input: string, key: string): string {
    return TrithemiusCipher.mapText(input, key, -1);
  }

  private static mapText(input: string, rawKey: string, dir: number): string {
    if(!TrithemiusCipher.validateKey(rawKey)) return ''
    const key = TrithemiusCipher.chars.indexOf(rawKey.toUpperCase());
    return input.toUpperCase()
      .split('')
      .filter((char: string) => TrithemiusCipher.chars.includes(char))
      .map((char, i) => {
        const index = TrithemiusCipher.chars.indexOf(char);
        const outputIndex = Utils.mod((index + ((key + i) * dir)), TrithemiusCipher.chars.length)
        return TrithemiusCipher.chars[outputIndex];
      })
      .join('')
  }

  public static validateKey(key: string): boolean{
    if(key.length != 1) return false
    return TrithemiusCipher.chars.includes(key.toUpperCase())
  }
}
