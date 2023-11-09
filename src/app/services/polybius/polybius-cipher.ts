import { Utils } from '../Utils';

export class PolybiusCipher {

  private static chars = [
    'A', 'Ą', 'B', 'C', 'Ć', 'D', 'E',
    'Ę', 'F', 'G', 'H', 'I', 'J', 'K',
    'L', 'Ł', 'M', 'N', 'Ń', 'O', 'Ó',
    'P', 'Q', 'R', 'S', 'Ś', 'T', 'U',
    'V', 'W', 'X', 'Y', 'Z', 'Ź', 'Ż'
  ]
  private static numbers = ['1', '2', '3', '4', '5', '6', '7']
  private static columns = 7;
  private static rows = 5;

  public static encode(input: string, key: string, usePrime: boolean): string {
    key = key.toUpperCase()
    if (!PolybiusCipher.validateKey(key)) return ''

    const inputChars = input.toUpperCase().split('').filter((char: string) => PolybiusCipher.chars.includes(char))

    let output = ''
    inputChars.forEach((char, position) => {
      let index = key.indexOf(char)
      const row = Math.floor(index / PolybiusCipher.columns)
      const col = index - (row * PolybiusCipher.columns)

      if (usePrime && Utils.isPrime(position + 1))
        output += `${col + 1}${row + 1}`
      else
        output += `${row + 1}${col + 1}`
    })

    return output
  }

  public static decode(input: string, key: string, usePrime: boolean): string {
    key = key.toUpperCase()
    if (!PolybiusCipher.validateKey(key)) return ''

    const inputChars = input.split('').filter((char: string) => PolybiusCipher.numbers.includes(char))

    let output = ''
    const outputLength = Math.floor(inputChars.length / 2)

    for (let i = 0; i < outputLength; i++) {
      let row = parseInt(inputChars[i * 2]) - 1;
      let column = parseInt(inputChars[i * 2 + 1]) - 1;

      if (usePrime && Utils.isPrime(i + 1))
        [row, column] = [column, row]

      if (row >= PolybiusCipher.rows || column >= PolybiusCipher.columns) continue

      const index = row * PolybiusCipher.columns + column
      output += key[index]
    }

    return output
  }

  public static getRandomKey(): string {
    return Utils.shuffle([...PolybiusCipher.chars]).join('')
  }

  public static validateKey(rawKey: string): boolean {
    if (rawKey.length != PolybiusCipher.chars.length) return false
    let charArray = rawKey.toUpperCase().split('').filter((char: string) => PolybiusCipher.chars.includes(char))

    const chars = new Set<string>(charArray)
    if (charArray.length != chars.size) return false

    return chars.size == PolybiusCipher.chars.length
  }
}
