# JavaScript Null Value Handling Bug

This repository demonstrates a common JavaScript bug related to handling null values in functions. The `bug.js` file shows the problematic code, and `bugSolution.js` provides the corrected version.

## Bug Description
The original code lacks explicit null checks, leading to potential `TypeError` exceptions or unexpected results when null values are passed as arguments.

## Solution
The solution involves adding explicit null checks to handle null values gracefully, ensuring that the function behaves as intended in all cases.