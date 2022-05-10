import Chance from 'chance'

const chance = new Chance();

export class Todo{
    text:string
    isDone:boolean
    deadline:number

    static random(){
        let item = new Todo()
        item.deadline=chance.date().valueOf()
        item.text = chance.string()
        item.isDone = chance.bool()
        return item
    }
}