import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebpackConfigJsComponent } from './webpack.config.js.component';

describe('WebpackConfigJsComponent', () => {
  let component: WebpackConfigJsComponent;
  let fixture: ComponentFixture<WebpackConfigJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebpackConfigJsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebpackConfigJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
