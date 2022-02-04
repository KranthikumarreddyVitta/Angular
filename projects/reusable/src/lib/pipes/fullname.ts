import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'fullName',
    pure: true
})

export class FullNamePipe implements PipeTransform {

    transform(value: any, ...args: any[]) {
        return `${value} ${args[0].selected ? 'Selected' : 'Not Selected'}`
    }

}