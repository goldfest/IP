import {Modal} from "bootstrap";
import { cntrls, imagePlaceholder } from "./lines-ui";

const modal = document.getElementById("items-update");

const myModal = modal ? new Modal(modal, {}) : null;

const modalTitle = document.getElementById("items-update-title");

function resetValues(){
    cntrls.lineId.value = "";
    cntrls.itemsType.value = "";
    cntrls.category.value ="6";
    cntrls.nick.value = "";
    cntrls.genre.value = "";
    cntrls.ocenka.value =  parseFloat(7).toFixed(1);
    cntrls.image.value = "";
    cntrls.imagePreview.src = imagePlaceholder;
}

export function showUpdateModal(item){
    modalTitle.innerHTML = item === null ? "Добавить" : "Изменить";
    console.info(item);

    if(item){
        cntrls.lineId.value = item.id;
        cntrls.itemsType.value = item.itemsId;
        cntrls.category.value = item.category;
        cntrls.nick.value = item.nick;
        cntrls.genre.value = item.genresId;
        cntrls.ocenka.value = item.ocenka;
        cntrls.imagePreview.src = item.image ? item.image : imagePlaceholder;
    }
    else{
        resetValues();
    }
    myModal.show();
}

export function hideUpdateModal(){
    resetValues();
    cntrls.form.classList.remove("was-validated");
    myModal.hide();
}