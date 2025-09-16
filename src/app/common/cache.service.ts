import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  getItem<T>(key: string): T | null {
    const data = localStorage.getItem(key);
    if (data == null) {
      return null;
    }
    try {
      return JSON.parse(data);
    } catch (err) {
      console.error(`Parsing error ${JSON.stringify(err)}`);
    }
    return null;
  }

  setItem(key: string, data: object | string) {
    if (typeof data === 'string') {
      localStorage.setItem(key, data);
    }
    localStorage.setItem(key, JSON.stringify(data));
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }
}
