# Returns the acronym of the given phrase.
#
# + phrase - a string
# + return - the acronym
function abbreviate(string phrase) returns string {
    var letters = re `[ \-_]+`.split(phrase.toUpperAscii()).map(s => s[0]);
    return string:concat(...letters);
}
