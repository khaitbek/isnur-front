const filterColor = document.querySelector('.colors');
const filterSex = document.querySelector('.sex');
const filterWrapper1 = document.querySelector('.color1');
const filterWrapper2 = document.querySelector('.color2');

filterColor.addEventListener('click', () => {
    filterColor.classList.toggle('active');
    if (filterColor.classList.contains('active')) {
        filterWrapper1.style.display = 'block';
        document.querySelector('.filter-heading .angle-color').style.transform = `rotate(0)`;
    } else {
        document.querySelector('.filter-heading .angle-color').style.transform = `rotate(180deg)`;
        filterWrapper1.style.display = 'none';
    }
})

filterSex.addEventListener('click', () => {
    filterSex.classList.toggle('active');
    if (filterSex.classList.contains('active')) {
        filterWrapper2.style.display = 'block';
        document.querySelector('.filter-heading .angle-sex').style.transform = `rotate(0)`;
    } else {
        document.querySelector('.filter-heading .angle-sex').style.transform = `rotate(180deg)`;
        filterWrapper2.style.display = 'none';
    }
})
