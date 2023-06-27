export interface Orden {
    id: number;
    solicita: number;
    autoriza: number;
    recibe: number;
    firmasolicita: number;
    firmaautoriza: number;
    firmarecibe: number;
    serie: string;
}
