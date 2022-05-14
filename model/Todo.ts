import Chance from 'chance'

const chance = new Chance();

export class Todo{
    id:number
    userId:string
    text:string
    isDone:boolean
    deadline:number

    static random(){
        let item = new Todo()
        item.id=chance.integer()
        item.deadline=chance.date().valueOf()
        item.text = chance.paragraph()
        item.isDone = chance.bool()
        item.userId = chance.guid()
        return item
    }
}