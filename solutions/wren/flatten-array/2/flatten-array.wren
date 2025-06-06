class Flatten {
  static flatten(list) {
    return list is Num ? [list] : 
      list is Sequence ? list.map {|l| flatten(l) }.reduce([]) { |acc, elem| acc + elem } : 
      []
  }
}