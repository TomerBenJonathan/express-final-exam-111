/**
 * BMI Calculator
 */

export const BmiStatus = {
    Underweight: 0,
    HealthyWeight: 1,
    Overweight: 2,
    Obesity: 3
}

export const WeightUnits = {
    KG: 0,     // kilograms
    G: 1,      // grams
    Pound: 2,  // lbs
}

export const HeightUnits = {
    CM: 0,     // centimeter
    M: 1,      // meter
    In: 2,     // inch
    Ft: 3,     // feet
}

export interface BmiInput {
    weight: number;
    weightUnit: number;
    height: number;
    heightUnit: number;
}

export interface BmiOutput {
    bmi: number;
    status: number;
}

/**
 * Takes a BmiInput object and return BmiOutput response
 */
export default function bmi(input: BmiInput): BmiOutput {
    if(input.weightUnit===0){
        input.weight = input.weight
    }else if (input.weightUnit===1){
        input.weight = input.weight/1000
    }else if (input.weightUnit===2){
        input.weight = input.weight/0.45359237
    
    }
    if(input.heightUnit===0){
        input.height= input.height/100
    }else if(input.heightUnit===1){
        input.height= input.height
    }else if(input.heightUnit===2){
        input.height= input.height*2.54/100
    }else if(input.heightUnit===3){
        input.height = input.height*30.48/100
    }
    
    const BMI = input.weight/(input.height**2)
    
    if (BMI<18.5){
        return {BmiStatus.Underweight , BMI }
    }else if (BMI>=18.5 && BMI <=24.9){
        return {BmiStatus.HealthyWeight: Number , BMI: Number }
    }else if (BMI>=25 && BMI <=29.9){
        return {BmiStatus.Overweight , BMI}
    }else if (BMI>=30){
        return {BmiStatus.Obesity , BMI}
    }
}
