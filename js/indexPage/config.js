async function sliderFetch(){
    let res = await fetch('http://127.0.0.1:4010/slider');
    let data = await res.json();

    data.map(slide => {
        const el = document.createElement('slider-component');

        el.setAttribute('src', slide.img_uri);
        el.setAttribute('href', slide.link);
        el.setAttribute('title', slide.title);

        document.getElementById("carousel-inner").appendChild(el);
    })
}

sliderFetch();