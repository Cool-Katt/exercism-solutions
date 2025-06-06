export class Anagram {
  private target: string
  
  constructor(target: string) {
    this.target = target.toLowerCase()
  }

  public matches(...potentials: string[]): string[] {
    return potentials.filter(w => w.toLowerCase() !== this.target && sorter(w) === sorter(this.target))
  }
}

const sorter = (s: string): string => s.toLowerCase().split("").sort().join("")