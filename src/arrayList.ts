export class ArrayList {
    private data: string[] = [];
  
    length(): number {
      return this.data.length;
    }
  
    append(element: string): void {
      this.data.push(element);
    }
  
    delete(index: number): string {
      if (index < 0 || index >= this.data.length) throw new Error("Invalid index");
      return this.data.splice(index, 1)[0];
    }
  
    clear(): void {
      this.data = [];
    }
  }
  