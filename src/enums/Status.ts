// TODO: Add Documentation
export enum Status {
    ONGOING,
    FINISHED,
    UNRELEASED,
    DROPPED
}

// TODO: Add documentation
export const ItalianStatusMapping: Record<string, Status> = {
    "IN CORSO": Status.ONGOING,
    "FINITO": Status.FINISHED,
    "NON RILASCIATO": Status.UNRELEASED,
    "DROPPATO": Status.DROPPED
}