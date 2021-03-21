const subSection = document.querySelector('.subSection')

const url = "https://dog.ceo/api/breeds/image/random";

axios.get(url)
    .then(res => {
        console.log(res.data.message);
        let newImg = document.createElement('img');
        newImg.src = res.data.message;
        subSection.append(newImg);
    })
    .catch(e => {
        console.log(e);
    })