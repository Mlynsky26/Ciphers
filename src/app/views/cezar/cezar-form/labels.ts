export const labels = [
  {
    name: 'encode',
    input: 'Plain text',
    key: 'Encode key',
    output: 'Encoded text',
    header: 'Encode',
    button: 'Encode',
    prime: 'Use prime encrypting',
    generateButton: 'Generate key'
  },
  {
    name: 'decode',
    input: 'Encoded text',
    key: 'Decode key',
    output: 'Decoded text',
    header: 'Decode',
    button: 'Decode',
    prime: 'Use prime decrypting',
    generateButton: 'Generate key'
  },
]

export interface BasicFormLabels {
  name: string
  input: string,
  key: string,
  output: string,
  header: string,
  button: string
}

export interface PolybiusFormLabels extends BasicFormLabels {
  prime: string,
  generateButton: string | null | undefined
}
