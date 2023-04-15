const panels = document.querySelectorAll(".panel"); //querySelectorAll ile belgede belirtilen css seçiciyle eşleşen tümnesneleri döndürür.

panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        //panel içersindekiler click olduğunda
        removeActive(); //panel active hariç olanları normal boyuta al
        panel.classList.add("active"); //active et yani büyült
    });
});

function removeActive() {
    panels.forEach((panel) => {
        //tüm panelslere ulaştık
        panel.classList.remove("active"); //normalde döndürme
    });
}

//Panel active olarak aldığımız humus adlı yemeği en başta flex:5 olarak aldık ve diğerleri flex:0.5 da kaldı sonrasında js devreye girerek hangi resim click olursa diğerleri 'active'liği kaldırılacak ve click olan resim flex:5 olacak. Böylece açılır kapanır kart uygulaması yapılmış oldu.