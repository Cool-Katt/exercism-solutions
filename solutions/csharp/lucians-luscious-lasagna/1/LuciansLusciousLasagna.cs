class Lasagna
{
    public int ExpectedMinutesInOven() => 40;

    public int PreparationTimeInMinutes(int numOfLayers) => numOfLayers * 2;

    public int RemainingMinutesInOven(int actualMinutes) {
        return ExpectedMinutesInOven() - actualMinutes;
    }

    public int ElapsedTimeInMinutes(int numOfLayers, int actualMinutes) {
        return PreparationTimeInMinutes(numOfLayers) + actualMinutes;
    }
}
