const listContainer = document.getElementById("ft_list");

function newItem()
{
    let listText= prompt("Add to list: ")
    if (listText != "")
    {
        manageList(listText)
        saveList();
        console.log("Successfully added!")
    }
}

function manageList(listText)
{
    let addItem = document.createElement("div");
    addItem.classList.add("task");
    addItem.addEventListener("click", removeItem);
    let listContent = document.createTextNode(listText);
    addItem.appendChild(listContent);
    listContainer.prepend(addItem);
}

function saveList()
{
    const savedList =[];
    for (const element of listContainer.children){
        savedList.push(element.textContent);
    }
    localStorage.setItem("listItem", JSON.stringify(savedList));
}

function removeItem()
{
    let deletePrompt =confirm("Remove this from list?");
    if (deletePrompt)
    {
        this.remove();
        saveList();
    }
}
window.onload = () =>
{
    const savedList = JSON.parse(localStorage.getItem("listItem")) || [];
    for (let i = savedList.length - 1; i >= 0; i--)
    {
        manageList(savedList[i]);
}
}