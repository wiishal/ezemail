export interface BaseInputs{
    to:string,
    from:string,
    context:string
}

export interface promptArgs extends BaseInputs {} 
export interface generateInputs extends BaseInputs {}  