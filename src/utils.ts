export var Random: seedrandom.prng;

export class Utils {
    public static set_random(random: seedrandom.prng): void {
        Random = random;
    }
}