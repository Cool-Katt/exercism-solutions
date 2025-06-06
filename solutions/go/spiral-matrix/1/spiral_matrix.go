package spiralmatrix

// SpiralMatrix draw a spiral matrix of numbers
func SpiralMatrix(n int) [][]int {
	// define the matrix
	matrix := make([][]int, n)
	for i := range matrix {
		matrix[i] = make([]int, n)
	}
	// bigger loop n/2 and 4 inner loops
	c := 0
	for i := 0; i < n/2+n%2; i++ {
		// top side
		for j := i; j < n-i; j++ {
			c++
			matrix[i][j] = c
		}
		// left side
		for j := i + 1; j < n-i; j++ {
			c++
			matrix[j][n-i-1] = c
		}
		// bottom side
		for j := n - i - 2; j >= i; j-- {
			c++
			matrix[n-i-1][j] = c
		}
		// right side
		for j := n - i - 2; j > i; j-- {
			c++
			matrix[j][i] = c
		}
	}
	return matrix
}