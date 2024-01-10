const serverUrl = "http://localhost:8081";

export async function getAllItemTypes(){
    const response = await fetch(`${serverUrl}/items`);
    if(!response.ok){
        throw response.statusText;
    }
    return response.json();
}

export async function getAllGenres(){
    const response = await fetch(`${serverUrl}/genres`);
    if(!response.ok){
        throw response.statusText;
    }
    return response.json();
}

export async function getLine(id){
    const response = await fetch(`${serverUrl}/lines/${id}?_expand=items`);
    console.info(response);
    if(!response.ok){
        throw response.statusText;
    }
    return response.json(); 
}

export async function getAllLines(){
    const response = await fetch(`${serverUrl}/lines?_expand=items&_expand=genres`);

    if(!response.ok){
        throw response.statusText;
    }

    return response.json();
}

function createLineObject(item, category, nick, genre, ocenka, image){
    return {
        itemsId: item,
        category,
        nick,
        genresId: genre,
        ocenka,
        image,
    };
}

export async function createLine(item, category, nick, genre, ocenka, image) {
    const itemObject = createLineObject(item, category, nick, genre, ocenka, image);

    const options = {
        method:"POST",
        body: JSON.stringify(itemObject),
        headers:{
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
    };

    const response = await fetch(`${serverUrl}/lines`, options);
    if(!response.ok){
        throw response.statusText;
    }
    return response.json();
}

export async function updateLine(id, item, category, nick, genre, ocenka, image){
    const itemObject = createLineObject(item, category, nick, genre, ocenka, image);

    const options = {
        method: "PUT",
        body: JSON.stringify(itemObject),
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
    };

    const response = await fetch(`${serverUrl}/lines/${id}`, options);
    if(!response.ok){
        throw response.statusText;
    }
    return response.json();
}

export async function deleteLine(id){
    const options = {
        method: "DELETE",
    };

    const response = await fetch(`${serverUrl}/lines/${id}`, options);
    if(!response.ok){
        throw response.statusText;
    }
    return response.json();
}