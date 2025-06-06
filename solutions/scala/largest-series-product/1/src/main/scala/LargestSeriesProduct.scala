object Series{

  def largestProduct(length: Int, digits: String): Option[Int] = {
    (length, digits) match {
      case (0,_) => Some(1)
      case (len, digs) if(len < 0 || digs.length == 0 || len > digs.length || digs.exists(!_.isDigit)) => None
      case (len, digs) => Option(digs.sliding(len,1).map(str => str.toList.map(_.asDigit).product).max)
    }
  }
}