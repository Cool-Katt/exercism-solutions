module binary_search
  implicit none
contains
  function find(array, val) result(idx)
    integer, dimension(:), intent(in) :: array
    integer, intent(in) :: val
    integer :: idx, from_index, to_index, middle_index
    idx = -1
    from_index = 1
    to_index = size(array)
    do while (from_index <= to_index)
      middle_index = (from_index + to_index) / 2
      if (array(middle_index) == val) then
        idx = middle_index
        exit
      end if
      if (array(middle_index) > val) then
        to_index = middle_index - 1
      else if (array(middle_index) < val) then
        from_index = middle_index + 1
      end if
    end do
  end function
end module