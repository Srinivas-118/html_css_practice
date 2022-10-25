function breakfast(idly,dosa){
    console.log(idly,dosa);
    const parcel= `parcel ${idly} plate idly and ${dosa} plate dosa .`;
    return parcel;
}

const idlyParcel= breakfast(4,5);
console.log(idlyParcel);