import data from "./data.js";
const campainCards = document.querySelector('.latest-campaigns-cards')

const  displayCampaign = (data) =>{
 let showCampaign = data.map((campaign) =>{

    return ` 
    <div class="latest-campaign-card-item">
    <img src="${campaign.img}" alt="">
   
    <div class = "items">
    <div class="latest-campaign-card-animation">
    <div class="outer">
    <div class="inner">
        <div class=" number counter-one">${campaign.percentage}</div>
    </div>
     </div>
        <div class="latest-campaign-card-item-info">
        <div class="item1-info">
            <h3>${campaign.title}</h3>
            <p class="theme-p">${campaign.text}</p>
            <h5 class="theme-p">${campaign.raised}</h5>
            <h5 class="theme-p">${campaign.goal}</h5>
            </div>
            <button class="btn theme-btn theme-donate-btn">${campaign.dondte}<span><i class="fas fa-chevron-right"></i></span></button>
            <button class="btn theme-btn theme-read-more-btn"><span><i class="fas fa-heart"></i></span> ${campaign.donors}</button>
        </div>
    </div>
    </div>
</div>`
 }).join('')

 campainCards.innerHTML = showCampaign;
}
export default displayCampaign;