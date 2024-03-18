export class Employee {
    EmployeeId: number;
    EmployeeNumber: string;
    FirstName: string;
    LastName: string;
    Birthday: Date;
    Gender: string;
    Picture: string;
  
    constructor(
      EmployeeId: number,
      EmployeeNumber: string,
      FirstName: string,
      LastName: string,
      Birthday: Date,
      Gender: string,
      Picture: string
    ) {
      this.EmployeeId = EmployeeId;
      this.EmployeeNumber = EmployeeNumber;
      this.FirstName = FirstName;
      this.LastName = LastName;
      this.Birthday = Birthday;
      this.Gender = Gender;
      this.Picture = Picture;
    }
  }