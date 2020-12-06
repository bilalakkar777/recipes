export class Recipe {
    constructor(
      public id: string,
      //public userId: string,
      public title: string,
      public description: string,
      public category: string,
      public Ingredients: string,
      public Procedure: string,
      public avg: number,
      public star: number,
      public coverPhotoUrl: string,
      public maidIMG: string, 
      public liked: boolean,
      public tips: string,
      public kal: string,
      public fat: string, 
      public timecook: boolean,
      public timeprep: string
    ) {}
  }


