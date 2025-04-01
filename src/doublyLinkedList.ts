class Node {
    value: string;
    next: Node | null = null;
    prev: Node | null = null;
  
    constructor(value: string) {
      this.value = value;
    }
  }
  
  export class DoublyLinkedList {
    private head: Node | null = null;
    private tail: Node | null = null;
    private size: number = 0;
  
    length(): number {
      return this.size;
    }
  
    append(element: string): void {
      const newNode = new Node(element);
      if (!this.head) {
        this.head = this.tail = newNode;
      } else {
        this.tail!.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
      this.size++;
    }
  
    delete(index: number): string {
      if (index < 0 || index >= this.size) throw new Error("Invalid index");
  
      let current: Node | null = this.head;
      for (let i = 0; i < index; i++) {
        current = current!.next;
      }
  
      if (!current) throw new Error("Element not found");
  
      if (current.prev) current.prev.next = current.next;
      if (current.next) current.next.prev = current.prev;
      if (current === this.head) this.head = current.next;
      if (current === this.tail) this.tail = current.prev;
  
      this.size--;
      return current.value;
    }
  
    clear(): void {
      this.head = this.tail = null;
      this.size = 0;
    }
  }
  