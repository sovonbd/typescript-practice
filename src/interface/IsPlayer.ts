export interface IsPlayer {
  name: string;
  readonly country: string;

  getAge(): number;
  play: () => void;
}
