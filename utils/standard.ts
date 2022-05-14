export function randomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

export function randomFloat(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

export function randomFrom(arr: any[]) {
    return arr[randomInt(0, arr.length)];
}

export function roundNumber(value: number, fractionDigits: number) {
    return Number(value.toFixed(fractionDigits));
}

enum TimeInMs {
    secound = 1000,
    minute = 60 * secound,
    hour = 60 * minute,
    day = 24 * hour,
}

export function dateAddDays(date: Date, numberOfDays: number) {
    return new Date(date.valueOf() + numberOfDays * TimeInMs.day);
}

export function range(from: number, to: number, exclusive = true) {
    const arr = [];
    if (exclusive) {
        for (let i = from; i < to; i++) {
            arr.push(i);
        }
    } else {
        for (let i = from; i <= to; i++) {
            arr.push(i);
        }
    }
    return arr;
}

declare global {
    interface Boolean {
        and(arg: boolean): boolean;
        not(): boolean;
        ifTrue(action: (value: boolean) => void): void;
        ifFalse(action: (value: boolean) => void): void;
    }
}

Boolean.prototype.and = function (arg: boolean): boolean {
    return this && arg;
};

Boolean.prototype.not = function (): boolean {
    return !this;
};

Boolean.prototype.ifTrue = function (action: (value: boolean) => void): void {
    if (this === true) action(this);
};
Boolean.prototype.ifFalse = function (action: (value: boolean) => void): void {
    if (this === false) action(this);
};

export function not(arg: boolean): boolean {
    return !arg;
}

export enum HTTPMethods {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE"
}