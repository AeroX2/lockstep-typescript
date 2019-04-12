import seedrandom from "seedrandom";

export var Random: seedrandom.prng;

export class Utils {
    public static set_random_seed(seed: string): void {
        Random = seedrandom(seed);
    }
}