export class DoublyNode {
  value: string;
  next: DoublyNode | null;
  prev: DoublyNode | null;

  constructor(value: string) {
      this.value = value;
      this.next = null;
      this.prev = null;
  }
}

export class DoublyLinkedList {
  private head: DoublyNode | null;
  private tail: DoublyNode | null;
  private size: number;

  constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
  }

  length(): number {
      return this.size;
  }

  append(element: string): void {
      const newNode = new DoublyNode(element);
      if (!this.tail) {
          this.head = this.tail = newNode;
      } else {
          this.tail.next = newNode;
          newNode.prev = this.tail;
          this.tail = newNode;
      }
      this.size++;
  }

  insert(element: string, index: number): void {
    if (index < 0 || index > this.size) throw new Error("Invalid index");
      const newNode = new DoublyNode(element);
      if (index === 0) {
          if (this.head) {
              newNode.next = this.head;
              this.head.prev = newNode;
          }
          this.head = newNode;
          if (!this.tail) this.tail = newNode;
      } else {
          let current = this.head;
          for (let i = 0; i < index - 1; i++) {
              current = current!.next;
          }
          newNode.next = current!.next;
          newNode.prev = current;
          if (current!.next) {
              current!.next.prev = newNode;
          }
          current!.next = newNode;
          if (!newNode.next) this.tail = newNode;
      }
      this.size++;
  }

  delete(index: number): string {
    if (index < 0 || index >= this.size) throw new Error("Invalid index"); 
    let deletedValue: string;
    if (index === 0) {
        deletedValue = this.head!.value;
        this.head = this.head!.next;
        if (this.head) this.head.prev = null;
        if (this.size === 1) this.tail = null;
    } else {
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current!.next;
        }
        deletedValue = current!.value;
        if (current!.prev) current!.prev.next = current!.next;
        if (current!.next) current!.next.prev = current!.prev;
        if (!current!.next) this.tail = current!.prev;
    }
    this.size--;
    return deletedValue;
}

  deleteAll(element: string): void {
      let current = this.head;
      while (current) {
          if (current.value === element) {
              if (current.prev) current.prev.next = current.next;
              if (current.next) current.next.prev = current.prev;
              if (current === this.head) this.head = current.next;
              if (current === this.tail) this.tail = current.prev;
              this.size--;
          }
          current = current.next;
      }
  }

  get(index: number): string {
    if (index < 0 || index >= this.size) throw new Error("Invalid index");
      let current = this.head;
      for (let i = 0; i < index; i++) {
          current = current!.next;
      }
      return current!.value;
  }

  clone(): DoublyLinkedList {
      const newList = new DoublyLinkedList();
      let current = this.head;
      while (current) {
          newList.append(current.value);
          current = current.next;
      }
      return newList;
  }

  reverse(): void {
      let current = this.head;
      let temp = null;
      while (current) {
          temp = current.prev;
          current.prev = current.next;
          current.next = temp;
          current = current.prev;
      }
      if (temp) {
          this.tail = this.head;
          this.head = temp.prev;
      }
  }

  findFirst(element: string): number {
      let current = this.head;
      let index = 0;
      while (current) {
          if (current.value === element) return index;
          current = current.next;
          index++;
      }
      return -1;
  }

  findLast(element: string): number {
      let current = this.tail;
      let index = this.size - 1;
      while (current) {
          if (current.value === element) return index;
          current = current.prev;
          index--;
      }
      return -1;
  }

  clear(): void {
      this.head = this.tail = null;
      this.size = 0;
  }

  extend(otherList: DoublyLinkedList): void {
      let current = otherList.head;
      while (current) {
          this.append(current.value);
          current = current.next;
      }
  }
}