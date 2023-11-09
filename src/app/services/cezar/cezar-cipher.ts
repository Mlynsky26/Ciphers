import { Utils } from '../Utils';

export class CezarCipher {

  private static chars = [
    'A', 'Ą', 'B', 'C', 'Ć', 'D', 'E',
    'Ę', 'F', 'G', 'H', 'I', 'J', 'K',
    'L', 'Ł', 'M', 'N', 'Ń', 'O', 'Ó',
    'P', 'Q', 'R', 'S', 'Ś', 'T', 'U',
    'V', 'W', 'X', 'Y', 'Z', 'Ź', 'Ż'
  ]

  public static encode(input: string, key: number): string {
    return CezarCipher.mapText(input, key, 1);
  }

  public static decode(input: string, key: number): string {
    return CezarCipher.mapText(input, key, -1);
  }

  private static mapText(input: string, key: number, dir: number): string {
    return input.toUpperCase()
      .split('')
      .filter((char: string) => CezarCipher.chars.includes(char))
      .map(char => {
        const index = CezarCipher.chars.indexOf(char);
        const outputIndex = Utils.mod((index + (key * dir)), CezarCipher.chars.length)
        return CezarCipher.chars[outputIndex];
      })
      .join('')
  }
}
