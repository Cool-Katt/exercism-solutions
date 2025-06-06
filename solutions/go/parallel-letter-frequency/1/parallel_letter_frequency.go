package letter

type FreqMap map[rune]int

func Frequency(s string) FreqMap {
	m := make(FreqMap, 48)
	for _, r := range s {
		m[r]++
	}
	return m
}

func ConcurrentFrequency(list []string) FreqMap {
	getYerFreqOn := make(chan FreqMap, len(list))
	for i := 0; i < len(list); i++ {
		go func(i int) { getYerFreqOn <- Frequency(list[i]) }(i)
	}
	freqShow := make(FreqMap, 48)
	for i := 0; i < len(list); i++ {
		for letter, count := range <-getYerFreqOn {
			freqShow[letter] += count
		}
	}
	return freqShow
}