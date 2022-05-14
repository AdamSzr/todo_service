import Chance from 'chance'

const chance = new Chance();

export class Todo{
    id:number
    userUuid:string
    title:string
    text:string
    isDone:boolean
    deathline:number

    static random(){
        let item = new Todo()
        item.userUuid = chance.guid()
        item.title=chance.string()
        item.text = chance.paragraph()
        item.isDone = chance.bool()
        item.deathline=chance.date().valueOf()
        return item
    }
}