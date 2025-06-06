export class Anagram {
  private targetSet: string
  private target: string
  
  constructor(target: string) {
    this.targetSet = [...target.toLowerCase()].sort().join("")
    this.target = target
  }

  public matches(...potentials: string[]): string[] {
    let matches = potentials.filter((w) => {
      return w.toLowerCase() !== this.target.toLowerCase() &&  [...w.toLowerCase()].sort().join("") === this.targetSet
    })
    return matches
  }
}
