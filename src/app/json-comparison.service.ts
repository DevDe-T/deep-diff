import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonComparisonService {

  constructor() { }

  compareJson(json1: any, json2: any): any[] {
    const differences: any[] = [];
    this.compareObjects(json1, json2, '', differences);
    return differences;
  }

  // Recursive function to compare two objects
  private compareObjects(obj1: any, obj2: any, path: string, differences: any[]): void {
    // Check if both are objects and not arrays or null
    if (typeof obj1 === 'object' && obj1 !== null && typeof obj2 === 'object' && obj2 !== null) {
      // Compare each key in obj1
      for (const key in obj1) {
        if (obj1.hasOwnProperty(key)) {
          const newPath = path ? `${path}.${key}` : key;
          
          // If the key exists in obj2, compare recursively
          if (obj2.hasOwnProperty(key)) {
            this.compareObjects(obj1[key], obj2[key], newPath, differences);
          } else {
            // Property exists in obj1 but not in obj2 (Deleted)
            differences.push({ kind: 'D', path: newPath, value: obj1[key] });
          }
        }
      }

      // Check for properties in obj2 that don't exist in obj1 (Added)
      for (const key in obj2) {
        if (obj2.hasOwnProperty(key) && !obj1.hasOwnProperty(key)) {
          const newPath = path ? `${path}.${key}` : key;
          differences.push({ kind: 'N', path: newPath, value: obj2[key] });
        }
      }
    } else {
      // If values are different, mark it as changed
      if (obj1 !== obj2) {
        differences.push({ kind: 'E', path, oldValue: obj1, newValue: obj2 });
      }
    }
  }
}
