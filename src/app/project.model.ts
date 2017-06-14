export class Project {
  private amountRaised: number;
  constructor (public name: string, public description: string, public starters: string, public goal: number, public plans: string, public rewards: string) {
    this.amountRaised = 0;
  }
}
