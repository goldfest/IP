import {getAllItemTypes, getLine, createLine, getAllLines, deleteLine, updateLine, getAllGenres} from "./lines-rest-api";
import {cntrls, createItemsOption, imagePlaceholder, createTableRow} from "./lines-ui";
import {showUpdateModal, hideUpdateModal } from "./lines-modal";

async function drawItemsSelect(){
    const data = await getAllItemTypes();
    cntrls.itemsType.innerHTML = "";
    cntrls.itemsType.appendChild(createItemsOption("Выберите значение", "", true));
    data.forEach((item)=>{
        cntrls.itemsType.appendChild(createItemsOption(item.name, item.id));
    });
}

async function drawGenresSelect(){
    console.info("drawGenres");
    const data = await getAllGenres();
    cntrls.genre.innerHTML = "";
    cntrls.genre.appendChild(createItemsOption("Выберите значение", "", true));
    data.forEach((item)=>{
        cntrls.genre.appendChild(createItemsOption(item.name, item.id));
    });
}

async function readFile(file){
    const reader = new FileReader();

    return new Promise((resolve, reject) => {
        reader.readAsDataURL(file);
        
        reader.onloadend = () =>{
            const fileContent = reader.result;
            resolve(fileContent);
        };

        reader.onerror = () => {
            reject(new Error("oops, something went wrong with the file reader."));
        };
    });
}

async function drawLinesTable(){
    console.info("Try to load data");
    if(!cntrls.table){
        return;
    }

    const data = await getAllLines();

    console.info(data);

    cntrls.table.innerHTML = "";

    data.forEach((item, index) => { 
        cntrls.table.appendChild(
            createTableRow(
                item,
                index,
                ()=> showUpdateModal(item),
                //()=> location.assign(`add-game.html?id=${item.id}`),
                ()=> removeLine(item.id),
            ),
        );
    });
}

async function addLine(item, category, nick, genre, ocenka, image){
    console.info("Try to add item");

    const data = await createLine(item,category,nick,genre, ocenka, image);
    console.info("Added");
    console.info(data);

    drawLinesTable();
}

async function removeLine(id){
    if(!confirm("Y/N?")){
        console.info("canceled");
        return;
    }
    
    console.info("try to remove item");

    const data = await deleteLine(id);
    console.info(data);
    drawLinesTable();
}

async function editLine(id, item, category, nick, genre, ocenka, image){
    console.info("try ro update");

    const data = await updateLine(id, item, category, nick, genre, ocenka, image);
    console.info("Upd");
    console.info(data);
    drawLinesTable();
}

async function updateImagePreview(){
    const file = cntrls.image.files[0];
    const fileContent = await readFile(file);
    console.info("base64 ", fileContent);
    cntrls.imagePreview.src = fileContent;
}

export function linesForm(){
    console.info("linesForm");

    drawItemsSelect();

    drawGenresSelect();

    drawLinesTable();

    cntrls.image.addEventListener("change", ()=>updateImagePreview());

    cntrls.button.addEventListener("click",()=>showUpdateModal(null));

    cntrls.form.addEventListener("submit", async (event) =>{
        console.info("Form inSubmit");

        event.preventDefault();
        event.stopPropagation();

        if(!cntrls.form.checkValidity()){
            return;
        }

        let imageBase64 = "";

        if(cntrls.imagePreview.src !== imagePlaceholder){
            const result = await fetch(cntrls.imagePreview.src);

            const blob = await result.blob();

            imageBase64 = await readFile(blob);
        }

        const currentId = cntrls.lineId.value;

        if(!currentId){
            await addLine(
                cntrls.itemsType.value,
                cntrls.category.value,
                cntrls.nick.value,
                cntrls.genre.value,
                cntrls.ocenka.value,
                cntrls.imagePreview.src = imageBase64,
            );
        }else{
            await editLine(
                currentId,
                cntrls.itemsType.value,
                cntrls.category.value,
                cntrls.nick.value,
                cntrls.genre.value,
                cntrls.ocenka.value,
                imageBase64,
            );
        }
        hideUpdateModal();
    });

}

export async function linesPageForm(){
    console.info("linesPageForm");

    drawItemsSelect();
    drawGenresSelect();

    const goBack = () => location.assign("/admin.html");

    cntrls.image.addEventListener("change", () => updateImagePreview());

    const urlParams = new URLSearchParams(location.search);

    const currentId = urlParams.get("id");

    if(currentId){
        try{
            const line = await getLine(currentId);

            cntrls.itemsType.value = line.itemsId;
            cntrls.category.value = line.category;
            cntrls.nick.value = line.nick;
            cntrls.genre.value = line.genresId;
            cntrls.ocenka.value = line.ocenka;
            cntrls.imagePreview.src = line.image ? line.image : imagePlaceholder;
        } catch {
            goBack();
        }
    }

    cntrls.form.addEventListener("submit", async (event) => {
        console.info("Form onSubmit");

        event.preventDefault();
        event.stopPropagation();

        if(!cntrls.form.checkValidity()){
            return;
        }

        let imageBase64 = "";

        if(cntrls.imagePreview.src !== imagePlaceholder){
            const result = await fetch(cntrls.imagePreview.src);
            const blob = await result.blob();
            imageBase64 = await readFile(blob);
        }

        if(!currentId){
            await addLine(
                cntrls.itemsType.value,
                cntrls.category.value,
                cntrls.nick.value,
                cntrls.genre.value,
                cntrls.ocenka.value,
                imageBase64,
            );
        } else{
            await editLine(
                currentId,
                cntrls.itemsType.value,
                cntrls.category.value,
                cntrls.nick.value,
                cntrls.genre.value,
                cntrls.ocenka.value,
                imageBase64,
            );
        }
        goBack();
    });
}
