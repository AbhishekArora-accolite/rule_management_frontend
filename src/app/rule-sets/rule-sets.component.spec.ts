import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleSetsComponent } from './rule-sets.component';

describe('RuleSetsComponent', () => {
  let component: RuleSetsComponent;
  let fixture: ComponentFixture<RuleSetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuleSetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RuleSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
