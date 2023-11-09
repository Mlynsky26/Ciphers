import { Utils } from '../Utils';

export class HomophonicCipher {

  private static chars = [
    'A', 'Ą', 'B', 'C', 'Ć', 'D', 'E',
    'Ę', 'F', 'G', 'H', 'I', 'J', 'K',
    'L', 'Ł', 'M', 'N', 'Ń', 'O', 'Ó',
    'P', 'Q', 'R', 'S', 'Ś', 'T', 'U',
    'V', 'W', 'X', 'Y', 'Z', 'Ź', 'Ż'
  ]

  private static charsMap = [
    {
      char: 'A',
      count: 9
    },
    {
      char: 'Ą',
      count: 1
    },
    {
      char: 'B',
      count: 1
    },
    {
      char: 'C',
      count: 1
    },
    {
      char: 'Ć',
      count: 1
    },
    {
      char: 'D',
      count: 3
    },
    {
      char: 'E',
      count: 8
    },
    {
      char: 'Ę',
      count: 1
    },
    {
      char: 'F',
      count: 1
    },
    {
      char: 'G',
      count: 1
    },
    {
      char: 'H',
      count: 1
    },
    {
      char: 'I',
      count: 8
    },
    {
      char: 'J',
      count: 2
    },
    {
      char: 'K',
      count: 4
    },
    {
      char: 'L',
      count: 2
    },
    {
      char: 'Ł',
      count: 2
    },
    {
      char: 'M',
      count: 3
    },
    {
      char: 'N',
      count: 6
    },
    {
      char: 'Ń',
      count: 1
    },
    {
      char: 'O',
      count: 8
    },
    {
      char: 'Ó',
      count: 1
    },
    {
      char: 'P',
      count: 3
    },
    {
      char: 'Q',
      count: 1
    },
    {
      char: 'R',
      count: 5
    },
    {
      char: 'S',
      count: 4
    },
    {
      char: 'Ś',
      count: 1
    },
    {
      char: 'T',
      count: 4
    },
    {
      char: 'U',
      count: 3
    },
    {
      char: 'V',
      count: 1
    },
    {
      char: 'W',
      count: 5
    },
    {
      char: 'X',
      count: 1
    },
    {
      char: 'Y',
      count: 4
    },
    {
      char: 'Z',
      count: 6
    },
    {
      char: 'Ż',
      count: 1
    },
    {
      char: 'Ź',
      count: 1
    }
  ]

  private static aaa = '895908127921868457237226666078166235993743480997020950333098811330342255159115309688588062732674224157899268390883048178181639575866524710842066425874936204736182570387000213893239428516564161778823722904965311829857845021887967310189608477085125034373793338446543673871549536262643716609382821596942863503704060031'
  private static bbb = 'aaążź'
  private static ccc = '237 666 078 060 031'
  public static encode(input: string, rawKey: string): string {
    rawKey = rawKey.toUpperCase()
    if (!HomophonicCipher.validateKey(rawKey)) return ''

    const key = HomophonicCipher.translateKey(rawKey)
    const inputChars = input.toUpperCase().split('').filter((char: string) => HomophonicCipher.getChars().includes(char))

    let output = ''
    inputChars.forEach(char => {
      const codes = key[char] ?? []
      const code = codes[Math.floor(Math.random() * codes.length)]
      output += code + " "
    })

    return output
  }

  public static decode(input: string, rawKey: string): string {
    rawKey = rawKey.toUpperCase()
    if (!HomophonicCipher.validateKey(rawKey)) return ''

    const key = HomophonicCipher.translateKey(rawKey)
    const  codes = input.split('').filter((char: string) => char.match(/[0-9]/)).join('').match(/.{3}/g) || []

    let output = ''
    codes.forEach(code => {
      let char = HomophonicCipher.findCodeInKey(key, code)
      if(!char) return
      output += char
    })

    return output
  }

  public static translateKey(rawKey: string) {
    let key: CodesMap = {}
    let rawKeyArr = rawKey.split('')
    HomophonicCipher.charsMap.forEach(c => {
      key[c.char] = []
      for (let i = 0; i < c.count; i++) {
        let code = rawKeyArr.splice(0, 3)
        key[c.char]?.push(code.join(''))
      }
    })
    return key
  }

  private static findCodeInKey(codesMap: CodesMap, code: string): string | null {
    let char = null

    for(const [key, value] of Object.entries(codesMap)){
      if(value?.includes(code)){
        char = key
        break
      }
    }
    return char
  }

  public static getRandomKey(): string {
    let key = ''
    let usedNumbers: number[] = []
    HomophonicCipher.charsMap.forEach(char => {
      let i = 0
      while (i < char.count) {
        let number = Math.floor(Math.random() * 1000);
        if (!usedNumbers.includes(number)) {
          usedNumbers.push(number)
          key += Utils.formatNumber(number, 3)
          i++
        }
      }
    })
    return key
  }

  public static validateKey(rawKey: string): boolean {
    let charArray = rawKey.toUpperCase().split('').filter((char: string) => char.match(/[0-9]/))
    if (charArray.length != HomophonicCipher.getKeysCount() * 3) return false

    let usedNumbers: string[] = []
    for (let i = 0; i < HomophonicCipher.getKeysCount(); i++) {
      let number = charArray[i * 3] + charArray[i * 3 + 1] + charArray[i * 3 + 2]
      if (usedNumbers.includes(number)) return false
      usedNumbers.push(number)
    }

    return usedNumbers.length == HomophonicCipher.getKeysCount()
  }

  private static getKeysCount(): number {
    let sum = 0
    HomophonicCipher.charsMap.forEach(c => sum += c.count)
    return sum
  }

  private static getChars(): string[] {
    return HomophonicCipher.charsMap.map(c => c.char)
  }
}

interface CodesMap {
  [key: string]: string[] | undefined
}
