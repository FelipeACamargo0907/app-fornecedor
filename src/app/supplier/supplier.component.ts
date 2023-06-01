import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Supplier } from '../supplier';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent {
  supplier: Supplier[] = [];
  isEditing: boolean = false;
  formGroupSupplier: FormGroup;
  isChecked: boolean = false;

  constructor(private supplierService: SupplierService,
    private formBuilder: FormBuilder) {
    this.formGroupSupplier = formBuilder.group({
      id: [''],
      nome: [''],
      email: [''],
      telefone: [''],
      produto : [''],
      setor : [''],
      isChecked: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.loadSupplier();
  }


  loadSupplier() {
    this.supplierService.getSupplier().subscribe(
      {
        next: data => this.supplier = data
      }
    );
  }

  save() {
    this.isChecked = true;
    if (this.formGroupSupplier.valid) {
      if (this.isEditing) {
        this.supplierService.update(this.formGroupSupplier.value).subscribe(
          {
            next: () => {
              this.loadSupplier();
              this.formGroupSupplier.reset();
              this.isEditing = false;
              this.isChecked = false;
            }
          }
        )
      }
      else {
        this.supplierService.save(this.formGroupSupplier.value).subscribe(
          {
            next: data => {
              this.supplier.push(data)
              this.formGroupSupplier.reset();
              this.isChecked = false;
            }
          }
        );
      }
    }

  }

  edit( supplier: Supplier) {
    this.formGroupSupplier.setValue(supplier);
    this.isEditing = true;

  }

  delete(supplier: Supplier) {
    this.supplierService.delete(supplier).subscribe({
      next: () => this.loadSupplier()
    })

  }
  clean() {
    this.formGroupSupplier.reset();
    this.isEditing = false;
  }


}