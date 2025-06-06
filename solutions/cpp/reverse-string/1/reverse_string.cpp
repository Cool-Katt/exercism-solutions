#include <string>
#include <algorithm>
#include "reverse_string.h"
namespace reverse_string 
{
    std::string reverse_string(std::string str)
    {
        std::reverse(begin(str), end(str));
        return str;
    }
}