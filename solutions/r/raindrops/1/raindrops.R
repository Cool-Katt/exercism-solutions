raindrops <- function(number) {
  result <- c("Pling", "Plang", "Plong")[number %% c(3, 5, 7) == 0]
  ifelse(length(result) > 0, paste(result, collapse = ""), toString(number))
}