
module high_scores
  implicit none
contains
function scores(score_list)
  integer, dimension(:), intent(in) :: score_list
  integer, dimension(size(score_list)) :: scores
  scores = score_list
end function
integer function latest(score_list)
  integer, dimension(:), intent(in) :: score_list
  latest = score_list(size(score_list))
end function
integer function personalbest(score_list)
  integer, dimension(:), intent(in) :: score_list
  personalbest = maxval(score_list, 1)
end function
function personaltopthree(score_list)
  integer, dimension(:), intent(in) :: score_list
  logical, dimension(size(score_list)) :: mask
  integer :: personaltopthree(3), i
  mask = .true.
  personaltopthree = [0, 0, 0]
  do i = 1, min(3, size(score_list))
    personaltopthree(i) = maxval(score_list, dim=1, mask=mask)
    mask(findloc(score_list, personaltopthree(i), dim=1, mask=mask)) = .false.
  end do
end function
  
end module