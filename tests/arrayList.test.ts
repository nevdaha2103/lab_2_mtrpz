import { ArrayList } from "../src/arrayList";

describe("ArrayList", () => {
  let list: ArrayList;

  beforeEach(() => {
    list = new ArrayList();
  });

  test("should append elements and get correct length", () => {
    list.append("A");
    list.append("B");
    expect(list.length()).toBe(2);
  });

  test("should delete element by index", () => {
    list.append("A");
    list.append("B");
    expect(list.delete(1)).toBe("B");
    expect(list.length()).toBe(1);
  });

  test("should clear the list", () => {
    list.append("A");
    list.clear();
    expect(list.length()).toBe(0);
  });

  test("should throw error on invalid delete index", () => {
    expect(() => list.delete(0)).toThrow("Invalid index");
  });
});
