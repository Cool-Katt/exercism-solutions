#include "secret_handshake.h"

namespace {
    const std::vector<std::string> signals = {
        "wink",
        "double blink",
        "close your eyes",
        "jump",
    };
}

namespace secret_handshake {
    std::vector<std::string> commands (unsigned int signal) {
        std::vector<std::string> output;

        int action = 0, action_incr = 1, end = signals.size();
        if (signal & 16) {action = 3; action_incr = -1; end = -1;}        
            
        for (; action != end; action+=action_incr)
            if (signal & (1 << action))
                output.emplace_back(signals[action]);
        return output;
    }
}  // namespace secret_handshake