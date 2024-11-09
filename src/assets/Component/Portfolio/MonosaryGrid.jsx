import React from 'react'
import './Monosary.css'
const images = [
    '../../../../imgaes/image-gallery/bag.png',
    '../../../../imgaes/image-gallery/card.jpg',
    '../../../../imgaes/image-gallery/mobile.jpg',
    '../../../../imgaes/image-gallery/mug.jpg',
    '../../../../imgaes/image-gallery/tab.jpg',
    '../../../../imgaes/image-gallery/watch.png'
]

function MonosaryGrid() {
    return (
        <div className=''>
            {images.map((src, index) => (
                <div key={index} className='mb-2 break-inside-avoid gallery-img'>
                    <img src={src} className='w-25 object-cover rounded-lg' />
                </div>
            ))}

        </div>
    )
}

export default MonosaryGrid