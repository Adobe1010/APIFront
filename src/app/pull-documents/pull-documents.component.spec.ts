import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PullDocumentsComponent } from './pull-documents.component';

describe('PullDocumentsComponent', () => {
  let component: PullDocumentsComponent;
  let fixture: ComponentFixture<PullDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PullDocumentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PullDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
