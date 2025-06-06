#include "secret_handshake.h"
#include <algorithm>

namespace secret_handshake {
    std::vector<std::string> commands(unsigned int signal)
    {
        std::vector<std::string> result;
        if (signal & 0b00001) result.emplace_back("wink");
        if (signal & 0b00010) result.emplace_back("double blink");
        if (signal & 0b00100) result.emplace_back("close your eyes");
        if (signal & 0b01000) result.emplace_back("jump");
        if (signal & 0b10000) std::reverse(begin(result), end(result));
        return result;
    }
}  // namespace secret_handshake