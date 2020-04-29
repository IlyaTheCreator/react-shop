import React from 'react'
import './WeeklyFeatured.css'

import Carousel from "react-elastic-carousel";
import ShopItem from "../../ShopItem/ShopItem";

// to be removed later
import item_1 from '../../../assets/images/items/featured/1.jpg'
import item_2 from '../../../assets/images/items/featured/2.jpg'
import item_3 from '../../../assets/images/items/featured/3.jpg'
import item_4 from '../../../assets/images/items/featured/4.jpg'
import item_5 from '../../../assets/images/items/featured/5.jpg'

const items = [
    {
        images: [item_1],
        title: 'Navy Blue Dress For Women',
        price: '19.99',
        status: null,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quas repellendus sedsimilique veniam vero. Iusto neque pariatur tempore ut. At commodi corporis fuga harumis qui repellat rerum. Voluptates.',
        features: [ 'Dynamic Color Options', 'Lots of Size Options', '30-Day Return Policy' ]},
    {
        images: [item_2, item_3],
        title: 'Round Neck Solid Light Blue Shirt asd fasd fasd fasd ',
        price: '12.49',
        status: null,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quas repellendus sedsimilique veniam vero. Iusto neque pariatur tempore ut. At commodi corporis fuga harumiste qui repellat rerum. Voluptates.',
        features: [ 'Dynamic Color Options', 'Lots of Size Options', '30-Day Return Policy' ]
    },
    {
        images: [item_3],
        title: 'Woman Black T-Shirt',
        price: '13.00',
        status: null,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quas repellendus sedsimilique veniam vero. Iusto neque pariatur tempore ut. At commodi corporis fuga harumiste qui repellat rerum. Voluptates.',
        features: [ 'Dynamic Color Options', 'Lots of Size Options', '30-Day Return Policy' ]
    },
    {
        images: [item_4, item_2],
        title: 'Navi-Blue T-Shirt, Round Neck',
        price: '21.00',
        status: 'out-of-stock',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quas repellendus sedsimilique veniam vero. Iusto neque pariatur tempore ut. At commodi corporis fuga harumiste qui repellat rerum. Voluptates.',
        features: [ 'Dynamic Color Options', 'Lots of Size Options', '30-Day Return Policy' ]
    },
    {
        images: [item_5, item_1],
        title: 'White Athletic Shoe',
        price: '35.00',
        status: 'sale',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quas repellendus sedsimilique veniam vero. Iusto neque pariatur tempore ut. At commodi corporis fuga harumiste qui repellat rerum. Voluptates.',
        features: [ 'Dynamic Color Options', 'Lots of Size Options', '30-Day Return Policy' ]
    },
    {
        images: [item_1],
        title: 'Navy Blue Dress For Women',
        price: '19.99',
        status: null,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quas repellendus sedsimilique veniam vero. Iusto neque pariatur tempore ut. At commodi corporis fuga harumiste qui repellat rerum. Voluptates.',
        features: [ 'Dynamic Color Options', 'Lots of Size Options', '30-Day Return Policy' ]
    },
    {
        images: [item_2, item_5],
        title: 'Round Neck Solid Light Blue Shirt asd fasd fasd fasd ',
        price: '12.49',
        status: null,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quas repellendus sedsimilique veniam vero. Iusto neque pariatur tempore ut. At commodi corporis fuga harumiste qui repellat rerum. Voluptates.',
        features: [ 'Dynamic Color Options', 'Lots of Size Options', '30-Day Return Policy' ]
    },
    {
        images: [item_3, item_2],
        title: 'Woman Black T-Shirt',
        price: '13.00',
        status: 'sale',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quas repellendus sedsimilique veniam vero. Iusto neque pariatur tempore ut. At commodi corporis fuga harumiste qui repellat rerum. Voluptates.',
        features: [ 'Dynamic Color Options', 'Lots of Size Options', '30-Day Return Policy' ]
    },
    {
        images: [item_2],
        title: 'Round Neck Solid Light Blue Shirt asd fasd fasd fasd ',
        price: '12.49',
        status: null,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quas repellendus sedsimilique veniam vero. Iusto neque pariatur tempore ut. At commodi corporis fuga harumiste qui repellat rerum. Voluptates.',
        features: [ 'Dynamic Color Options', 'Lots of Size Options', '30-Day Return Policy' ]
    },
    {
        images: [item_3, item_4],
        title: 'Woman Black T-Shirt',
        price: '13.00',
        status: 'sale',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quas repellendus sedsimilique veniam vero. Iusto neque pariatur tempore ut. At commodi corporis fuga harumiste qui repellat rerum. Voluptates.',
        features: [ 'Dynamic Color Options', 'Lots of Size Options', '30-Day Return Policy' ]
    },
    {
        images: [item_2, item_1],
        title: 'Round Neck Solid Light Blue Shirt asd fasd fasd fasd ',
        price: '12.49',
        status: null,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quas repellendus sedsimilique veniam vero. Iusto neque pariatur tempore ut. At commodi corporis fuga harumiste qui repellat rerum. Voluptates.',
        features: [ 'Dynamic Color Options', 'Lots of Size Options', '30-Day Return Policy' ]
    },
    {
        images: [item_3, item_2],
        title: 'Woman Black T-Shirt',
        price: '13.00',
        status: 'out-of-stock',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quas repellendus sedsimilique veniam vero. Iusto neque pariatur tempore ut. At commodi corporis fuga harumiste qui repellat rerum. Voluptates.',
        features: [ 'Dynamic Color Options', 'Lots of Size Options', '30-Day Return Policy' ]
    },
    {
        images: [item_2],
        title: 'Round Neck Solid Light Blue Shirt asd fasd fasd fasd ',
        price: '12.49',
        status: null,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quas repellendus sedsimilique veniam vero. Iusto neque pariatur tempore ut. At commodi corporis fuga harumiste qui repellat rerum. Voluptates.',
        features: [ 'Dynamic Color Options', 'Lots of Size Options', '30-Day Return Policy' ]
    },
    {
        images: [item_3],
        title: 'Woman Black T-Shirt',
        price: '13.00',
        status: 'out-of-stock',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quas repellendus sedsimilique veniam vero. Iusto neque pariatur tempore ut. At commodi corporis fuga harumiste qui repellat rerum. Voluptates.',
        features: [ 'Dynamic Color Options', 'Lots of Size Options', '30-Day Return Policy' ]
    },
    {
        images: [item_4, item_1],
        title: 'Navi-Blue T-Shirt, Round Neck',
        price: '21.00',
        status: null,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quas repellendus sedsimilique veniam vero. Iusto neque pariatur tempore ut. At commodi corporis fuga harumiste qui repellat rerum. Voluptates.',
        features: [ 'Dynamic Color Options', 'Lots of Size Options', '30-Day Return Policy' ]
    },
    {
        images: [item_5],
        title: 'White Athletic Shoe',
        price: '35.00',
        status: 'sale',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quas repellendus sedsimilique veniam vero. Iusto neque pariatur tempore ut. At commodi corporis fuga harumiste qui repellat rerum. Voluptates.',
        features: [ 'Dynamic Color Options', 'Lots of Size Options', '30-Day Return Policy' ]
    },
]
// to be remove later end

const WeeklyFeatured = () => {
    const content = items.map((item, index) => (
            <ShopItem
                {...item}
                key={index}
            />
        )
    )

    return (
        <div className="weekly-items">
            <Carousel
                itemsToShow={5}
                itemsToScroll={1}
                enableMouseSwipe={false}
                pagination={false}
                enableAutoPlay={true}
                autoPlaySpeed={4000}
                showArrows={false}
                transitionMs={300}
            >
                {content}
            </Carousel>
        </div>
    )
}

export default WeeklyFeatured