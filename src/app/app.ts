import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { data, fastenerTypeName } from './data';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { combineLatest, debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs';
import { AsyncPipe, DecimalPipe } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

const sortParamName = 'sort',
  searchParamName = 's';

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

function stripCode(code: string) {
  return code.replaceAll(/[\s_-]+/g, '').toLowerCase();
}

@Component({
  selector: 'app-root',
  imports: [AsyncPipe, RouterLink, DecimalPipe, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  readonly #route = inject(ActivatedRoute);
  readonly #router = inject(Router);
  readonly #destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(
        map((value) => value.trim()),
        distinctUntilChanged(),
        takeUntilDestroyed(this.#destroyRef),
      )
      .subscribe((value) => {
        this.#router.navigate([], {
          queryParamsHandling: 'merge',
          queryParams: {
            [searchParamName]: value,
          },
        });
      });

    this.search$.pipe(takeUntilDestroyed(this.#destroyRef)).subscribe((value) => {
      this.searchControl.setValue(value);
    });
  }

  protected readonly searchControl = new FormControl<string>('', { nonNullable: true });

  protected readonly search$ = this.#route.queryParamMap.pipe(
    map((params) => params.get(searchParamName) ?? ''),
    distinctUntilChanged(),
    debounceTime(10),
  );

  protected readonly sort$ = this.#route.queryParamMap.pipe(
    map((params) => params.get(sortParamName) ?? 'code_asc'),
    distinctUntilChanged(),
    debounceTime(10),
  );

  protected readonly data$ = this.search$.pipe(
    switchMap((search) => {
      const strippedSearch = stripCode(search);
      let result = data.filter((item) => stripCode(item.code).includes(strippedSearch));

      return this.sort$.pipe(
        map((sort) => {
          switch (sort) {
            case 'code_asc':
              result = result.sort((n1, n2) => compareValues(n1.code, n2.code, 'asc'));
              break;
            case 'code_desc':
              result = result.sort((n1, n2) => compareValues(n1.code, n2.code, 'desc'));
              break;
            case 'type_asc':
              result = result.sort((n1, n2) => compareValues(n1.type, n2.type, 'asc'));
              break;
            case 'type_desc':
              result = result.sort((n1, n2) => -compareValues(n1.type, n2.type, 'desc'));
              break;
            case 'thread_size_asc':
              result = result.sort((n1, n2) => compareValues(n1.threadSize, n2.threadSize, 'asc'));
              break;
            case 'thread_size_desc':
              result = result.sort((n1, n2) => compareValues(n1.threadSize, n2.threadSize, 'desc'));
              break;
            case 'length_asc':
              result = result.sort((n1, n2) => compareValues(n1.length, n2.length, 'asc'));
              break;
            case 'length_desc':
              result = result.sort((n1, n2) => compareValues(n1.length, n2.length, 'desc'));
              break;
            case 'key_size_asc':
              result = result.sort((n1, n2) => compareValues(n1.keySize, n2.keySize, 'asc'));
              break;
            case 'key_size_desc':
              result = result.sort((n1, n2) => compareValues(n1.keySize, n2.keySize, 'desc'));
              break;
            case 'screwdriver_asc':
              result = result.sort((n1, n2) =>
                compareValues(n1.screwdriver, n2.screwdriver, 'asc'),
              );
              break;
            case 'screwdriver_desc':
              result = result.sort((n1, n2) =>
                compareValues(n1.screwdriver, n2.screwdriver, 'desc'),
              );
              break;
            case 'color_asc':
              result = result.sort((n1, n2) => compareValues(n1.color, n2.color, 'asc'));
              break;
            case 'color_desc':
              result = result.sort((n1, n2) => compareValues(n1.color, n2.color, 'desc'));
              break;
            case 'standard_asc':
              result = result.sort((n1, n2) => compareValues(n1.standard, n2.standard, 'asc'));
              break;
            case 'standard_desc':
              result = result.sort((n1, n2) => compareValues(n1.standard, n2.standard, 'desc'));
              break;
          }
          return {
            sort,
            items: result,
          };
        }),
      );
    }),
  );

  protected readonly fastenerTypeName = fastenerTypeName;
}
