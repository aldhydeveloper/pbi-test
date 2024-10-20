import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerBiEmbedComponent } from './power-bi-embed.component';

describe('PowerBiEmbedComponent', () => {
  let component: PowerBiEmbedComponent;
  let fixture: ComponentFixture<PowerBiEmbedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PowerBiEmbedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PowerBiEmbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
