package leap

is_leap_year :: proc(year: int) -> bool {
	if year % 4 != 0 {
        return false
    }
    if year % 100 != 0 {
        return true
    }
    return year % 400 == 0
}
