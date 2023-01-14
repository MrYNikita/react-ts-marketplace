export interface IPlace {

    title?: string;
    locality: string;

    id: number;
    date: number;
    price?: number;
    oldPrice?: number;

    seen: boolean;

};
class PlaceBasic implements IPlace {

    id;
    seen;
    date;
    price;
    title;
    locality;
    oldPrice;

    constructor(t: IPlace) {

        this.id = t.id;
        this.seen = t.seen;
        this.date = t.date;
        this.price = t.price;
        this.title = t.title;
        this.locality = t.locality;
        this.oldPrice = t.oldPrice;

    };

    static parseJson(json: any): PlaceBasic {

        const {

            id,
            seen,
            date,
            price,
            title,
            locality,
            oldPrice,

        } = json;

        return new PlaceBasic({

            id: id - 0,
            seen: seen === 'true' ? true : false,
            date: date - 0,
            price: (price - 0) ?? 0,
            title: title ?? 'Название товарной позиции',
            locality: locality,
            oldPrice: (oldPrice - 0) ?? 0,

        });

    };

};
export class Place extends PlaceBasic {

    constructor(t: IPlace) {

        super(t);

    };

    static parseJson(json: any): Place {

        return new Place(PlaceBasic.parseJson(json));

    };

};