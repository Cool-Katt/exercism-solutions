import java.util.*;

class Knapsack {

    int maximumValue(int maximumWeight, List<Item> items) {
        int [][]scores = new int[maximumWeight + 1][items.size() + 1];

        for (int nItems = 0; nItems <= items.size(); nItems++) {
            scores[0][nItems] = 0;
        }

        ListIterator<Item> iterator = items.listIterator();
        while (iterator.hasNext()) {
            int index = iterator.nextIndex();
            Item item = iterator.next();

            for (int subCap = 0; subCap <= maximumWeight; subCap++) {
                if (subCap < item.weight) {
                    scores[subCap][index + 1] = scores[subCap][index];
                } else {
                    int withScore = scores[subCap - item.weight][index] + item.value;
                    int withoutScore = scores[subCap][index];
                    scores[subCap][index + 1] = Math.max(withScore, withoutScore);
                }
            }
        }

        return scores[maximumWeight][items.size()];
    }

}