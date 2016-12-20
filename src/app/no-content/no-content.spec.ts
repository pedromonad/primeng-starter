import { TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  addProviders,
  inject
} from '@angular/core/testing';

// Load the implementations that should be tested
import { NoContentComponent } from './no-content.component';

describe('NoContent', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => addProviders([
    // provide a better mock
    {
      provide: ActivatedRoute,
      useValue: {
        data: {
          subscribe: (fn) => fn({yourData: 'yolo'})
        }
      }
    },
    NoContentComponent
  ]));

  it('should log ngOnInit', inject([ NoContentComponent ], (no-content) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    no-content.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
