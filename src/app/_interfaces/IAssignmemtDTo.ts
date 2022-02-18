
export interface IAssignmemtDTo {
    id: number;
    assignmentName?: string | undefined;
    assignmentDescription?: string | undefined;
    isRepeated: boolean;
    startDate: Date;
    endDate?: Date | undefined;
    isDone: boolean;
    assignmentType?: string | undefined;
}
