module reverse_string
  implicit none
contains
  function reverse(input) result(reversed)
    character(*), intent(in) :: input
    character(len=len(input)) :: reversed
    integer :: i
    integer :: l
    l = len(input)
    forall (i=1:len(input)) reversed(i:i) = input(l-i+1:l-i+1)
  end function
end module
