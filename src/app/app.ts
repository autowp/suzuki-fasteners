import { Component, inject } from '@angular/core';
import { data } from './data';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

const sortParamName = 'sort';

function compareValues<T extends number | string | undefined>(n1: T, n2: T, dir: 'asc' | 'desc') {
  const dirN = dir == 'asc' ? 1 : -1;

  if (n1 === undefined) {
    return 1;
  }

  if (n2 === undefined) {
    return -1;
  }

  if (n1 > n2) {
    return dirN;
  }

  if (n1 < n2) {
    return -dirN;
  }

  return 0;
}

@Component({
  selector: 'app-root',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly #route = inject(ActivatedRoute);

  protected data$ = this.#route.queryParamMap.pipe(
    map((params) => params.get(sortParamName)),
    map((sort) => {
      sort = sort ?? 'code_asc';
      let result = data;
      switch (sort) {
        case 'code_asc':
          result = data.sort((n1, n2) => compareValues(n1.code, n2.code, 'asc'));
          break;
        case 'code_desc':
          result = data.sort((n1, n2) => compareValues(n1.code, n2.code, 'desc'));
          break;
        case 'shape_asc':
          result = data.sort((n1, n2) => compareValues(n1.shape, n2.shape, 'asc'));
          break;
        case 'shape_desc':
          result = data.sort((n1, n2) => -compareValues(n1.shape, n2.shape, 'desc'));
          break;
        case 'thread_size_asc':
          result = data.sort((n1, n2) => compareValues(n1.threadSize, n2.threadSize, 'asc'));
          break;
        case 'thread_size_desc':
          result = data.sort((n1, n2) => compareValues(n1.threadSize, n2.threadSize, 'desc'));
          break;
        case 'length_asc':
          result = data.sort((n1, n2) => compareValues(n1.length, n2.length, 'asc'));
          break;
        case 'length_desc':
          result = data.sort((n1, n2) => compareValues(n1.length, n2.length, 'desc'));
          break;
        case 'key_size_asc':
          result = data.sort((n1, n2) => compareValues(n1.keySize, n2.keySize, 'asc'));
          break;
        case 'key_size_desc':
          result = data.sort((n1, n2) => compareValues(n1.keySize, n2.keySize, 'desc'));
          break;
        case 'screwdriver_asc':
          result = data.sort((n1, n2) => compareValues(n1.screwdriver, n2.screwdriver, 'asc'));
          break;
        case 'screwdriver_desc':
          result = data.sort((n1, n2) => compareValues(n1.screwdriver, n2.screwdriver, 'desc'));
          break;
        case 'color_asc':
          result = data.sort((n1, n2) => compareValues(n1.color, n2.color, 'asc'));
          break;
        case 'color_desc':
          result = data.sort((n1, n2) => compareValues(n1.color, n2.color, 'desc'));
          break;
        case 'standard_asc':
          result = data.sort((n1, n2) => compareValues(n1.standard, n2.standard, 'asc'));
          break;
        case 'standard_desc':
          result = data.sort((n1, n2) => compareValues(n1.standard, n2.standard, 'desc'));
          break;
      }
      return {
        sort,
        items: result,
      };
    }),
  );
}
