export class Utils {
  public static isPrime(num: number) {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  }


  public static shuffle<T>(array: T[]): T[] {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  };

  public static mod(n:number, m:number) {
    return ((n % m) + m) % m;
  }

  public static formatNumber(number:number, totalLength:number = 3) {
    return String(number).padStart(totalLength, '0');
  }
}
