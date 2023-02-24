import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenabvComponent } from './sidenabv.component';

describe('SidenabvComponent', () => {
  let component: SidenabvComponent;
  let fixture: ComponentFixture<SidenabvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenabvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenabvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
