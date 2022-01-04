import { Component, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-content',
  template: `
    <!-- Modal Header -->
    <div class="modal-header">
        <h5 class="modal-title text-center">Etkinlik Ekle</h5>
        <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body">
      <form [formGroup]="activityForm">
        <div class="form-group">
          <label for="caption">Etkinlik Başlığı</label>
          <input name="caption" type="text" id="caption" class="form-control">
          <div class="main" style="height: 20px;"></div>
          <label for="content">Etkinliğin içeriği nedir?</label>
          <textarea name="content" type="text" class="form-control" id="content" rows="4"></textarea>
        </div>
      </form>
    </div>
    <div class="modal-footer">
        <div class="left-side">
            <button type="button" class="btn btn-default btn-link" (click)="activeModal.close('Close click')">Boş</button>
        </div>
        <div class="divider"></div>
        <div class="right-side">
            <button type="button" class="btn btn-danger btn-link"(click)="addActivity()">Ekle</button>
        </div>
    </div>
    `
})
export class NgbdModalContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal,
  ) { }


  addActivity() {
  }
}

@Component({
  selector: 'app-modal-add-department',
  templateUrl: './modal-add-department.component.html',
  styleUrls: ['./modal-add-department.component.css']
})
export class ModalAddDepartmentComponent {

  constructor(private modalService: NgbModal) { }

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
  }

}
