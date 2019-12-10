describe('Array extensions', () => {
  test.each([
    [[], (undefined as unknown) as number],
    [[4], 4],
    [[3, 7, 5], 3]
  ])('first(%p)', (array, expected) => {
    const first = (array as number[]).first();
    expect(first).toBe(expected);
  });

  test.each([
    [[], (undefined as unknown) as number],
    [[4], 4],
    [[3, 7, 5], 5]
  ])('last(%p)', (array, expected) => {
    const last = (array as number[]).last();
    expect(last).toBe(expected);
  });
});
