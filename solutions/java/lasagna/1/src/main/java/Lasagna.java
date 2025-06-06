public class Lasagna {
    public int expectedMinutesInOven() {
        return 40;
    }

    public int remainingMinutesInOven(int spent) {
        return expectedMinutesInOven() - spent;
    }

    public int preparationTimeInMinutes(int layers) {
        return layers * 2;
    }

    public int totalTimeInMinutes(int layers, int spent) {
        return preparationTimeInMinutes(layers) + spent;
    }
}
