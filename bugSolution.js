function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Or handle nulls as needed, e.g., return 0, default values, etc.
  }
  return a + b;
}