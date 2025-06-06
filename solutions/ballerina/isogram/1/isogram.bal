public function isIsogram(string sentence) returns boolean {
    int[] characters = [];
    int[] allCharacters = [];
    sentence.toLowerAscii().toCodePointInts().filter(cp => cp >= 97 && cp <= 122).forEach(function (int cp) {
            allCharacters.push(cp);
            if characters.indexOf(cp) == () {
                characters.push(cp);
            }
    });
    return characters.length() == allCharacters.length();
}