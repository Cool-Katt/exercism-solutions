#include <string.h>
#include "kindergarten_garden.h"

static plant_t plant(char c)
{
  switch(c) {
    default:
    case 'C':
      return CLOVER;
    case 'G':
      return GRASS;
    case 'R':
      return RADISHES;
    case 'V':
      return VIOLETS;
  }
}

plants_t plants(const char* diagram, const char* student)
{
  const int index = student[0] - 'A';
  const int row_1_offset = 0;
  const int row_2_offset = strlen(diagram) / 2 + 1;

  return (plants_t){
    .plants = {
      plant(diagram[row_1_offset + index * 2]),
      plant(diagram[row_1_offset + index * 2 + 1]),
      plant(diagram[row_2_offset + index * 2]),
      plant(diagram[row_2_offset + index * 2 + 1]),
    }
  };
}

