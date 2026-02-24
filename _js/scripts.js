(function () {
    const videoContainer = document.getElementById("video-container");

    const video = document.createElement("video");
    video.id = "bg-video";
    video.autoplay = true;
    video.muted = true;       
    video.playsInline = true; 

    const sources = [
        { src: "../_media/_videos/video_intro.mp4", type: "video/mp4" }
    ];

    sources.forEach(({ src, type }) => {
        const source = document.createElement("source");
        source.src = src;
        source.type = type;
        video.appendChild(source);
    });

    Object.assign(video.style, {
        position: "absolute",
        inset: "0",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: "0"
    });

    videoContainer.insertBefore(video, videoContainer.firstChild);

    video.addEventListener("ended", function () {
        videoContainer.style.backgroundImage = "url('../_media/_img/fondo.jpg')";
        videoContainer.style.backgroundSize = "cover";
        videoContainer.style.backgroundPosition = "center";
        video.style.opacity = "0";
        video.style.transition = "opacity 0.8s ease";
        setTimeout(() => video.remove(), 900);
    });

    video.play().catch(() => {
        videoContainer.style.backgroundImage = "url('../_media/_img/fondo.jpg')";
        videoContainer.style.backgroundSize = "cover";
        videoContainer.style.backgroundPosition = "center";
    });
})();


const hospitalityItems = [
    { name: "Restaurants", link: "https://www.icg.es/en/solutions/hospitality/restaurants/" },
    { name: "Pizzerias", link: "https://www.icg.es/en/solutions/hospitality/pizzerias/" },
    { name: "Fast Food", link: "https://www.icg.es/en/solutions/hospitality/fast-food/" },
    { name: "Cafe Bar", link: "#" },
    { name: "Disco", link: "#" },
    { name: "Catering and communities", link: "https://www.icg.es/en/solutions/hospitality/catering-and-communities/" }
];

const retailItems = [
    { name: "Boutiques", link: "https://www.icg.es/en/solutions/retail/boutiques/" },
    { name: "Supermarkets", link: "https://www.icg.es/en/solutions/retail/supermarkets/" },
    { name: "Shoe Stores", link: "https://www.icg.es/en/solutions/retail/shoe-stores/" },
    { name: "Perfumeries", link: "https://www.icg.es/en/solutions/retail/perfume-stores/" }
];

const subnav = document.getElementById("subnav");
const subnavList = document.getElementById("subnav-list");

let activeSection = null;

function renderSubnav(items, sectionId) {
    if (activeSection === sectionId) {
        subnav.classList.add("hidden");
        activeSection = null;
        return;
    }

    subnavList.innerHTML = "";

    items.forEach((item, index) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = item.link;
        a.textContent = item.name;

        if (index === 0) {
            a.style.borderBottomColor = "#ffffff";
            a.style.fontWeight = "600";
        }

        a.addEventListener("click", function (e) {
            subnavList.querySelectorAll("a").forEach(el => {
                el.style.borderBottomColor = "transparent";
                el.style.fontWeight = "500";
            });
            this.style.borderBottomColor = "#ffffff";
            this.style.fontWeight = "600";
        });

        li.appendChild(a);
        subnavList.appendChild(li);
    });

    subnav.classList.remove("hidden");
    activeSection = sectionId;
}

document.getElementById("section-hospitality")
    .addEventListener("click", () => renderSubnav(hospitalityItems, "hospitality"));

document.getElementById("section-retail")
    .addEventListener("click", () => renderSubnav(retailItems, "retail"));

function grabar() { alert('Grabando...'); }
function imprimir() { window.print(); }
function retornar() { history.back(); }
function salir() {
  if (confirm('¿Desea salir del módulo?')) {
    window.location.href = '../index.html'; 
  }
}
