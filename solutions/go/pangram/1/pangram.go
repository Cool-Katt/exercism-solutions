package pangram

import "strings"

func IsPangram(s string) bool {
	lookup := strings.ToLower(s)
	for chr := 'a'; chr <= 'z'; chr++ {
		if !strings.ContainsRune(lookup, chr) {
			return false
		}
	}
	return true
}