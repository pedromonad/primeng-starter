import { TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  addProviders,
  inject
} from '@angular/core/testing';

// Load the implementations that should be tested
import { ClientsComponent } from './clients.component';

describe('Clients', () => {
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
    ClientsComponent
  ]));

  it('should log ngOnInit', inject([ ClientsComponent ], (clients) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    clients.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
