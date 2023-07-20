// items
const menu = [
    {
        id: 1,
        title: 'buttermilk pancakes',
        category: 'breakfast',
        price: 15.99,
        img: 'img/buttermilk_pncks.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio ea nesciunt, provident commodi ipsum, consectetur a blanditiis, officia cum error magnam laudantium deserunt quidem nihil voluptas alias! Repudiandae, eveniet esse?'
    },

    {
        id: 2,
        title: 'Bacon Potato Waffles',
        category: 'breakfast',
        price: 10,
        img: 'img/Bacon_Potato_Waffles.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio ea nesciunt, provident commodi ipsum, consectetur a blanditiis, officia cum error magnam laudantium deserunt quidem nihil voluptas alias! Repudiandae, eveniet esse?'
    },

    {
        id: 3,
        title: 'belgian waffles',
        category: 'breakfast',
        price: 10,
        img: 'img/belgian_waffles.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio ea nesciunt, provident commodi ipsum, consectetur a blanditiis, officia cum error magnam laudantium deserunt quidem nihil voluptas alias! Repudiandae, eveniet esse?'
    },

    {
        id: 4,
        title: 'Chocolate Waffles',
        category: 'breakfast',
        price: 10,
        img: 'img/Chocolate_Waffles.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio ea nesciunt, provident commodi ipsum, consectetur a blanditiis, officia cum error magnam laudantium deserunt quidem nihil voluptas alias! Repudiandae, eveniet esse?'
    },
    
    {
        id: 5,
        title: 'beef curry',
        category: 'lunch',
        price: 10,
        img: 'img/beef_curry.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio ea nesciunt, provident commodi ipsum, consectetur a blanditiis, officia cum error magnam laudantium deserunt quidem nihil voluptas alias! Repudiandae, eveniet esse?'
    },
    
    {
        id: 6,
        title: 'Beef Korma',
        category: 'lunch',
        price: 10,
        img: 'img/Beef_Korma.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio ea nesciunt, provident commodi ipsum, consectetur a blanditiis, officia cum error magnam laudantium deserunt quidem nihil voluptas alias! Repudiandae, eveniet esse?'
    },
    
    {
        id: 7,
        title: 'beef vindaloo',
        category: 'lunch',
        price: 10,
        img: 'img/beef_vindaloo.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio ea nesciunt, provident commodi ipsum, consectetur a blanditiis, officia cum error magnam laudantium deserunt quidem nihil voluptas alias! Repudiandae, eveniet esse?'
    },
    
    {
        id: 8,
        title: 'vegetable korma',
        category: 'lunch',
        price: 10,
        img: 'img/vegetable_korma.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio ea nesciunt, provident commodi ipsum, consectetur a blanditiis, officia cum error magnam laudantium deserunt quidem nihil voluptas alias! Repudiandae, eveniet esse?'
    },
    
    {
        id: 9,
        title: 'Traditional Mac&Cheese',
        category: 'dinner',
        price: 7.99,
        img: 'img/Traditiona_Mac_and_Cheese.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio ea nesciunt, provident commodi ipsum, consectetur a blanditiis, officia cum error magnam laudantium deserunt quidem nihil voluptas alias! Repudiandae, eveniet esse?'
    },
    
    {
        id: 10,
        title: 'buffalo mac&Cheese',
        category: 'dinner',
        price: 11.99,
        img: 'img/buffalo_mac_and_cheese.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio ea nesciunt, provident commodi ipsum, consectetur a blanditiis, officia cum error magnam laudantium deserunt quidem nihil voluptas alias! Repudiandae, eveniet esse?'
    },
    
    {
        id: 11,
        title: 'bacon broccoli mac&Cheese',
        category: 'dinner',
        price: 9.99,
        img: 'img/bacon_broccoli_mac_n_cheese.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio ea nesciunt, provident commodi ipsum, consectetur a blanditiis, officia cum error magnam laudantium deserunt quidem nihil voluptas alias! Repudiandae, eveniet esse?'
    },
    
    {
        id: 12,
        title: 'BBQ Chicken Mac&Cheese',
        category: 'dinner',
        price: 10.99,
        img: 'img/Barbecue-Chicken-Mac-and-Cheese.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio ea nesciunt, provident commodi ipsum, consectetur a blanditiis, officia cum error magnam laudantium deserunt quidem nihil voluptas alias! Repudiandae, eveniet esse?'
    },
    
    {
        id: 13,
        title: 'strawberry shake',
        category: 'shakes',
        price: 4.99,
        img: 'img/strawberry_shake.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio ea nesciunt, provident commodi ipsum, consectetur a blanditiis, officia cum error magnam laudantium deserunt quidem nihil voluptas alias! Repudiandae, eveniet esse?'
    },
    
    {
        id: 14,
        title: 'chocolate shake',
        category: 'shakes',
        price: 4.99,
        img: 'img/chocolate_shake.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio ea nesciunt, provident commodi ipsum, consectetur a blanditiis, officia cum error magnam laudantium deserunt quidem nihil voluptas alias! Repudiandae, eveniet esse?'
    },
    
    {
        id: 15,
        title: 'vanilla shake',
        category: 'shakes',
        price: 4.99,
        img: 'img/vanilla_shake.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio ea nesciunt, provident commodi ipsum, consectetur a blanditiis, officia cum error magnam laudantium deserunt quidem nihil voluptas alias! Repudiandae, eveniet esse?'
    },
    
    {
        id: 16,
        title: 'mango shake',
        category: 'shakes',
        price: 4.99,
        img: 'img/mango_shake.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio ea nesciunt, provident commodi ipsum, consectetur a blanditiis, officia cum error magnam laudantium deserunt quidem nihil voluptas alias! Repudiandae, eveniet esse?'
    }
]
// кнопки фильтра
const filterButtons = Array.from(document.querySelectorAll('.filter-btn'))
// окошко, куда выводятся предложения меню
const menuItems = document.querySelector('.menu-items')

document.addEventListener('DOMContentLoaded', () => { 
    // когда весь HTML загружен, выбираем категорию 'all' по умолчанию
    filterButtons[0].click()
})

// функция, вставляющая предложения меню, соответствующие фильтру
function insertMenuItem(item) {
    menuItems.insertAdjacentHTML( 'beforeend', `
            <article class="menu-item">
                <img src="${item.img}" alt="menu item">
                <div class="item-info">
                    <header>
                        <h3>${item.title}</h3>
                        <h3 class="price">$${item.price}</h3>
                    </header>
                    <p class="item-description">${item.desc}</p>
                </div>
            </article>`)
}

// обработчик событий на кнопки фильтра
filterButtons.map((btn) => {
    btn.addEventListener('click', (e) => {
        // фиксируем категорию нажатой кнопки
        const category = e.target.dataset.id
        // очищаем меню
        menuItems.innerHTML = ''
        // очищаем стили для прошлой кнопки
        filterButtons.map((btn) => btn.classList.remove('focus'))
        // добавляем стили к нажатой кнопке
        e.target.classList.add('focus')
        
        if (category === 'all') {
            // если выбрана категория 'all', выводим все предложения
            menu.map((item) => {
                insertMenuItem(item)
            })
        } else {
            // если выбрана любая другая категория, выводим только те предложения, которые подходят под выбранную категорию
            menu.map((item) => {
                if(item.category === category) {
                    insertMenuItem(item)
                }
            })
        } 
    })
})