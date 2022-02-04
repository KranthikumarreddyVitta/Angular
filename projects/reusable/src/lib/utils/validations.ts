import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export function EmailConfirmValidators(): ValidatorFn {
    return (form: AbstractControl): ValidationErrors | null => {
        const original = form.get('original')?.value
        const copy = form.get('copy')?.value
        if (original != copy) {
            return { emailInvalid: true }
        }
        return null
    }
}