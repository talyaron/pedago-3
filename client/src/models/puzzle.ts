export class Puzzle{
    puzzleID: string;
    puzzleGrade: number;
    startDate:  Date;
    constructor(puzzleID: string, puzzleGrade: number){
        this.puzzleID = puzzleID;
        this.puzzleGrade = puzzleGrade;
        this.startDate = new Date();
    }
    }