export class Puzzle{
    puzzleID: string;
    puzzleGrade: number;
    startDate: Date;

    constructor(puzzleGrade: number){
        this.puzzleID = crypto.randomUUID();
        this.puzzleGrade = 0;
        this.startDate = new Date();
    }
    }

    export const puzzles: Puzzle[]=[];

    puzzles.push(new Puzzle(5));
    puzzles.push(new Puzzle(7));
    puzzles.push(new Puzzle(9));
    puzzles.push(new Puzzle(11));