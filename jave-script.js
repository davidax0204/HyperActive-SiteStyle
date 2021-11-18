const navLinkList = document.getElementsByClassName("navigation-link-inner-drop-down")
const dropDownLinkList = document.getElementsByClassName("navigation-drop-down-inner-menu")
const menuButton =  document.getElementById("menu-button")
const navigationBar = document.getElementById("navigation-bar")
const dropDownContainerList = document.getElementsByClassName("navigation-drop-down-container")

const questionsList = document.getElementsByClassName("qa-question")
const answersList = document.getElementsByClassName("qa-answer")
const arrows = document.getElementsByClassName("fa-arrow-circle-down")

const categoryContainers = document.getElementsByClassName("how-it-work-category-container")
const categoryDropDowns = document.getElementsByClassName("how-it-work-category-inner-menu")

const x_buttom = document.getElementsByClassName('pop-up-x-button')[0]
const modal = document.getElementsByClassName('pop-up-background')[0]

setTimeout(()=>
{
    modal.classList.add('show')
    x_buttom.addEventListener("click", () => 
    {
        modal.classList.remove('show')
    })
}, 5000);


for (let i=0; i<categoryContainers.length; i++)
{
    categoryContainers[i].addEventListener('click',()=>
    {
        if (categoryDropDowns[i].classList.contains("how-it-work-category-inner-menu-collapse"))
        {
            categoryDropDowns[i].classList.remove("how-it-work-category-inner-menu-collapse")
            categoryDropDowns[i].classList.remove("how-it-work-hide")
        }
        else
        {
            categoryDropDowns[i].classList.add("how-it-work-category-inner-menu-collapse")
            categoryDropDowns[i].classList.add("how-it-work-hide")
        }
    })
}

for (let i=0; i<questionsList.length; i++)
{
    questionsList[i].addEventListener('click', ()=>
    {
        if (answersList[i].classList.contains("show"))
        {
            answersList[i].classList.remove("show")
        }
        else 
        {
            answersList[i].classList.add("show")
        }
        if (questionsList[i].children[0].classList.contains("fa-arrow-circle-up"))        
        {
            questionsList[i].children[0].classList.remove("fa-arrow-circle-up")
            questionsList[i].children[0].classList.add("fa-arrow-circle-down")
        } 
        else
        {
            questionsList[i].children[0].classList.remove("fa-arrow-circle-down")
            questionsList[i].children[0].classList.add("fa-arrow-circle-up")
        }
            
    })
}

menuButton.addEventListener("click", () => 
{
    for(let index=0; index<dropDownContainerList.length; index++)
    {
        let dropDownContainer = dropDownContainerList[index];
        if (dropDownContainer.classList.contains("mobile-open"))
            dropDownContainer.classList.remove("mobile-open")
        else
            dropDownContainer.classList.add("mobile-open")
    }
    if(menuButton.classList.contains("open"))
        menuButton.classList.remove("open")
    else
        menuButton.classList.add("open")

    if(navigationBar.classList.contains("mobile-open"))
        navigationBar.classList.remove("mobile-open")
    else
        navigationBar.classList.add("mobile-open")
})

for (let index = 0; index < navLinkList.length;index++)
{
    let navLink = navLinkList[index];
    let dropDownLink = dropDownLinkList[index];

    navLink.addEventListener("click", () => 
    {
    if (dropDownLink.classList.contains("open"))
        dropDownLink.classList.remove("open")
    else
        dropDownLink.classList.add("open")
    })
}
        
       