let draggable = document.getElementsByClassName('drag-item');
let dropZone = document.getElementById('drop-area');

function dragstart_handler(e){
    
    e.dataTransfer.setData('application/my-app', e.target.id);
    e.dataTransfer.effectAllowed = "copy";
}

function dragover_handler(e){
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
}

function drop_handler(e){
    e.preventDefault();
    var data = e.dataTransfer.getData('application/my-app');
    dropZone.appendChild(document.getElementById(data));

}






window.addEventListener('DOMContentLoaded', () => {

    // find single element
    for (let i = 0; i < draggable.length; i++)
    {
        var item = draggable[i];
        // set an unique id to each draggable element
        item.setAttribute('id', item.classList[0]+i);
        // make it draggable
        item.setAttribute('draggable', true);
        // trigger on drag
        item.addEventListener("dragstart", dragstart_handler);

    }

    // drop zone
    dropZone.addEventListener('drop', drop_handler);
    dropZone.addEventListener('dragover', dragover_handler);





});
