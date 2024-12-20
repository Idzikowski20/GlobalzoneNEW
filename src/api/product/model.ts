
export type Product = {
    id: number,
    name: string,//"Happy Cookies",
    detalName: string,//"Kruche ciastka z marmoladą truskawkową",
    productType: string, //"truskawka",
    productCategory: Category,
    weight: number,// 0.135,
    capacity: null,
    unit: Unit, //"kg",
    composition: string, //skład,
    image: string
    // Dodaj inne właściwości, jeśli istnieją
};

export type Category = 'Ciastka' | 'Brykiet' | 'Pelet' | 'Palety'
export type Unit = 'kg' | 'dag' | 'g' | 't'