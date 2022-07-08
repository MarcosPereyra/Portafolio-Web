import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerYDatosComponent } from './banner-y-datos.component';

describe('BannerYDatosComponent', () => {
  let component: BannerYDatosComponent;
  let fixture: ComponentFixture<BannerYDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerYDatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerYDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
