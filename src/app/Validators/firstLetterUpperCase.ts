import { AbstractControl, ValidatorFn } from "@angular/forms";

export function firstLtterUpperCase():ValidatorFn
{
  return (control : AbstractControl) =>
  {
    const value = <string> control.value;
    if(!value) return null;
    if(value.length==0) return null;
    const firstletter = value[0];
    if(firstletter !== firstletter.toUpperCase())
    {
      return {
        firstLtterUpperCase : {
          messaage : " The first letter must be uppercase "
        }
      }
    }
    return null;
  }

}
