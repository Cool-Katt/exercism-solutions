pub fn isBalanced(_: anytype, s: []const u8) !bool {
    var stack: [256]u8 = undefined;
    var i: u8 = 0;
    return for (s) |c| switch (c) {
        '(', '[', '{' => { i += 1; stack[i] = c; },
        ')', ']', '}' => { if (c -% stack[i] > 2) break false; i -= 1; },
        else => continue,
    } else i == 0;
}