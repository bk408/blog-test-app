import sum from "./sum";

test("calculating the sum", () => {
    expect(sum(10, 10)).toBe(20)
})

test("another calculation of sum", () => {
    expect(sum(25, 20)).toBe(45)
})